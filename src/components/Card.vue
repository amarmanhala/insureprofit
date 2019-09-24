<template>
<b-container>
  <div class="card mb-3 text-center">
  <g-image src="./images/insure-profit-life-insurance.svg" class="mx-auto d-block" width="300" height="300" />
  <div class="card-body">
    <h5 class="card-title card-title-h5">Life Insurance</h5>
    <p class="card-text">Protect What Matters Most.</p>
    
  </div>
    </div>

    <div class="card mb-3 text-center">
  <g-image src="./images/insure-profit-home-insurance.svg" class="mx-auto d-block" width="300" height="300" />
  <div class="card-body">
    <h5 class="card-title card-title-h5">Mortgage Insurance</h5>
    <p class="card-text">Mortgage Insurance is mandatory in Canada. So we provide best options for mortgage Insurance.</p>
    
  </div>
    </div>

     <div class="card mb-3 text-center">
  <g-image src="./images/insure-profit-travel-insurance.svg" class="mx-auto d-block" width="300" height="300" />
  <div class="card-body">
    <h5 class="card-title card-title-h5">Travel Insurance</h5>
    <p class="card-text">Get out there and enjoy yourself knowing you have the right Insurance.</p>
    
  </div>
    </div>

    <div class="card mb-3 text-center">
  <g-image src="./images/insure-profit-health-insurance.svg" class="mx-auto d-block" width="300" height="300" />
  <div class="card-body">
    <h5 class="card-title card-title-h5">Health Insurance</h5>
    <p class="card-text">Focus on Getting Better.</p>
    
  </div>
    </div>
</b-container>
  
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
export default {
  
};
</script>


<style lang="scss">
.img-add {
    vertical-align: middle;
    border-style: none;
}
.card {
  border: none;
}
.card-title-h5 {
  font-size: 2.50rem;
  font-weight: 600;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.card-title-h5 {
  font-size: 1.8rem !important;

}
}

</style>
