import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

export default createStore(reducer, applyMiddleware(axiosMiddleware(client)));
