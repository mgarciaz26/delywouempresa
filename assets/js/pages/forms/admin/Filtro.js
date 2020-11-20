
var frmDataFiltros = new Vue({
    el:'#modal-report-filtro',
    data:{
        // id:0,        
        listaClientes:[],
        listaDireccion:[],
        listamediopago:[],
        descripcionD:'',
        descripcionC:'',
        descripcionMP:'',
        // Table: CrearTable()
    },   
    methods:{           
        ComboCliente :function(){
            axios.get(_URL_BASE_API_ + `pedido/listarclientes`, {
                headers: v_headers
            }).then(respuesta => {
                if (respuesta.data.estado) {                    
                    this.listaClientes = respuesta.data.clientes;                     
                }else{                         
                }
            });
        } ,                
        ComboDireccion :function(){
            axios.get(_URL_BASE_API_ + `pedido/listardireccion`, {
                headers: v_headers
            }).then(respuesta => {
                if (respuesta.data.estado) {
                    this.listaDireccion = respuesta.data.direccion;                                        
                }else{                    
                }
            });            
        },        
        ComboMedioPago :function(){
            axios.get(_URL_BASE_API_ + `pedido/listarmediopago`, {
                headers: v_headers
            }).then(respuesta => {
                if (respuesta.data.estado) {
                    this.listamediopago = respuesta.data.mediopago;                                        
                }else{            
                }
            });
        },
        onChangeDireccion :function(e){
            this.descripcionD = e.target.options[e.target.options.selectedIndex].text;        
        },
        onChangeCliente :function(e){
            this.descripcionC = e.target.options[e.target.options.selectedIndex].text;        
        },
        onChangeMedioPago :function(e){
            this.descripcionMP = e.target.options[e.target.options.selectedIndex].text;        
        },
        ObtenerDatosCombos:function(){
            return {
                direction:this.descripcionD,
                client:this.descripcionC,
                mediop:this.descripcionMP
            }
        }
        // Recepcionar:function(){

        //     let combos = this.ObtenerDatosCombos();
        //     axios.post(_URL_BASE_API_ + `pedido/listarporcampo`,combos,{
        //         headers: v_headers
        //     }).then(respuesta => {

        //         if (respuesta.data.estado) {

        //             // this.Table.clear();
        //             $('#report-table').DataTable().clear();
        //             let lstData = respuesta.data.pedido;
        //             lstData.forEach(pedido => {
        //                 console.log(pedido);
        //                 this.AgregarTabla(pedido);
        //             });

        //             $('#report-table').DataTable().draw();

        //         }else{

        //             // this.Table.clear();
                    
        //             // this.Table.draw();

        //         }
        //         $('#modal-report-filtro').modal('hide');
        //     });

            
        // },
        // AgregarTabla: function (data) {
        //     // this.Table.
        //     $('#report-table').DataTable().
        //     row.add(
        //         [data.cliente,                    
        //         data.direccion,
        //         data.mediopago,
        //         data.estado == 1 ? '<span class="badge badge-success">Activo</span>' : '<span class="badge badge-danger">Inactivo</span>',
        //         '<a href="#!" id="editar" onClick="Editar(' + data.id + ')" ><i class="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"></i></a>' +
        //         '<a href="#!" onClick="Eliminar(' + data.id + ')" ><i class="feather icon-trash-2 f-w-600 f-16 text-c-red"></i></a>'
        //     ]);
        // }      
        
    }  
});

frmDataFiltros.ComboMedioPago();
frmDataFiltros.ComboCliente();
frmDataFiltros.ComboDireccion();
// frmDataFiltros.Recepcionar();


// function CrearTable() {
//     // var table = $('#report-table').DataTable(
//     //     {
//     //         //dom: 'Bfrtip',
//     //         buttons: [
//     //             'copy', 'csv', 'excel', 'pdf', 'print'
//     //         ]
//     //     });

//     var table = $('#report-table').DataTable();
//     return table;

// }
// frmDataFiltros.Recepcionar();
// frmPanel.Recepcionar();
