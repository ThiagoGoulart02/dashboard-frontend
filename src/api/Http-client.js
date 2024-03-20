import axios from 'axios'; // Alteração da importação para o formato ES6

const createHttpClient = (url, parent) => {
    const baseUrl = parent ? parent.url + url : url;
    console.log(" aaaaaaaaaa " + baseUrl);
    const httpClient = axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
        }
    });

    httpClient.url = baseUrl;
    return httpClient;
}

export default createHttpClient; // Exportando a função como padrão
