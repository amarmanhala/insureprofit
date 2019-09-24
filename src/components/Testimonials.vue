<template>
<div class="main-wrapper">
    <h2 class="py-4">What our customer says</h2>

<div class="container color-light text-center">

<agile :arrows="false" :speed="750"
    :timing="'linear'" :fade="true"
    :autoplay="true" :pauseOnHover="false">
    <div class="slide slide--1">
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h3 class="display-4"><i>Karamjeet Singh</i></h3>
    <p class="lead"><i>"They provide very good Insurance options at reasonable price."</i></p>
  </div>
</div>
    </div>
    <div class="slide slide--2">
           <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h3 class="display-4"><i>Karamjeet Singh</i></h3>
    <p class="lead"><i>"They provide very good Insurance options at reasonable price."</i></p>
  </div>
</div>
    </div>
    <div class="slide slide--3">
           <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h3 class="display-4"><i>Karamjeet Singh</i></h3>
    <p class="lead"><i>"They provide very good Insurance options at reasonable price."</i></p>
  </div>
</div>
         </div>
</agile>
</div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.agile {bn 
    &__dots {
        bottom: 0;
        display: block;
        left: 10px;
        position: absolute;
        width: 30px;
    }

    &__dot {
        margin-bottom: 10px;

        button {
            background-color: transparent;
            border: 1px solid #ececec;
            margin-top: 10px;

            &:hover {
                background-color: #6515dd;
            }
        }

        &--current {
            button {
                background-color: #ececec;
            }
        }
    }
}

.slide {
    background: {
        position: center;
        size: cover;
    }
    height: 200px;

    &--1 {
        background-color: #6515dd;
    }
    &--2 {
        background-color: #6515dd;
    }
    &--3 {
        background-color: #6515dd;
    }

    
}

.color-light {
    background-color: #6515dd;
}
.main-wrapper {
    text-align: center;
    background-color: #6515dd;
    
}
.py-4 {
    color: white;
}
.jumbotron {
    background-color: #6515dd;
    color: white;
}
</style>
