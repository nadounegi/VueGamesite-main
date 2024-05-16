  import Vue from "vue";
  import VueRouter from "vue-router";
  // import Navigation from '@/views/Navigation.vue';
  import Mall from '@/components/Mall.vue';
  import Home from '@/views/Home.vue';

  // Vue Router 初期化
  Vue.use(VueRouter);
  // Vue Router インスタンス生成
  const router = new VueRouter({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes: [
      {
        path: '/Home',
        name: 'Home',
        component: Home,
      
      },
      {
        path: '/Mall',
        name: 'Mall',
        component: Mall,
      },
  
    ],
  });

  export default router;
