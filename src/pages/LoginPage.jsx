import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
    const navigate = useNavigate();
    
    const handleLoginSuccess = () => {
        navigate("/", { replace: true });
    };

    return (
        <div className="page-container">
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
    );
}

export default LoginPage;