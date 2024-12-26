<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
        <title>Test JSP</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/app.css" />
</head>
<body>
    <div class="header">
        <h1 style="text-align: center;">Employee List</h1>
        <a href="${pageContext.request.contextPath}/create">
            <button>Create Employee</button>
        </a>
    </div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Joining Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <% 
                // Retrieve the employees list from the request scope
                java.util.List<com.example.models.Employee> employees = 
                    (java.util.List<com.example.models.Employee>) request.getAttribute("employees");

                if (employees != null && !employees.isEmpty()) {
                    for (com.example.models.Employee employee : employees) {
            %>
                        <tr>
                            <td><%= employee.getId() %></td>
                            <td><%= employee.getName() %></td>
                            <td><%= employee.getEmail() %></td>
                            <td><%= employee.getPhone() %></td>
                            <td><%= employee.getJoiningDate() %></td>
                            <td>
                                <div class="btn-group">
                                    <a href="${pageContext.request.contextPath}">
                                        <button class="btn btn-xs btn-info">Edit</button>
                                    </a>
                                    <a href="${pageContext.request.contextPath}">
                                        <button class="btn btn-xs btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
            <% 
                    }
                } else { 
            %>
                    <tr>
                        <td colspan="5" style="text-align: center;">No employees found.</td>
                    </tr>
            <% 
                }
            %>
        </tbody>
    </table>

    <script src="${pageContext.request.contextPath}/js/app.js"></script>
</body>
</html>
