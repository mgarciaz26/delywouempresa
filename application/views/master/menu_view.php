<!-- [ navigation menu ] start -->
<nav class="pcoded-navbar menu-light ">
		<div class="navbar-wrapper  ">
			<div class="navbar-content scroll-div " >
				
				<div class="">
					<div class="main-menu-header">
					<!-- v-bind:src="imagen" -->
					<!-- src="< ?php echo URL_IMAGES ?>user/avatar-2.jpg" -->

						<img  style="width:80px;height:80px" class="img-radius" id="imgperfil" src="<?php echo URL_IMAGES ?>user/avatar-2.jpg"  alt="User-Profile-Image">
						<div class="user-details">
							<div id="more-details"><span class="razonsocial" ></span></div>
							<!-- <div id="more-details"></div> -->
						</div>
					</div>
					
				</div>
				
				<ul class="nav pcoded-inner-navbar ">
					<li class="nav-item pcoded-menu-caption">
						<label>Menú</label>
					</li>
					<li class="nav-item pcoded-hasmenu">
						<a href="#!" class="nav-link" ><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Maestros</span></a>
						<ul class="pcoded-submenu">
							<li><a href="<?php echo URL_MAIN_ADMIN ?>categoria">Categoria</a></li>
							<li><a href="<?php echo URL_MAIN_ADMIN ?>producto">Producto</a></li>							
						</ul>
					</li>
					<!-- <li class="nav-item pcoded-hasmenu">
						<a href="#!" class="nav-link" ><span class="pcoded-micon"><i class="feather icon-mail"></i></span><span class="pcoded-mtext">Bandeja de entrada</span></a>
						<ul class="pcoded-submenu">
							<li><a href="< ?php echo URL_MAIN_ADMIN ?>pedido">Pedido</a></li>
						</ul>
					</li> -->
					<li class="nav-item pcoded-hasmenu">
						<a href="#!" class="nav-link" ><span class="pcoded-micon"><i class="feather icon-mail"></i></span><span class="pcoded-mtext">Reportes</span></a>
						<ul class="pcoded-submenu">
							<li><a href="<?php echo URL_MAIN_ADMIN ?>rptpedido">Pedido</a></li>
						</ul>
					</li>
					<li class="nav-item pcoded-hasmenu">
						<a href="#!" class="nav-link" ><span class="pcoded-micon"><i class="feather icon-settings"></i></span><span class="pcoded-mtext">Configuración</span></a>
						<ul class="pcoded-submenu">
							<li><a href="<?php echo URL_MAIN_ADMIN ?>perfil">Perfil</a></li>
							<!-- <li><a href="< ?php echo URL_MAIN_ADMIN ?>horario">Horario</a></li> -->
						</ul>
					</li>
				</ul>
								
			</div>
		</div>
	</nav>
	<!-- [ navigation menu ] end -->