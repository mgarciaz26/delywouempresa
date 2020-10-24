<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Perfil extends CI_Controller {

    function __construct() {
        parent::__construct();        
    }

    function index() {
        
        $data['main_content'] = 'admin/perfil/panel_view';
        $data['titulo'] = 'Perfil'; 
        $data['titulo_nuevo'] = 'Imagen de Perfil';       

        $this->load->view('master/plantilla_view', $data);
        
    }

}
