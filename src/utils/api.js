import axios from 'axios';

const baseURL = 'https://salty-plateau-22180.herokuapp.com/'

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { 
    method : 'GET', 
    url:`${baseURL}/productos/`,
    headers: {
      Authorization: getToken(),
    }, 
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProductos = async (data, successCallback, errorCallback) => {
  const options = {
    method : 'POST',
    url : `${baseURL}/productos/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken()},
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProductos = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/productos/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const quitarProductos = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/productos/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Crud de usuarios: 

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/usuarios/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/usuarios/self/`,
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const quitarUsuario = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD DE VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/ventas/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { 
    method : 'GET', 
    url:`${baseURL}/ventas/`, 
    headers: {
      Authorization: getToken(),
    }, 
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/ventas/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const quitarVenta = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/ventas/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};