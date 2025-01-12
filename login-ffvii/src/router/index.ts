import { createRouter, createWebHistory } from 'vue-router';

// Importa las vistas
import Login from '@/views/UserLogin.vue';
import Signup from '@/views/UserSignup.vue';

// Configura las rutas
const routes = [
  {
    path: '/',
    redirect: '/login', // Redirigir a Login por defecto
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, // Componente de Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup, // Componente de Registro
  },
];

// Crea el router
const router = createRouter({
  history: createWebHistory(), // Usa el modo de historial HTML5
  routes,
});

export default router;
