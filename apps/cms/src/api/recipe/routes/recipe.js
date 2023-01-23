module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/recipes',
      handler: 'recipe.find',
      config: { policies: [] },
    },
    {
      method: 'GET',
      path: '/recipes/:id',
      handler: 'recipe.findOne',
      config: { policies: [] },
    },
    {
      method: 'POST',
      path: '/recipes',
      handler: 'recipe.create',
      config: { policies: [] },
    },
    {
      method: 'PUT',
      path: '/recipes/:id',
      handler: 'recipe.update',
      config: { policies: [] },
    },
    {
      method: 'DELETE',
      path: '/recipes/:id',
      handler: 'recipe.delete',
      config: { policies: [] },
    },
  ],
}
