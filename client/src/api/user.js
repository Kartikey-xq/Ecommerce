import axios from 'axios';
const baseUrl = 'https://ecommerce-production-cb26.up.railway.app/api/v1/user';

export const getUserProfile = async () => {
  const response = await axios.get(`${baseUrl}/`, {
    withCredentials: true, // ✅ so cookie (token) is sent
  });
  console.log(`response :- ${response.data}`);
  return response.data;
};
