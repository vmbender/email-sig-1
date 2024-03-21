<!DOCTYPE html>
<html>
<head>
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="width=device-width, initial-scale=1" name="viewport" />
<meta content="en-us" http-equiv="Content-Language" />
<meta content="text/html; charset=windows-1252" http-equiv="Content-Type" />
<title>Confirmation - Summer 2019 Registration</title>
<link href="../JQuery/css/sunny/jquery-ui-1.8.19.custom.css" rel="stylesheet" type="text/css" />
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="../css/mines-forms.css" rel="stylesheet" type="text/css" />
</head>

<body style="font-size: 16px !important">
<div class="container">
	<div class="row">
		<div class="col-md-24 pageTitle textBlue center">Summer 2019 Registration Form Confirmation</div>
	</div>
  <div class="row">
  	<div class="col-md-12 col-md-offset-6">
			<%=Request.Form("confirm_template")%>
		</div>
  </div>
</div>
<script language="javascript" src="../JQuery/jquery-1.7.2.min.js" type="text/javascript"></script>
<script language="javascript" src="../JQuery/jquery-ui-1.8.19.custom.min.js" type="text/javascript"></script>
<script src="../bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
</body>
</html>
