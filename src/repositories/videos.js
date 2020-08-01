import { URL_BACKEND } from '../config';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embeded=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Dados não encontrados');
    });
}

export default {
  create,
};
