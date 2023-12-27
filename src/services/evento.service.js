
import { Try } from '@mui/icons-material';
import { authHeader, handleResponse } from '../helpers';
import Fetch from '../helpers/Fetch';

export const eventoService = {
  obtenerUsuario,
  obtenerFiles,
  
};


function obtenerUsuario(dataJson) {
  const options = { headers: authHeader(), body: JSON.stringify(dataJson) };
  const params = {};

  const url = `/api/evento/sgm_usuarios`;
  return Fetch.post(url, params, options).then((res) =>
    handleResponse(res, false)
  );
}

function obtenerFiles(dataJson, category) {
  const options = { headers: authHeader(), body: JSON.stringify(dataJson) };
  const params = {};

  
  //const url = `api/gescon/documents?category=${category}`;
  const url = `api/gescon/documents`;

  console.log(url);

  return Fetch.post(url, params, options).then((res) =>
    handleResponse(res, false)
  );
}
