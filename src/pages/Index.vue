<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
   <Heropage />
    <Card />
    <Newsletter />
    <Social />
    <Footer />

  </Layout>
</template>

<script>
import Heropage from '~/components/Heropage.vue'
import Card from '~/components/Card.vue'
import Newsletter from '~/components/Newsletter.vue'
import Social from '~/components/Social.vue'

export default {
  components: {
    Heropage,
    Card,
    Newsletter,
    Social
  },
  metaInfo: {
    title: ''
  }
}
</script>

<style>

.home-links a {
  margin-right: 1rem;
}
</style>
