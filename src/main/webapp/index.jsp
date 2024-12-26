<!DOCTYPE html>
<html>
    <head>
        <title>Test JSP</title>

        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/app.css" />
    </head>
    <body>
        <h1>Employee Listing</h1>
        <a href="${pageContext.request.contextPath}/employees">
            <button>Employees Listing</button>
        </a>

        <script src="${pageContext.request.contextPath}/js/app.js"></script>
    </body>
</html>
