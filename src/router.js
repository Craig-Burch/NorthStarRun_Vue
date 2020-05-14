import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import OurFarm from './pages/OurFarm.vue';
import Gallery from './pages/Gallery.vue';
import Login from './pages/Login.vue';
import OurServices from './pages/OurServices.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

// Home y
// About Our Farm y
// About Us / About Our Team  (might be integerated with "Our Farm")
// Our Services y
// Gallery y
// QandA 
// Contact Us (maybe use login page)

Vue.use(Router);



export default new Router({
  mode:'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/Our-Farm',
      name: 'ourFarm',
      components: { default: OurFarm, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/Gallery',
      name: 'gallery',
      components: { default: Gallery, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/Our-Services',
      name: 'ourServices',
      components: { default: OurServices, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  
});
