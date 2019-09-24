<template>

  <b-navbar toggleable="lg" class="momnav" sticky>
    <!-- <VueScrollProgress></VueScrollProgress> -->
    <g-link class="navbar-brand" to="/" >
      <Brand></Brand>
    </g-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-link class="nav-item nav-link" to="/">Home</b-link>
        <b-link class="nav-item nav-link" to="/services">Services</b-link>
        <b-link class="nav-item nav-link" to="/about">About us</b-link>
        <b-link class="nav-item nav-link" to="/contact">Contact</b-link>

        <a href="tel: 1-416-817-3730" class="nav-item nav-link callus">
          Call Us
         <i class="fas fa-phone"></i>
🇨🇦 +1-416-817-3730
        </a>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> 

        <b-nav-item-dropdown right>-->
        <!-- Using 'button-content' slot -->
        <!--<template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
import Brand from "~/assets/svg/Frame.svg";
export default {
  components: {
    Brand
  }
};
</script>


<style lang="scss">
@import "~/assets/css/style.scss";
.fade-enter-active {
  transition: opacity 0.5s;
}
.navbar {
  background-color: #fff;
  padding: 0rem 6rem !important;
}

.fade-enter {
  opacity: 0;
}
.router-link-exact-active {
  color: $primary-color !important;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.momnav {
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.1) !important;
}
@media (min-width: 992px) {
  .callus {
    padding-left: 2rem !important;
  }
}

/* play with some lines below */
#progress-container-el {
  /* background */
  background-color: transparent !important;
  //top: calc(100% - 4px) !important;
}
#progress-el {
  /* progress bar */
  background-color: $primary-color !important;
}
@media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
.navbar {
  padding: 0rem 1rem !important;
}

}

</style>
