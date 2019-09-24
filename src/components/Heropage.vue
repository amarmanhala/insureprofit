<template>
<div class="container-fluid masthead">
  <div class="row h-100">
    <div class="col-md-12 col-lg-6 py-5  col-sm-12 ci">
      <div class="cover-image h-100 animated fadeInLeft">
      </div>
    </div>
    <div class="col-md-12 col-lg-6 pb">
      <div class="d-flex h-100 justify-content-center">
    <div class="text-center align-self-center">
     <h1 class="hero-title text-center display-4"><i class="fas fa-umbrella"></i>We Protect You By Insurance.</h1>
  <h5 class="text-center sub-title" style="color: white">Insurance plans for everyone at reasonable prices.</h5>
   <div class="b-wrapper">
    <g-link to="/services">
    <b-button class="Button--button--3B9Ox">See Our Plans</b-button>
    </g-link>

  </div>
    </div>
</div>
  </div>
</div>
</div>
</template>

<script>
import Textra from 'vue-textra'
export default {
  name: 'Card',
  data () {
    return {
      words: ["My text to show","palnet","fail","sample text"]
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>
.flextst {

}
.hero__container {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
}
.hero__row {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: row;
    background-color: red;
}
.masthead {
  height: 80vh !important;
  min-height: 400px !important;
}
.ci {
  right: -5%;
  z-index: 2;
}
.cover-image {
  background-image: url(./images/hero.png) !important;
  background-size: cover !important;
  padding-top: 50px;
}
.card {
  padding: 20px;
  background: #FFF;
}
.hero-title {
  color: white;
  font-weight: 600;
}
.Button--button--3B9Ox {
    --btn-border-width: 1px;
    --btn-font-size: 18px;
    --btn-height: 40px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    color: #6515dd;
    border: 1px solid transparent;
    border-radius: 999px;
    background: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: inherit;
    font-size: var(--btn-font-size);
    font-style: inherit;
    font-weight: 600;
    height: var(--btn-height);
    line-height: inherit;
    line-height: 50px;
    line-height: calc(var(--btn-height) - var(--btn-border-width) * 2 + 1px);
    margin: 0;
    padding: 0 15px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: .18s;
    transition-property: background-color,color;
    vertical-align: baseline;
    vertical-align: middle;
}
.pb {
  background: #6515dd;
}
 .Button--button--3B9Ox:hover {
    background-color: #5011ae;
    outline: none;
}
@media (min-width: 360px)
{
.Button--button--3B9Ox {
    padding: 0 30px;
}
}
.b-wrapper {
  padding: 2rem 0px;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #5011ae;
    border-color: #5011ae;
}
.btn-secondary:focus, .btn-secondary.focus {
    box-shadow: none;
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none;
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
h1 {
  font-size: 2rem !important;
  font-weight: 600 !important;
}
}
@media (min-width: 320px) and (max-width: 480px) {
  
  .ci {
    right: 0%;
    height: 50%;
    padding-top: 0px !important;
    padding-right: 0px !important;
  }
  .pb {
    top: -18%;
    height: 50%;
  }
  .hero-title {
    font-size: 1.4rem !important;
  }
  .b-wrapper {
    padding: 5px 0px !important;
  }
  .sub-title {
    font-size: 0.9rem !important;
  }
  
}
@media (min-width: 768px) and (max-width: 1024px) {
  
  .ci {
    right: 0%;
    height: 50%;
    padding-top: 0px !important;
    padding-right: 0px !important;
  }
  .pb {
    top: -18%;
    height: 50%;
  }
  .hero-title {
    font-size: 2rem !important;
  }
  .b-wrapper {
    padding: 10px 0px !important;
  }
  .sub-title {
    font-size: 1.5rem !important;
  }
  
}
</style>