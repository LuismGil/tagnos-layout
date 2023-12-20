const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        name: 'matriculas',
        path: '/matriculas',
        component: () => import('pages/Matriculas.vue')
      },
      {
        name: 'matricula',
        path: '/matricula/:id',
        component: () => import('pages/Matricula.vue')
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
