import axios from 'axios';

axios.defaults.baseURL = 'https://6444e238914c816083c15cad.mockapi.io/';

export async function fetchUsers(page, controller) {
  try {
    const response = await axios.get('/users', {
      params: {
        completed: false,
        page: `${page}`,
        limit: 3,
      },
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
}
