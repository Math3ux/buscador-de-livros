import axios from 'axios';

const api = axios.create({
    baseURL: 'https://openlibrary.org/search.json?q=',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchBooks = async (query: string) => {
    try {
        const response = await api.get(query);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};
