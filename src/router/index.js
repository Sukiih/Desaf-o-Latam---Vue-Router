import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "productos" */
    '../views/ProductosView.vue'),
    props: () => {
      return {
        producto1: "Desayunos",
        descripcion1: "Contamos con desayunos nutritivos y deliciosos",
        precio1: "Precio: $2000",
        cantidad1: "Cantidad: Para dos personas",
        producto2: "Almuerzos",
        descripcion2: "Ofrecemos almuerzos muy completos y variados",
        precio2: "Precio: $5000",
        cantidad2: "Cantidad: Individual",
        producto3: "Onces",
        descripcion3: "Disfruta de onces sabrosas y económicas",
        precio3: "Precio: $4000",
        cantidad3: "Cantidad: Para dos personas"
        }
      }
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import(/* webpackChunkName: "contacto" */
    '../views/ContactoView.vue'),
    props: () => {
      return {
        email: "📧 Escribemos a nuestro mail: comida@food.com",
        telefono: "📱LLamanos: 58932155"
        }
      }
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
