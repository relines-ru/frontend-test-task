import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const request = Axios.create({ baseURL });


