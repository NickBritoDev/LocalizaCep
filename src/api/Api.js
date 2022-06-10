import axios from "axios";
//api para fazer a consulta do endereço relacionado ao cep 
//https://viacep.com.br/ws/01310930/json/
const Api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default Api;