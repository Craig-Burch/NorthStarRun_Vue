<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
    class="navBG"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img
              v-lazy="'img/navBarLogoScaled.png'"
              alt="North Star Run"
              class="navbar-logo-resposive"
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
    <template slot="navbar-menu" id="navbarWrapper">
      <li class="nav-item">
        <a class="nav-link">
          <nav-link to="/">
             <i style="font-size: 17px;" class="now-ui-icons shopping_shop desktopDisplayNoIcons"></i>  
           <!--  <br class="md-screens-br"> -->
            <p class="navbarText">Home</p>
          </nav-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <nav-link to="/About-Us">
            <i style="font-size: 17px;" class="now-ui-icons emoticons_satisfied desktopDisplayNoIcons"></i>  
            <!-- <br class="md-screens-br"> -->
            <p class="navbarText">About Us</p>
          </nav-link>
        </a>
      </li>
       <li class="nav-item">
        <a class="nav-link">
          <nav-link to="/FAQ">
           <i style="font-size: 17px;" class="now-ui-icons users_circle-08 desktopDisplayNoIcons"></i> 
            <!-- <br class="md-screens-br"> -->
            <p class="navbarText">FAQ</p>
          </nav-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <nav-link to="/Pricing">
            <i style="font-size: 17px;" class="now-ui-icons business_money-coins desktopDisplayNoIcons"></i> 
            <!-- <br class="md-screens-br"> -->
            <p class="navbarText">Pricing</p>
          </nav-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <nav-link to="/Contact">
            <i style="font-size: 17px;" class="now-ui-icons ui-2_chat-round desktopDisplayNoIcons"></i> 
            <!-- <br class="md-screens-br"> -->
            <p class="navbarText">Contact Us</p>
          </nav-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <nav-link to="/Gallery">
             <i style="font-size: 17px;" class="now-ui-icons media-1_album desktopDisplayNoIcons"></i> 
            <!-- <br class="md-screens-br"> -->
            <p class="navbarText">Gallery</p>
          </nav-link>
        </a>
      </li>  
      <li class="nav-item socialIcons">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href=""
          target="_blank"
        >
        <nav-link>
          <i class="fab fa-facebook-square social-icons-size" ></i>
          <p class="d-lg-none d-xl-none" style="color: white;">Facebook</p>
        </nav-link>
        </a>
      </li>
      <li class="nav-item socialIcons">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href=""
          target="_blank"
        >
        <nav-link>
          <i class="fab fa-instagram social-icons-size" ></i>
          <p class="d-lg-none d-xl-none" style="color: white;">Instagram</p>
        </nav-link>
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
  },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style scoped>
/*remove link style around logo on click*/
*:focus {
  outline:none !important
}
@media only screen and (min-width: 1200px) {
  li.nav-item.socialIcons {
    margin-top: -5px !important;
  }
}
a.nav-link {
  float: left;
  padding: 0px 0px !important;
  margin-top: 10px;
}


.navbarText {
  color: white;
  padding-top: 5px;
  font-size: 16px;
}

.desktopDisplayNoIcons {
  display: none;
}

.dropdown-item:hover {
  background-color: transparent !important; 

}
  
.navbar-logo-resposive {
  height:80px !important;
}

.dropdown-item {
    background-color: transparent !important;
}

.dropdown-item.active, .dropdown-item:active {
    background-color: transparent !important;
}

.navbar .navbar-nav .nav-link:not(.btn) i.now-ui-icons {
    top: 4px;
    /*font-size: 1.5em !important;*/
    color: white !important;
}

li.nav-item.socialIcons {
  padding: 3px !important;
}

i.social-icons-size {
  font-size: 25px !important;
}
.md-screens-br {
  display:none;
}
@media only screen and (max-width: 1200px) {
  .navbar-logo-resposive {
  height:45px !important;

  }
  .md-screens-br {
    display: block
  }
  .navbarText {
    color: white;
    padding-top: 10px;
    font-size: 13px;
  }
}
/*@media only screen and (max-width: 1010px) {
  .navbar-logo-resposive {
  height:60px !important;
  }

}*/
@media only screen and (max-width: 989px) {
  .navbar-logo-resposive {
    height:85px !important;

  }
  a.nav-link {
    width: 140px;
    padding-left: -5px !important;
  }
  .md-screens-br {
    display: none
  }
  .navbarText {
    margin-left:5px; 
 }
 .desktopDisplayNoIcons {
  display: inline-block;
 }
 i.social-icons-size {
  font-size: 20px !important;
  margin-left: -4px;
}
}

@media only screen and (max-width: 600px) {
  .navbar-logo-resposive {
  height:55px !important;

  }
}



</style>
