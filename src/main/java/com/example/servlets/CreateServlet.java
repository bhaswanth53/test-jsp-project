package com.example.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

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

        if (name == null || name.trim().isEmpty()) {
            errors.put("name", "Name is required.");
        }

        if (phone == null || phone.trim().isEmpty()) {
            errors.put("phone", "Phone is required.");
        } else if (!phone.matches("^\\+?\\d{10,15}$")) { // Allow + at the start for country code
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
        }

        request.setAttribute("message", "Form has been submitted");
        request.getRequestDispatcher("/WEB-INF/views/create.jsp").forward(request, response);
    }
}
