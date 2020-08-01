import { URL_BACKEND } from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Dados não encontrados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Dados não encontrados');
    });
}

function create(categoria) {
  return fetch(`${URL_BACKEND}/categorias`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoria),
  }).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error('não deu');
  });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
