import axios from "axios";

class ApiService {
    baseURL = "http://192.168.1.88:8003/api";
    token = "$2y$10$rUdgR1EyIkRagrByC/0RheoyZE83tWsPG52rLj3gpFnx3JpRLBz3C";

    unauthenticated() {
        return axios.create({ baseURL: this.baseURL, headers: { Token: this.token, Language: "2" } });
    }

    imageLink = "http://192.168.1.88:8003/storage/";
}

export const apiService = new ApiService();
