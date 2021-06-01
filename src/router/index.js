import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Auth/Register.vue";
import Login from "../views/Auth/Login.vue";
import Songs from "../views/Songs/Songs.vue";
import AddSong from "../views/Songs/AddSong.vue";
import EditSong from "../views/Songs/EditSong.vue";
import SongDetails from "../views/Songs/SongDetails/Index.vue"; 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/songs",
    name: "Songs",
    component: Songs,
  },
  {
    path: "/songs/:songId",
    name: "Song",
    component: SongDetails,
  },
  {
    path: "/songs/create",
    name: "AddSong",
    component: AddSong,
  },
  {
    path: "/songs/:songId/edit",
    name: "EditSong",
    component: EditSong,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
