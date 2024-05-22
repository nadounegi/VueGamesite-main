import Vue from "vue";
import VueRouter from "vue-router";
import Mall from '@/views/Mall.vue';
import MallTop from '@/views/MallTop.vue';
import GameDetail from '@/views/GameDetail.vue';
import Home from '@/views/Home.vue';
import PS4PS5 from '@/views/PS4PS5.vue';
import NintendoSwitch from '@/views/NintendoSwitch.vue'; // 修正拼写
import Xbox from '@/views/Xbox.vue';
import PCGame from '@/views/PCGame.vue';
import VideoGame from '@/views/VideoGame.vue';

// Vue Router 初期化
Vue.use(VueRouter);

// Vue Router インスタンス生成
const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/VideoGame',
      component: VideoGame,
    },
    {
      path: '/Mall',
      component: Mall,
      redirect: '/MallTop',
      children: [
        {
          path: '/MallTop',
          component: MallTop,
        },
        {
          path: '/Mall/PS4PS5',
          component: PS4PS5,
        },
        {
          path: '/Mall/NintendoSwitch', // 修正拼写
          component: NintendoSwitch,
        },
        {
          path: '/Mall/Xbox',
          component: Xbox,
        },
        {
          path: '/Mall/PCGame',
          component: PCGame,
        },
      ]
    },
    {
      path: '/GameDetail/:id',
      name: 'GameDetail',
      component: GameDetail,
    }
  ],
});

export default router;
