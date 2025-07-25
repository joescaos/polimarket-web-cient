import apiClient from './apiClient';
import { Products } from './endpoints';

export const fetchProducts = async () => {
    try {
        const response = await apiClient.get(Products.LIST);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}