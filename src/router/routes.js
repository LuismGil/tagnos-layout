const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/matriculas',
    children: [
      {
        name: 'teste',
        path: '/teste',
        component: () => import('pages/IndexPage.vue')
      },
      {
        name: 'matriculas',
        path: '/matriculas',
        component: () => import('pages/Matriculas.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
