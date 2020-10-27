

<!-- [ Main Content ] start -->
<div class="pcoded-main-container">
    <div class="pcoded-content">
        <!-- [ breadcrumb ] start -->
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10"><?php echo $titulo ?></h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!"><?php echo $titulo ?></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- [ breadcrumb ] end -->

        <!-- [ Main Content ] start -->
        <div class="row">
            <!-- subscribe start -->
            <div class="col-md-12">            
                <div class="card">                 
                    <div class="card-body">                                                               
                        <?php $this->load->view('admin/perfil/perfil_view'); ?>                        
                    </div>                                    
                </div>                
            </div>
            <!-- subscribe end -->
        </div>
        <!-- [ Main Content ] end -->        
    </div>
</div>


<?php $this->load->view('admin/perfil/ubicacion_view'); ?>

<!-- Button trigger modal -->

<script src="<?php echo URL_JS ?>pages/forms/admin/Perfil.js"></script>
<script src="<?php echo URL_JS ?>pages/forms/admin/Perfilportada.js"></script>
<!-- <script src="< ?php echo URL_JS ?>pages/forms/admin/PerfilCambiarcontrasenia.js"></script> -->






