import api from './api'; // Import the configured Axios instance from api.js

export const createProduct = async (userData) => {
  const response = await api.post('/product', userData); // Use /product, not the full URL
  return response.data;
};

export const getAllProducts = async (page = 1, limit = 10) => {
  const response = await api.get(`/product?page=${page}&limit=${limit}`);
  return response.data;
};

export const bulkCreateProducts = async (productData) => {
  const response = await api.post('/product/bulkCreate', productData);
  return response.data;
};

export const updateProductById = async (productData) => {
  const response = await api.put(`/product/${productData.productId}`, productData);
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await api.get(`/product/${productId}`);
  return response.data;
};

export const deleteProductById = async (productData) => {
  const response = await api.delete(`/product/delete/${productData.productId}`);
  return response.data;
};
