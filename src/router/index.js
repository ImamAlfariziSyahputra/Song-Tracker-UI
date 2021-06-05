import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Auth/Register.vue";
import Login from "../views/Auth/Login.vue";
import Songs from "../views/Songs/Songs.vue";
import AddSong from "../views/Songs/AddSong.vue";
import EditSong from "../views/Songs/EditSong.vue";
import SongDetails from "../views/Songs/SongDetails/Index.vue"; 

Vue.use(VueRouter);

const routes = [
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
    path: "/songs/create",
    name: "AddSong",
    component: AddSong,
  },
  {
    path: "/songs/:songId",
    name: "Song",
    component: SongDetails,
  },
  {
    path: "/songs/:songId/edit",
    name: "EditSong",
    component: EditSong,
  },
  {
    path: '*',
    redirect: 'songs',
  }
];

// Handle Error NavigationDuplicated: Avoided redundant navigation to current location
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(() => {
  });
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
