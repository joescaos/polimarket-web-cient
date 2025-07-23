import { createContext, useContext, useState } from 'react';
import {login as authLogin } from '../api/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = async (credentials) => {
        const response = await authLogin(credentials);
        if (response.success) {
            setUser(response.data.user);
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
            setError(null);
        } else {
            setError(response.error);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        setUser(null);
    };
    const isAuthenticated = () => {
        return !!localStorage.getItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export{ AuthContext}
export const useAuth = () => useContext(AuthContext);
