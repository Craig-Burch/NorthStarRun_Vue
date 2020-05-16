import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import FAQ from './pages/FAQ.vue';
import Gallery from './pages/Gallery.vue';
import Contact from './pages/Contact.vue';
import AboutUs from './pages/AboutUs.vue';
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
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/FAQ',
      name: 'faq',
      components: { default: FAQ, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/Gallery',
      name: 'gallery',
      components: { default: Gallery, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/Contact',
      name: 'Contact',
      components: { default: Contact, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 200 },
         footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/About-Us',
      name: 'aboutUs',
      components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
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
