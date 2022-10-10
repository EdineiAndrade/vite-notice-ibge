
import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  //baseURL: "https://api.github.com",
    baseURL: "http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia",
    }
 // baseURL: "https://brasilnoticiasapi.xyz/api/noticias/google-news",

);

export default api;