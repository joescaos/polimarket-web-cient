import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:7140',
    timeout: 10000,
    Headers : {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});  

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - redirecting to login');
            window.location.href = '/login';
        }
        if (error.response && error.response.status === 403) {
            console.error('Forbidden access - you do not have permission to view this resource');
        }
        if (error.response && error.response.status >= 500) {
            console.error('Server error - please try again later');
        }
        return Promise.reject(error);
    }
);

export default apiClient;