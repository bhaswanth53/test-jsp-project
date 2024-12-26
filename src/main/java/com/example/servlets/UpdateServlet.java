package com.example.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.example.utils.DatabaseConnection;

@WebServlet("/update")
public class UpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = DatabaseConnection.getConnection();
            String sql = "SELECT * FROM employees WHERE id = ?";
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            rs = stmt.executeQuery();

            if (rs.next()) {
                request.setAttribute("id", rs.getInt("id"));
                request.setAttribute("name", rs.getString("name"));
                request.setAttribute("email", rs.getString("email"));
                request.setAttribute("phone", rs.getString("phone"));
                request.setAttribute("joiningDate", rs.getString("joining_date"));
            } else {
                request.setAttribute("message", "Employee not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            request.setAttribute("message", "Error fetching employee data: " + e.getMessage());
        } finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        request.getRequestDispatcher("/WEB-INF/views/update.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String joiningDate = request.getParameter("date");

        Map<String, String> errors = new HashMap<>();

        // Validate form inputs
        if (name == null || name.trim().isEmpty()) {
            errors.put("name", "Name is required.");
        }

        if (phone == null || phone.trim().isEmpty()) {
            errors.put("phone", "Phone is required.");
        } else if (!phone.matches("^\\+?\\d{10,15}$")) {
            errors.put("phone", "Phone must be a valid number with 10-15 digits.");
        }

        if (email == null || email.trim().isEmpty()) {
            errors.put("email", "Email is required.");
        } else if (!email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")) {
            errors.put("email", "Email must be a valid email address.");
        }

        if (joiningDate == null || joiningDate.trim().isEmpty()) {
            errors.put("joiningDate", "Joining date is required.");
        }

        if (!errors.isEmpty()) {
            request.setAttribute("errors", errors);
            request.setAttribute("message", "Invalid form data");
            request.getRequestDispatcher("/WEB-INF/views/update.jsp").forward(request, response);
            return;
        }

        Connection conn = null;
        PreparedStatement checkStmt = null;
        PreparedStatement updateStmt = null;
        ResultSet rs = null;

        try {
            conn = DatabaseConnection.getConnection();
            if (conn == null) {
                throw new SQLException("Failed to establish a database connection.");
            }

            // Check if another employee has the same email
            String checkSql = "SELECT COUNT(*) FROM employees WHERE email = ? AND id != ?";
            checkStmt = conn.prepareStatement(checkSql);
            checkStmt.setString(1, email);
            checkStmt.setInt(2, id);
            rs = checkStmt.executeQuery();

            if (rs.next() && rs.getInt(1) > 0) {
                errors.put("email", "Email already exists in the database.");
                request.setAttribute("errors", errors);
                request.setAttribute("message", "Duplicate email error.");
                request.getRequestDispatcher("/WEB-INF/views/update.jsp").forward(request, response);
                return;
            }

            // Update employee record
            String updateSql = "UPDATE employees SET name = ?, email = ?, phone = ?, joining_date = ? WHERE id = ?";
            updateStmt = conn.prepareStatement(updateSql);
            updateStmt.setString(1, name);
            updateStmt.setString(2, email);
            updateStmt.setString(3, phone);
            updateStmt.setString(4, joiningDate);
            updateStmt.setInt(5, id);

            int rowsAffected = updateStmt.executeUpdate();
            if (rowsAffected > 0) {
                request.setAttribute("message", "Employee updated successfully.");
            } else {
                request.setAttribute("message", "Error: No rows updated.");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            request.setAttribute("message", "Error: " + e.getMessage());
        } finally {
            try {
                if (rs != null) rs.close();
                if (checkStmt != null) checkStmt.close();
                if (updateStmt != null) updateStmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        response.sendRedirect(request.getContextPath() + "/employees");
    }
}
