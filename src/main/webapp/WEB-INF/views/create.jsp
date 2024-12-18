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
        <div class="container">
            <h1>Create Employee</h1>
    
            <form action="" method="POST" id="create-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Email Address <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="email" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Phone Number <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="phone" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Date of Joining <span class="text-danger">*</span></label>
                            <input type="date" class="form-control" name="date" />
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>

        <script src="${pageContext.request.contextPath}/js/app.js"></script>
    </body>
</html>
