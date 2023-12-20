const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLogin.vue'),
    redirect: '/login',
    children: [
      {
        name: 'login',
        path: '/login',
        component: () => import('pages/Login.vue')
      }
    ]
  },
  {
    path: '/matriculas',
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
  {
    path: '/modulos',
    component: () => import('layouts/MainModulos.vue'),
    redirect: '/modulos',
    children: [
      {
        name: 'modulos',
        path: '/modulos',
        component: () => import('pages/Modulos.vue')
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
