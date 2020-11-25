<div class="tab-content" id="myTabContent">

    <!-- varient [ Profile ] card Start -->
    <div id="frmData" class="tab-pane fade show active" id="user4" role="tabpanel" aria-labelledby="user4-tab">
        <div class="row mb-n4">
            <div class="col-xl-8">
                <div class="card user-card user-card-2 shape-right">
                    <div class="card-header border-0 p-2 pb-0">
                        <div class="cover-img-block">
                            <img v-bind:src="imagenportada" alt="" class="img-fluid" style="height: 240px;width: 100%;">
                            <div class="overlay"></div>
                            <div class="change-cover">
                                <div class="dropdown">
                                    <a class="drp-icon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false"><i class="icon feather icon-camera"></i></a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" data-toggle="modal"
                                            onClick="CargarImagenPortada()"><i
                                                class="feather icon-upload-cloud mr-2"></i>Editar foto de portada</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <div class="user-about-block">
                            <div class="row align-items-center">
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-auto col pr-0">
                                            <div class="change-profile">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        <div class="profile-dp">
                                                            <img class="img-radius img-fluid wid-100"
                                                                v-bind:src="imagen" alt="User image" style="height: 100px;width: 100px;">
                                                            <div class="overlay">
                                                                <span>Cambiar</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="#" data-toggle="modal"
                                                            onClick="CargarImagen()"><i
                                                                class="feather icon-upload-cloud mr-2"></i>Editar foto
                                                            de perfil</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6 class="mb-1">{{nombre}}</h6>
                                            <p class="mb-0">Email: {{email}}</p>
                                            <p class="mb-0">Teléfono: {{telefono}}</p>
                                            <p class="mb-0">Fecha Nac.: {{fechanacimiento}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 order-md-1">
                <div class="card new-cust-card">
                    <div class="card-header">
                        <h5>Editar</h5>
                        <div class="card-header-right">
                            
                        </div>
                    </div>
                    <div class="cust-scroll ps ps--active-y">
                        <div class="card-body p-b-0">
                            <div class="align-middle m-b-25">                               
                                <div class="d-inline-block">
                                    <a href="#!" data-toggle="modal" onClick="LocalizarDireccion()">
                                        <h6><i class="feather icon-edit"></i> Editar dirección</h6>
                                    </a>                                   
                                </div>
                                
                            </div>
                            <div class="align-middle m-b-25">                               
                                <div class="d-inline-block">
                                    <a href="#!" data-toggle="modal" onClick="CambiarContrasenia()">
                                        <h6><i class="feather icon-map-pin"></i> Cambiar constraseña</h6>
                                    </a>                                   
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- varient [ Profile ] card End -->
</div>

<?php $this->load->view('admin/perfil/imagenperfil_view'); ?>
<?php $this->load->view('admin/perfil/imagenportada_view'); ?>
<?php $this->load->view('admin/perfil/cambiarcontrasenia_view'); ?>