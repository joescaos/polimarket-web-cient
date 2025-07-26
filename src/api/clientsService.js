import apiClient from './apiClient';
import { Clients } from './endpoints';

export const fetchClients = async () => {
    try {
        const response = await apiClient.get(Clients.LIST);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}