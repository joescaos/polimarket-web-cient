import React from "react";
import { AuthProvider } from "../context/AuthContext";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
    return (
        <AuthProvider>
            <div className="page-container">
                <LoginForm />
            </div>
        </AuthProvider>
    );
}

export default LoginPage;