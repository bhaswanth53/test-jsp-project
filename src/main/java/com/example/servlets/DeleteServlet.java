package com.example.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.example.utils.DatabaseConnection;

@WebServlet("/delete")
public class DeleteServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String idParam = request.getParameter("id");

        if (idParam == null || idParam.isEmpty()) {
            request.setAttribute("message", "ID is empty.");
            response.sendRedirect(request.getContextPath() + "/employees");
            return;
        }

        int id;
        try {
            id = Integer.parseInt(idParam);
        } catch (NumberFormatException e) {
            request.setAttribute("message", "ID number format error.");
            response.sendRedirect(request.getContextPath() + "/employees");
            return;
        }

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = DatabaseConnection.getConnection();
            if (conn == null) {
                throw new SQLException("Failed to establish a database connection.");
            }

            String deleteSql = "DELETE FROM employees WHERE id = ?";
            stmt = conn.prepareStatement(deleteSql);
            stmt.setInt(1, id);

            int rowsAffected = stmt.executeUpdate();
            if (rowsAffected > 0) {
                request.setAttribute("message", "Employee deleted successfully.");
            } else {
                request.setAttribute("message", "Error: No employee found with the given ID.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            request.setAttribute("message", "Error: " + e.getMessage());
        } finally {
            try {
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        response.sendRedirect(request.getContextPath() + "/employees");
    }
}
