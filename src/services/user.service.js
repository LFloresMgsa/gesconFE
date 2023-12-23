import { Try } from '@mui/icons-material';
import { authHeader, handleResponse } from '../helpers';
import Fetch from '../helpers/Fetch';

export const eventoService = {
  obtenerUsuario,
};

// SERVICIOS SIN AUTORIZACION


function obtenerUsuario(dataJson) {
  const options = { headers: authHeader(), body: JSON.stringify(dataJson) };
  const params = {};

  const url = `/api/evento/sgm_usuarios`;
  return Fetch.post(url, params, options).then((res) =>
    handleResponse(res, false)
  );
}

function obtenerToken(dataJson) {
  const options = { headers: authHeader(), body: JSON.stringify(dataJson) };
  const params = {};

  const url = `/api/evento/auth`;
  return Fetch.post(url, params, options).then((res) =>
    handleResponse(res, false)
  );
}



