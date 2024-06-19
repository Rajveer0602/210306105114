import axios from 'axios';

const API_BASE_URL = 'https://third-party-server.com/api'; 

const fetchNumber = async (type) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/primes/${type}`, { timeout: 500 });
    return response.data.number;
  } catch (error) {
    console.error('API call failed or took too long:', error);
    return null;
  }
};

export { fetchNumber };
