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

@WebServlet("/create")
public class CreateServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("message", "");
        request.getRequestDispatcher("/WEB-INF/views/create.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String phone = request.getParameter("phone");
        String email = request.getParameter("email");
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
            request.getRequestDispatcher("/WEB-INF/views/create.jsp").forward(request, response);
            return;
        }

        // Connection and statements
        Connection conn = null;
        PreparedStatement checkStmt = null;
        PreparedStatement insertStmt = null;
        ResultSet rs = null;

        try {
            conn = DatabaseConnection.getConnection();  // Get a new connection
            if (conn == null) {
                throw new SQLException("Failed to establish a database connection.");
            }

            // Check if email already exists
            String checkSql = "SELECT COUNT(*) FROM employees WHERE email = ?";
            checkStmt = conn.prepareStatement(checkSql);
            checkStmt.setString(1, email);
            rs = checkStmt.executeQuery();

            if (rs.next() && rs.getInt(1) > 0) {
                errors.put("email", "Email already exists in the database.");
                request.setAttribute("errors", errors);
                request.setAttribute("message", "Duplicate email error.");
                request.getRequestDispatcher("/WEB-INF/views/create.jsp").forward(request, response);
                return;
            }

            // If email does not exist, proceed with insertion
            String insertSql = "INSERT INTO employees (name, email, phone, joining_date) VALUES (?, ?, ?, ?)";
            insertStmt = conn.prepareStatement(insertSql);
            insertStmt.setString(1, name);
            insertStmt.setString(2, email);
            insertStmt.setString(3, phone);
            insertStmt.setString(4, joiningDate);

            int rowsAffected = insertStmt.executeUpdate();  // Execute the insert
            if (rowsAffected > 0) {
                request.setAttribute("message", "Form has been submitted successfully.");
            } else {
                request.setAttribute("message", "Error: No rows affected.");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            request.setAttribute("message", "Error: " + e.getMessage());
        } finally {
            // Ensure closing resources in the correct order
            try {
                if (rs != null) {
                    rs.close();  // Close result set first
                }
                if (checkStmt != null) {
                    checkStmt.close();  // Close check statement
                }
                if (insertStmt != null) {
                    insertStmt.close();  // Close insert statement
                }
                if (conn != null) {
                    conn.close();  // Close connection last
                }
            } catch (SQLException e) {
                e.printStackTrace();  // Handle close exception
            }
        }

        request.getRequestDispatcher("/WEB-INF/views/create.jsp").forward(request, response);
    }
}
