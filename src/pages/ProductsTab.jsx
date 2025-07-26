import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsService";
import LoadingSpinner from "../components/common/LoadingSpinner";


const ProductsTab = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log("Productos obtenidos:", response.data);
        setProducts(response);
      } catch (err) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="table-container">
      <h2>Listado de Productos</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.cantidad}</td>
              <td>${product.precio.toFixed(2)}</td>
              <td>{product.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ProductsTab;