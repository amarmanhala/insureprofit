<template>
<footer class="bd-footer text-muted">
  <div class="container-fluid p-3 p-md-5">

    <div class="row">
      <div class="col-md-4">
       
          <ul class="bd-footer-links text-muted">
            <h4 class="">Links</h4>
              <li><g-link to="/">Home</g-link></li>
              <li><g-link to="/about">About us</g-link></li>
              <li><g-link to="/services">Services</g-link></li>
              <li><g-link to="/contact">Contact us</g-link></li>
            </ul>
   
    
      </div>

      
  <div class="col-md-4 text-center">
  
    <h4 class="">Office</h4>
    <p><b>83 Longevity Road, Brampton, ON L6X 0B4</b></p>
    <a href="https://goo.gl/maps/uhg8CKbKVQ7jyuPk6" target="_blank"><b-button class="Button--button--3B9Ox btn-outline-primary btn-sm">Get Directions</b-button></a>
      </div>

       <div class="col-md-4 text-center">
 <h4 class="text-muted">Call us</h4>
     <a href="tel: 1-416-817-3730" class="nav-item nav-link callus">
          <i class="fas fa-phone"></i>
1-416-817-3730
        </a>
         <a href="tel: 1-365-788-5001" class="nav-item nav-link callus">
          <i class="fas fa-phone"></i>
1-365-788-5001
        </a>
      </div>

    </div>

   <p> &#xA9; 2019 Insure Profit.</p>
   <p>Website Designed and Developed by <a href="http://momcoded.com" target="_blank">Amarpreet Singh</a></p>
  </div>
</footer>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "~/assets/css/style.scss";
.bd-footer {
    font-size: .875rem;
    background-color: #201c32;
}
li {
  list-style-type: none;
  
}
a {
  color: #6c757d !important;
}
.router-link-exact-active {
  color: $primary-color !important;
}
.Button--button--3B9Ox {
    --btn-border-width: 1px;
    --btn-font-size: 18px;
    --btn-height: 30px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    border: 1px solid transparent;
    border-color: $primary-color;
    border-radius: 999px;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: inherit;
    font-size: var(--btn-font-size);
    font-style: inherit;
    font-weight: 600;
    height: var(--btn-height);
    line-height: inherit;
    line-height: 30px;
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
.social-wrapper{
padding-top: 25px;
padding-bottom: 25px;
}
</style>
