import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const getAllQuotes = async () => {
    const response = await axios.get(`${BASE_URL}/quotes`);
    return response;
};


export const getQuoteById = async (quoteId) => {
    const response = await axios.get(`${BASE_URL}/quotes/${quoteId}`);
    return response;

};

export const addNewQuote = async (payload) => {
    const response = await axios.post(`${BASE_URL}/quotes`, payload);
    return response;

};

export const updateQuote = async (quoteId, payload) => {
    const response = await axios.put(`${BASE_URL}/quotes/${quoteId}`, payload);
    return response;

};

export const deleteQuote = async (quoteId) => {
    const response = await axios.delete(`${BASE_URL}/quotes/${quoteId}`);
    return response;
};