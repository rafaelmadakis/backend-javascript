const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET:  buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no banck-end
 */

 /**
  * Exemplo método GET
  */
app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

/**
 * Exemplo Método POST
 */
app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

/**
 * Exemplo método PUT
 */
app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

/**
 * Exemplo Método Detele
 */
app.delete('/projects/:id', (request, response) => {
  return response.json([   
    'Projeto 2',
    'Projeto 3',
  ]);
});



app.listen(3333, () => {
  console.log('✔ Back-end started');
});