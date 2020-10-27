<div class="col-lg-12 col-md-12">
            
                <div class="card user-card user-card-1 mt-4">
                    <div id="frmData" class="card-body pt-0">                                             
                        <div class="container">
                            <div class="portada">                                 
                                <img  v-bind:src="imagenportada" alt="Imagen de Portada" class="img-fluid rounded" style="margin-top: 10px;height: 240px;width: 100%;" />                                                              
                            </div>  
                        </div>                                        
                        <div class="user-about-block text-center">                          
                            <div class="row align-items-end">
                                <div class="col text-left pb-3">                                    
                                        <div class="switch switch-danger d-inline m-r-10" >
                                            <!-- <input type="checkbox" id="switch-d-1" name="switch-d-1" v-model="switch-d-1" @change="CambiarEstado($event)"> -->
                                            <input type="checkbox" id="switch-d-1" name="switch-d-1" v-model="selectchanged"  
                                            v-on:change="CambiarEstado" v-bind:class="[{'active':selectchanged}]"
                                            
                                            >
                                            <label for="switch-d-1" class="cr"></label>
                                        </div>
                                        <label>{{estadodesc}}</label>                                    
                                </div>                                
                                <div class="col"><img class="img-radius img-fluid wid-80"  v-bind:src="imagen" alt="User image" style="width: 100px;height: 100px;"></div>
                                <div class="col text-right pb-3">
                                    <div class="dropdown">
                                        <a class="drp-icon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-horizontal"></i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                        <!-- data-dismiss="modal" -->
                                            <a class="dropdown-item"  href="#" data-toggle="modal" onClick="CargarImagen()">Editar Foto de perfil </a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" onClick="CargarImagenPortada()">Editar Foto de portada</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"  onClick="LocalizarDireccion()" >Editar Ubicación</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"  onClick="CambiarContrasenia()" >Cambiar Contraseña</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <a href="#!">
                                <h4 class="mb-1 mt-3">{{nombre}}</h4>
                            </a>
                            <p class="mb-3 text-muted"><i class="feather icon-calendar"> </i> {{fechanacimiento}}</p>
                            <p class="mb-1"><b>Email : </b><a href="mailto:dummy@example.com">{{email}}</a></p>                            
                            <p class="mb-1"><b>Telefono : </b><a href="mailto:dummy@example.com">{{telefono}}</a></p>                            
                        </div>
                        <?php $this->load->view('admin/perfil/imagenperfil_view'); ?>
                        <?php $this->load->view('admin/perfil/imagenportada_view'); ?>                        
                        <?php $this->load->view('admin/perfil/cambiarcontrasenia_view'); ?>                        
                    </div>                
                </div>                                
            </div>    
            <!-- <img src="https://i1.wp.com/elpoderdelasideas.com/wp-content/uploads/guns-n-roses-logo.png?fit=550%2C268&ssl=1" class='portada'/> -->
            
            