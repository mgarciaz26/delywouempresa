<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Inicio extends CI_Controller {

    function __construct() {
        parent::__construct();
        //$this->load->model('adminsorteo/inicio_model'); 
    }

    function index() {
        
        $data['main_content'] = 'admin/inicio/panel_view';
        $data['titulo'] = 'Inicio';
        $data['titulo_nuevo'] = 'Nueva categoría';
        $data['titulo_lista'] = 'Lista de categorías';
        $this->load->view('master/plantilla_view', $data);
        
    }

}
