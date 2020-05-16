<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img
              v-lazy="'img/navBarLogoScaled.png'"
              alt="North Star Run"
              height="97px"
            />
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >

      </el-popover>
    </template>
    <template slot="navbar-menu">

      <!-- <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93"></i>
          <p>Download</p>
        </a>
      </li> -->

      <li class="nav-item">
        <a class="nav-link">
          <router-link to="/Gallery">
            <i style="font-size: 17px;" class="now-ui-icons media-1_album"></i>
            <p style="color: white;">gallery</p>
          </router-link>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link">
          <router-link to="/About-Us">
            <i style="font-size: 17px;" class="now-ui-icons emoticons_satisfied"></i> 
            <p style="color: white;">About Us</p>
          </router-link>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link">
          <router-link to="/FAQ">
            <i style="font-size: 17px;" class="now-ui-icons users_circle-08"></i> 
            <p style="color: white;">FAQ</p>
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn btn-neutral darkColor">
          <router-link to="/Contact">
            <i style="color: #2a425e; " class="now-ui-icons ui-2_chat-round mr-1"></i>
            <p><b>Request A Quote</b></p>
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href=""
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href=""
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template> 

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>

*:focus {
  outline:none !important
}

</style>
