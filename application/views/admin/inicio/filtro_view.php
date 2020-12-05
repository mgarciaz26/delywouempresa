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
            <div id="frmDataFiltro">
                <div class="modal-body">

                    <!-- <input type="hidden" id="id" name="id" v-model="id"> -->
                    <div class="row">                                        
                        <!-- <div class="col-md-12">
                            <div class="form-group fill">
                                <label style="color: red;font-size: 0.75rem;top: -10px;" class="floating-label">Direccion</label>
                                <select class="form-control"  v-on:change="onChangeDireccion($event)">                                    
                                    <option v-for="item in listaDireccion" v-text="item.direccion" :value="item.direccion_Id"></option>
                                </select>
                            </div>
                        </div>     -->

                        <!-- estado:this.estado,                              
                mediop:this.descripcionMP,
                mydateInicio:this.mydateInicio,
                mydateFin:this.mydateFin -->


                        <div class="col-md-12">
                            <div class="form-group fill">
                                <label style="color: red;font-size: 0.75rem;top: -10px;" class="floating-label">Estado</label>
                                <select class="form-control"  v-on:change="onChangeEstado($event)" id="estados">                                    
                                    <option v-for="item in ListaEstado" :value="item.estado" v-text="item.descripcion"></option>                                    
                                </select>
                            </div>
                        </div>                    
                        <div class="col-sm-12">
                            <div class="form-group">
                            <label style="color: red;font-size: 0.75rem;top: -10px;" class="floating-label">Medio Pago</label>
                                <select class="form-control"  v-on:change="onChangeMedioPago($event)" id="mediopagos">                                                                        
                                    <option v-for="item in listamediopago" :value="item.mediopago_id" v-text="item.mediopago"></option>                                    
                                </select>                                
                            </div>
                        </div> 
                        <div class="col-md-12">
                            <div class="form-group">                            
                                <label style="color: red;font-size: 0.75rem;top: -10px;">Fecha Inicio:</label>
                                <!-- value="2020-12-01" min="2020-01-01" max="2020-12-31" -->
                                <input style="margin-left: 10px;margin-right: 30px;" type="date" v-model="mydateInicio" id="finicio" name="finicio" value="01-12-2020" >

                                <label style="color: red;font-size: 0.75rem;top: -10px;">Fecha Fin:</label>
                                <!-- value="2020-12-01" min="2020-01-01" max="2020-12-31" -->
                                <input style="margin-left: 10px;" type="date" v-model="mydateFin" id="ffin" name="ffin" value="2020-12-31">
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


<!-- <script src="< ?php echo URL_JS ?>pages/forms/admin/Filtro.js"></script> -->
