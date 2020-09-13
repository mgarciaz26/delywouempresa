<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Categoria extends CI_Controller {

    function __construct() {
        parent::__construct();        
    }

    function index() {
        
        $data['main_content'] = 'admin/categoria/panel_view';
        $data['titulo'] = 'Categorías';
        $data['titulo_nuevo'] = 'Nueva categoría';
        $data['titulo_lista'] = 'Lista de categorías';

        $this->load->view('master/plantilla_view', $data);
        
    }

    function randy($valor) {
        
        $this->load->view('master/plantilla_view', $data);
        
    }

}
