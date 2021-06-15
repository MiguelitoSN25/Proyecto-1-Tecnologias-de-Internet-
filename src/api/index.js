import axios from 'axios';

const api = 'fb2c0af2563a47f2a54a0fb0939a8d0e'
const url = 'https://newsapi.org/v2';

export const fetchSources = async () => {
    const requestSource = `sources?apiKey=`;
    try {
        const { data: { sources } } = await axios.get(`${url}/${requestSource}${api}`);

        return sources.map((source) => source);
    } catch (error) {
        return error;
    }
};

export const fetchNews = async (request) => {
    try {
        const { data: { articles } } = await axios.get(`${url}/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${api}`);

        return articles.map((article) => (article));
    } catch (error) {
        return error;
    }
};