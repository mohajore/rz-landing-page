import axios from "axios";

class ApiService {
    baseURL = "https://cp.rz.jo/api";
    // baseURL = "http://192.168.1.88:8003/api";
    token = "$2y$10$rUdgR1EyIkRagrByC/0RheoyZE83tWsPG52rLj3gpFnx3JpRLBz3C";

    unauthenticated() {
        return axios.create({ baseURL: this.baseURL, headers: { Token: this.token, Language: "2" } });
    }

    imageLink = "https://cp.rz.jo/storage/";
}

export const apiService = new ApiService();
