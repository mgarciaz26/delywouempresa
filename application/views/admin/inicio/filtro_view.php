<div class="modal fade" id="modal-report-filtro" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Filtro de Datos</h5>
                <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>            
            <div id="frmData">
                <div class="modal-body">

                    <!-- <input type="hidden" id="id" name="id" v-model="id"> -->
                    <div class="row">                        
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="floating-label">Direccion</label>
                                <select class="form-control"  v-on:change="onChangeDireccion($event)">                                    
                                    <option v-for="item in listaDireccion" v-text="item.direccion" :value="item.direccion_Id"></option>
                                </select>
                            </div>
                        </div>    
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="floating-label">Clientes</label>
                                <select class="form-control"  v-on:change="onChangeCliente($event)">                                    
                                    <option v-for="item in listaClientes" :value="item.cliente_id" v-text="item.Nombres"></option>                                    
                                </select>
                            </div>
                        </div>                    
                        <div class="col-sm-12">
                            <div class="form-group">
                            <label class="floating-label">Medio Pago</label>
                                <select class="form-control"  v-on:change="onChangeMedioPago($event)">                                                                        
                                    <option v-for="item in listamediopago" :value="item.mediopago_id" v-text="item.mediopago"></option>                                    
                                </select>                                
                            </div>
                        </div>                                                    
                    </div>
                </div>
                <div class="modal-footer">                
                    <button type="button" class="btn btn-primary" ><i class="feather mr-2 icon-search" v-on:click="Recepcionar()"></i> Buscar</button>
                </div>                            
            </div>
        </div>
    </div>
</div>


<script src="<?php echo URL_JS ?>pages/forms/admin/Filtro.js"></script>
