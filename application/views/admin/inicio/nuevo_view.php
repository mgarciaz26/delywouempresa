<div class="modal fade" id="modal-report" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><?php echo $titulo_nuevo ?></h5>
                <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <!-- <form id="frmData"> -->
            <div id="frmData">
                <div class="modal-body">

                    <input type="hidden" id="id" name="id" v-model="id">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="floating-label">Cliente</label>
                                <input type="text" class="form-control" id="cliente" name="cliente"
                                    placeholder="Ingrese nombre" disabled="true" v-model="cliente" style="padding-left: 10px;">
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="form-group">
                                <label class="floating-label">Medio de pago</label>
                                <input type="text" class="form-control" id="mediopago" name="mediopago"
                                    placeholder="Ingrese nombre" disabled="true" v-model="mediopago" style="padding-left: 10px;">
                            </div>
                        </div>
                        <!-- <div class="col-sm-12"> -->
                            <div class="col-lg-12">
                                <div class="form-group form-inline">
                                <!-- <div class="form-inline"> -->
                                    <label class="floating-label">Dirección</label>
                                    <input type="text" class="form-control col-sm-10" id="direccion" name="direccion"
                                        placeholder="Ingrese nombre" disabled="true" v-model="direccion" style="padding-left: 10px;">                                        
                                    <button type="button" class="btn btn-primary" style="margin-left: 5px;" data-toggle="modal" data-target="#modal-report-mapa" onclick="VerMapa()"><i class="feather mr-1 icon-eye"></i> Ver Mapa</button>                                                                                            
                                <!-- </div> -->
                                </div>
                                <!-- <div class="form-group">
                                    <button class="btn btn-primary" onclick="BuscarDireccion()"><i class="feather mr-1 icon-search"></i> Buscar</button>                                                        
                                </div>                           -->
                            </div>
                            <!-- <div class="col-sm-3">
                                    <button class="btn btn-primary" onclick="BuscarDireccion()"><i class="feather mr-1 icon-search"></i> Buscar</button>                                                        
                            </div> -->
                        <!-- </div>                         -->
                        <div class="col-sm-12">
                            <div class="card ">

                                <div class="card-body"  >
                                    <div class="align-middle m-b-30" v-for="item in detalle" >
                                        <img v-bind:src="item.imagen" alt="user image"
                                            class="wid-40 align-top m-r-15" />
                                        <div class="d-inline-block">
                                            <a href="#!">
                                                <h6>{{ item.nombre }}</h6>
                                            </a>                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-on:click="Recepcionar" ><i class="feather mr-2 icon-save"></i> Aceptar</button>
                </div>
                
            <!-- </form> -->
            </div>
        </div>
    </div>
</div>

<?php $this->load->view('admin/inicio/mapa_view'); ?>

