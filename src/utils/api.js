import axios from 'axios';

export const obtenerProductos = async (setProducto, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'https://localhost:5000/productos/' };
  await axios
    .request(options)
    .then(function (response) {
      setProducto(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    
  setEjecutarConsulta(false);
};