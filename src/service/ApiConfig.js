import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGFjODFjMzk0ODNkOGVmMmY5N2ZkNTBjNjA4NmQ1NyIsInN1YiI6IjY0OGYzM2NiYzNjODkxMDBhZTUxODllMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sy6yeDv4hwTPYW8QyN_kvYlj0SfCrm-aR769hvjNTqI',
  },
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: options.headers,
});

export default axiosInstance;
