import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response;
};


export const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response;

};

export const addNewUser = async (payload) => {
    const response = await axios.post(`${BASE_URL}/users`, payload);
    return response;

};

export const updateUser = async (userId, payload) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, payload);
    return response;

};

export const deleteUser = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    return response;
};