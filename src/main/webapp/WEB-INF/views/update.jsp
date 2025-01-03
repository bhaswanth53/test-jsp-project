<!DOCTYPE html>
<html>
    <head>
        <title>Update Employee</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/app.css" />
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="text-align: center;">Edit Employee</h1>
                <a href="${pageContext.request.contextPath}/employees">
                    <button>Employees Listing</button>
                </a>
            </div>

            <% 
                String message = (String) request.getAttribute("message");
                if (message != null && !message.trim().isEmpty()) { 
            %>
                <div class="alert alert-primary alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <%= message %>
                </div>
            <% } %>

            <form action="${pageContext.request.contextPath}/update" method="POST" id="update-form">
                <input type="hidden" name="id" value="<%= request.getAttribute("id") %>" />
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="name" value="<%= request.getAttribute("name") %>" />
                            <span class="error-label" id="name-error">${errors != null && errors.name != null ? errors.name : ''}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Email Address <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="email" value="<%= request.getAttribute("email") %>" />
                            <span class="error-label" id="email-error">${errors != null && errors.email != null ? errors.email : ''}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Phone Number <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="phone" value="<%= request.getAttribute("phone") %>" />
                            <span class="error-label" id="phone-error">${errors != null && errors.phone != null ? errors.phone : ''}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Date of Joining <span class="text-danger">*</span></label>
                            <input type="date" class="form-control" name="date" value="<%= request.getAttribute("joiningDate") %>" />
                            <span class="error-label" id="date-error">${errors != null && errors.joiningDate != null ? errors.joiningDate : ''}</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </form>
        </div>

        <script src="${pageContext.request.contextPath}/js/app.js"></script>
    </body>
</html>
