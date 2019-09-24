<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="section-contact__head"><span>Get in Touch</span></h1>
          <h2 class="section-contact__subhead"><span>Send us an e-mail, give us a call or write to us via our contact form.</span></h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-5">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-12">
              <div class="section-contact__details">
                <a href="tel: 1-416-817-3730" class="link">
          <i class="fas fa-phone"></i>
1-416-817-3730
        </a>
        <a href="tel: 1-365-788-5001" class="link">
          <i class="fas fa-phone"></i>
1-365-788-5001
        </a>
         <a href="mailto:2insure.profit@gmail.com" class="link">
          <i class="fas fa-envelope"></i>
2INSURE.PROFIT@GMAIL.COM
        </a>
              </div>
            </div>
           
          </div>
        </div>
 <div class="col-xs-12 col-md-7">
              <fieldset class="fieldset">
                <div class="row">
                <div class="col-xs-12 col-sm-6">
                  <div class="form-group  ">
                    <label for="input_1" class="control-label sr-only">First Name</label>
                    <div class="controls ">
                      <input type="text" class="form-control" placeholder="First Name" id="input_1" name="firstName" value="" autocomplete="on">
                    </div>
                   </div>
            </div>

            <div class="col-xs-12 col-sm-6"><div class="form-group">
              <label for="input_2" class="control-label sr-only">Last Name</label>
              <div class="controls "><input type="text" class="form-control" placeholder="Last Name" id="input_2" name="lastName" value="" autocomplete="on">
              </div>
              </div>
              </div>

              <div class="col-xs-12 col-sm-12">
                <div class="form-group"><label for="input_3" class="control-label sr-only">Email</label>
<div class="controls ">
  <input type="email" class="form-control" placeholder="Email" id="input_3" name="email" value="" autocomplete="email">
  </div>
  </div>
  </div>

  <div class="col-xs-12 col-sm-12"><div class="form-group "><label for="input_4" class="control-label sr-only">Phone</label>
  <div class="controls"><div class="react-tel-input">
    <input type="tel" value="" class="form-control" autocomplete="tel" placeholder="+1 (702) 123-4567">
    <div class="flag-dropdown"><div class="selected-flag" title="United States: + 1">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div class="col-xs-12 col-sm-12"><div class="form-group"><label for="input_6" class="control-label sr-only">Message</label><div class="controls "><textarea class="form-control" placeholder="Message" id="input_6" name="message"></textarea></div></div></div>
            <div class="col-xs-12"><button class="Button--button--3B9Ox"><span>Send message</span></button></div>
            </div>
              </fieldset>
            </div>

      </div>
    </div>
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
    color: #7f899c;
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