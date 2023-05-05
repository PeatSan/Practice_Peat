import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/HelloWorld",
      component: () => import("../components/HelloWorld.vue"),
      props: (route) => {
        {
          msg: route.query.msg;
        }
      }
    },
    {
      path: "/vmodel",
      component: () => import("../components/Vmodel.vue")
    },
    {
      path: "/von",
      component: () => import("../components/von.vue")
    },
    {
      path: "/vbind",
      component: () => import("../components/vbind.vue")
    },
    {
      path: "/prop",
      component: () => import("../components/prop.vue")
    }
  ]
});
