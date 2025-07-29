export const Auth = {
    LOGIN: '/Api/Auth/login',
    LOGOUT: '/auth/logout'
  };

  export const Products = {
    LIST: '/Api/PoliMarket/products',
    DETAILS: (id) => `/products/${id}`,
    CREATE: '/products',
  };

  export const Clients = {
    LIST: 'Api/PoliMarket/customers',
    DETAILS: (id) => `/clients/${id}`,
    CREATE: '/clients',
  };