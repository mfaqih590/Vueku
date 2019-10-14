
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'get', component: () => import('pages/get.vue') },
      { path: 'spinner', component: () => import('pages/spinner.vue') },
      { path: 'post', component: () => import('pages/post.vue')},
      { path: 'admin', component: () => import('pages/admin.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
