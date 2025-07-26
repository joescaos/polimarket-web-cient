import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ProductsTab from "../ProductsTab";
import ClientsTab from "../ClientsTab";
import "./styles.css";

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState("products");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      logout();
      navigate("/login");
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>POLIMARKET - Panel de Administración</h1>
        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      </header>

      <nav className="dashboard-tabs">
        <button
          className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Productos
        </button>
        <button
          className={`tab-button ${activeTab === 'clients' ? 'active' : ''}`}
          onClick={() => setActiveTab('clients')}
        >
          Clientes
        </button>
      </nav>

      <div className="tab-content">
        {activeTab === 'products' ? <ProductsTab /> : <ClientsTab />}
      </div>
    </div>
  );
};

export default Dashboard;

