import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error=> error)
}

const routes = [
	{
		path: "*",
		redirect: '/'
	},
	{
		path: "/", // 首页
		name: "home",
		component: require('../views/home.vue').default
	},
	{
		path: "/about", // 关于我们
		name: "about",
		component: require('../views/about.vue').default
	},
	{
		path: "/download", // 下载中心
		name: "download",
		component: require('../views/download.vue').default
	},
	{
		path: "/ecc", // 加密技術
		name: "ecc",
		component: require('../views/ecc.vue').default
	},
	{
		path: "/mEcc", // 主流加密技術
		name: "mEcc",
		component: require('../views/mEcc.vue').default
	},
	{
		path: "/function",
		name: "function",
		component: require('../views/function.vue').default
	},
	{
		path: "/solution",
		name: "solution",
		component: require('../views/solution.vue').default
	},
];

const router = new VueRouter({
  routes
});

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0)
})

export default router;
