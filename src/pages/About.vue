<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="section-contact__head"><span>How We Works</span></h1>
          
        </div>
      </div>
      <div class="row py-5">
        <div class="col-sm-12">
         
          <h2 class="section-contact__subhead"><span>Insure Profit reverses the traditional insurance model. We treat the premiums you pay as if it's your money, not ours. With Insure Profit, everything becomes simple and transparent. We take a flat fee, pay claims super fast, and give back what’s left to causes you care about.*</span></h2>
        </div>
      </div>

    </div>
    <Newsletter />
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'
import Newsletter from '~/components/Newsletter.vue'
export default {
  components: {
    Layout,
    Newsletter
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding-top: 2.5rem;
}
.section-contact__head 
{
    font-size: 42px;
    font-size: 2.625rem;
    margin: 0;
    text-align: center;
    font-weight: 500;
}
.section-contact__subhead {
    font-size: 18px;
    font-size: 1.125rem;
    margin-top: 0;
    margin-bottom: 4rem;
    text-align: center;
    color: #424242;
    font-weight: 400;
}
.section-contact__details {
    border-bottom: 1px solid #d7dfed;
    padding-bottom: 2.8125rem;
    margin-bottom: 2.8125rem;
}
.section-contact__details .link {
    font-size: 18px;
    font-size: 1.125rem;
    display: block;
    color: #7d5dfb;
    margin-bottom: .9375rem;
    font-weight: 400;
}
.fieldset {
    padding: 1.875rem 1.5625rem 1.25rem;
    margin-bottom: 2rem;
    background-color: #eef1f5;
    border-radius: 5px;
}
.Button--button--3B9Ox {
    --btn-border-width: 1px;
    --btn-font-size: 18px;
    --btn-height: 50px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    background: #6515dd;
    border: 1px solid transparent;
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
</style>