import { useEffect, useState } from "react";
import { fetchClients } from "../api/clientsService";
import LoadingSpinner from "../components/common/LoadingSpinner";

const ClientsTab = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);                 
    const [error, setError] = useState(null);


    useEffect(() => {   
        const getClients = async () => {
            try {
                const response = await fetchClients();
                setClients(response);
            } catch (err) {
                setError("Error al cargar los clientes");
            } finally {
                setLoading(false);
            }
        };

        getClients();
    }, []); 
    
    return (
        <div className="table-container">
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : (
                <>
                    <h2>Listado de Clientes</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DNI</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.dni}</td>
                                    <td>{client.first_name} {client.last_name}</td>
                                    <td>{client.email}</td>
                                    <td>{client.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );


};
export default ClientsTab;