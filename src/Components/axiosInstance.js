import axiosInstance from 'axiosInstance';

const axiosInstance = axiosInstance.create({
  baseURL: 'https://hrms-application-2dkk.onrender.com/hrmsapplication/',
  // baseURL: 'https://hrms-application-smile-prod.onrender.com/hrmsapplication/',
  // baseURL: 'https://hrms-application-campustest.onrender.com/hrmsapplication/',


});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token');
    const institutionId = localStorage.getItem('institutionId');
    if (token && institutionId) {
      // Set Authorization token and institutionId in headers
      config.headers['Authorization'] = `Bearer ${token}`;
      config.headers['institutionId'] = institutionId;  // Ensure institutionId is passed in headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;