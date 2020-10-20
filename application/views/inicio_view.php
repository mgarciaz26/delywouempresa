<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from ableproadmin.com/bootstrap/default/auth-signin.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 16 May 2020 16:45:05 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>

	<title><?php echo $titulo?></title>
	<!-- HTML5 Shim and Respond.js IE11 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 11]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	<!-- Meta -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="description" content="" />
	<meta name="keywords" content="">
	<meta name="author" content="Phoenixcoded" />
	
	<!-- Favicon icon -->
	<link rel="icon" href="<?php echo URL_IMAGES ?>favicon.ico" type="image/x-icon">

	<!-- vendor css -->
	<link rel="stylesheet" href="<?php echo URL_CSS ?>style.css">

</head>

<body>
<!-- [ auth-signin ] start -->
<div class="auth-wrapper">
	<div class="auth-content">
		<div class="card">
			<div class="row align-items-center text-center">
				<div class="col-md-12">
					<div class="card-body">
						<img src="<?php echo URL_IMAGES ?>logo-dark.png" alt="" class="img-fluid mb-4">
						<h4 class="mb-3 f-w-400">Negocios</h4>
						<form id="frmLogin" autocomplete="off" >
							<div class="form-group mb-3">
								<label class="floating-label" for="usuario">Correo electrónico</label>
								<input type="text" class="form-control" id="usuario" name="usuario" v-model="usuario" placeholder="">
							</div>
							<div class="form-group mb-4">
								<label class="floating-label" for="contrasena">Contraseña</label>
								<input type="password" class="form-control" id="contrasena" name="contrasena" v-model="contrasena" placeholder="">
							</div>						
							<button class="btn btn-block btn-primary mb-4">Acceder</button>
							<p class="mb-2 text-muted">Olvidó su contraseña? <a href="auth-reset-password.html" class="f-w-400">Clik aquí</a></p>
						</from>
						<div id="mensaje" ></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- [ auth-signin ] end -->

	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
	
	<!-- Required Js -->	
	<script src="<?php echo URL_JS ?>vendor-all.min.js"></script>
	<script src="<?php echo URL_JS ?>plugins/bootstrap.min.js"></script>
	<script src="<?php echo URL_JS ?>ripple.js"></script>
	<script src="<?php echo URL_JS ?>plugins/jquery.validate.min.js"></script>
	<script src="<?php echo URL_JS ?>pcoded.min.js"></script>
	<script src="<?php echo URL_JS ?>pages/jsConfig.js"></script>
	<script src="<?php echo URL_JS ?>pages/forms/login/Login.js"></script>

</body>

</html>
