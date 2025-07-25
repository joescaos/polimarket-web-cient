export const Auth = {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout'
  };

  export const Products = {
    LIST: '/products',
    DETAILS: (id) => `/products/${id}`,
    CREATE: '/products',
  };

  export const Clients = {
    LIST: '/clients',
    DETAILS: (id) => `/clients/${id}`,
    CREATE: '/clients',
  };