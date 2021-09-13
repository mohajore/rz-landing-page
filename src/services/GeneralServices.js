import { apiService } from "./ApiService";
import { apiEndPoints } from "../api";
import { handleResponse } from "../utils/misc";
class GeneralServices {
    async getHomePageData() {
        try {
            const data = await apiService
                .unauthenticated()
                .get(apiEndPoints.getHomePageData)
                .then(({ data }) => data);

            return handleResponse({ success: true, data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getGallary(key) {
        try {
            const data = await apiService
                .unauthenticated()
                .get(`${apiEndPoints.getGallary}?key=${key}`)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async sendContactMessage(messageData) {
        try {
            const data = await apiService
                .unauthenticated()
                .post(apiEndPoints.sendMessage, messageData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const generalServices = new GeneralServices();
