import createHttpClient from "./Http-client";

const ROUTE_API_LOCAL = "http://localhost:8080";

function getEnviromentRoute() {
    return ROUTE_API_LOCAL;
}

const REACT_API_BASE_URL = getEnviromentRoute();

export const baseApi = createHttpClient(REACT_API_BASE_URL || "");
