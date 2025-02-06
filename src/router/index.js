import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "../pages/UserLogin.vue";
import UserDashboard from "../pages/Dashboard.vue";
import Usuario from "../pages/Usuario.vue";
import Reportes from "../pages/Reportes.vue";
import EditarUsuario from "../pages/EditarUsuario.vue";
import CrearUsuario from "../pages/CrearUsuario.vue";
import PerfilUsuario from "../pages/PerfilUsuario.vue";
import NavBarComponent  from "../pages/NavBar.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: UserLogin,
  },
  {
    path: "/",
    name: "Navbar",
    component: NavBarComponent ,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: UserDashboard,
      },
      {
        path: "/usuario",
        name: "Usuario",
        component: Usuario,
      },
      {
        path: "/reportes",
        name: "Reportes",
        component: Reportes,
      },
      {
        path: '/editar-usuario',
        name: 'EditarUsuario',
        component: EditarUsuario,
      },
      {
        path: '/crear-usuario',
        name: 'CrearUsuario',
        component: CrearUsuario,
      },
      {
        path: '/perfil-usuario',
        name: 'PerfilUsuario',
        component: PerfilUsuario,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
