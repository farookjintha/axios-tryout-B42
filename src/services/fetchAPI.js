const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data;
};


export const getUserById = async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    const data = await response.json();
    return data;
};

export const addNewUser = async (payload) => {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const updateUser = async (userId, payload) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};