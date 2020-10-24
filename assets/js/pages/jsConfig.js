const _URL_DOMINIO_ = "http://localhost:8081/delywouempresa/";
const _URL_BASE_ = "http://localhost:8081/delywouapi/";
const _URL_BASE_API_ = "http://localhost:8081/delywouapi/api/empresa/";
const _TOKEN_MAP_ = "AIzaSyBvEVxjFxEV_4McL7oMBKa98PMEQhKcfyE";

const _TOKEN_ADM_VALOR_ = "emptt-token";

const v_headers = {
    'Content-Type': 'application/json',
    'emptt-token': localStorage.getItem(_TOKEN_ADM_VALOR_)
}

const v_headers_multipart = {
    'Content-Type': 'multipart/form-data',
    'emptt-token': localStorage.getItem(_TOKEN_ADM_VALOR_)
}

const v_sesion = {
    'usuario' : localStorage.getItem("usuario")
}