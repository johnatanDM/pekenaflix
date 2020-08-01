import { URL_BACKEND } from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

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

export default {
  getAllWithVideos,
};
