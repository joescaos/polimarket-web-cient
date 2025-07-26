import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import './styles.css';

const LoginForm = ({ onLoginSuccess }) => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 
        
        try {
            const result = await login(credentials);
            if (result.success) {
                setCredentials({ username: '', password: '' });
                onLoginSuccess();
            } else {
                setError(result.error || 'Credenciales incorrectas');
                setCredentials({ username: '', password: '' }); 
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
            //setCredentials({ username: '', password: '' }); // Limpia los campos
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <h1>POLIMARKET</h1>
            </div>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                        autoComplete="username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" className="login-button">
                    INGRESAR
                </button>
            </form>
        </div>
    );
}

export default LoginForm;