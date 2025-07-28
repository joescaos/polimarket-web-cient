import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://41ae7143-16a0-47fb-bed1-2fa3b831af6e.mock.pstmn.io',
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
            // Handle unauthorized access, e.g., redirect to login
            console.error('Unauthorized access - redirecting to login');
            window.location.href = '/login';
        }
        // Handle expired token
        if (error.response && error.response.status === 403) {
            console.error('Forbidden access - you do not have permission to view this resource');
        }
        // Optionally, handle other error statuses
        if (error.response && error.response.status >= 500) {
            console.error('Server error - please try again later');
        }
        return Promise.reject(error);
    }
);

export default apiClient;