<template>
<div>
  <Header />
  <transition name="fade" appear>
        
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
      <Footer />
</div>

</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>


<style lang="scss">


</style>
