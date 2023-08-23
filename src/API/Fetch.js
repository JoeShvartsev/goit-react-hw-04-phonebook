import { instance } from './Instance';

export const getContacts = async token => {
  try {
    const response = await instance.get('contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};