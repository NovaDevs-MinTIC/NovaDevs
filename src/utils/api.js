import axios from 'axios';

export const obtenerVehiculos = async (setProducto, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'https://localhost:5000/productos' };
  await axios
    .request(options)
    .then(function (response) {
      setVehiculos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};