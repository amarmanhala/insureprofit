<template>
  <div id="container" class="container-fluid">
    <div class="row">
      
      <div class="col-sm-4 offset-sm-4 text-center">
        <div class="alert" 
             role="alert" 
             v-if="submitted"
             v-bind:class="{'alert-success' : submitted , 'alert-danger' : notSubmitted }"
             >
  {{ responsemsg }}
</div>
        <h2>Get Quote</h2>

        <div class="info-form">
          <form class="justify-content-center" id="signup-form" @submit.prevent="processForm">
           
            <div class="form-group">
              <input
                v-model="name"
                v-bind:class="{'form-control':true, 'is-invalid' : !validName(name) && nameBlured }"
                v-on:blur="nameBlured = true"
                placeholder="Enter Name"
              >
              <div class="invalid-feedback">A valid name is required</div>
            </div>

             <div class="form-group">
              <input
                v-model="email"
                v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                v-on:blur="emailBlured = true"
                placeholder="Email"
              >
              <div class="invalid-feedback">A valid email is required</div>
            </div>

          
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">🇨🇦 +1</div>
              </div>
              <input
                type="text"
                v-model="phone"
                placeholder="Phone"
                v-bind:class="{'form-control':true, 'is-invalid' : !validPhone(phone) && phoneBlured }"
                v-on:blur="phoneBlured = true"
                pattern="^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$"
              >
            </div>
            <div class="input-group mb-3">
              <select class="form-control" name="plan" v-model="plan" v-on:change="sortBy">
                 <option value="" disabled selected>Select Plan</option>
                <option>Home Insurance</option>
                <option>Travel Insurance</option>
                <option>Mortgage Insurance</option>
                <option>Health Insurance</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                class="form-control"
              
                v-model="message"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" class="btn Button--button--3B9Ox">Submit!</button>
          </form>
        </div>
        <br>

        <a href="#nav-main" class="btn btn-secondary-outline btn-sm" role="button">↓</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      phone: "",
      plan: "",
      message: "",
      emailBlured: false,
      nameBlured: false,
      phoneBlured: false,
      valid: false,
      submitted: false,
      responsemsg: "",
      notSubmitted: false,
      renderComponent: true
    };
  },
  methods: {
    validate: function() {
      this.emailBlured = true;
      this.nameBlured = true;
      this.phoneBlured = true;
      if (this.validEmail(this.email) && this.validName(this.name)) {
        this.valid = true;
      }
    },
    validEmail: function(email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },
     validName: function(name) {
       if(name == "") {
         return false
       }
       else {
         return true;
       }
      
      
    },
     validPhone: function(phone) {
       if(phone == "") {
         return false
       }
       else {
         return true;
       }
      
      
    },

    processForm: function(e) {
     

      this.validate();

      if (this.valid) {
        //THIS IS WHERE YOU SUBMIT DATA TO SERVER
        this.submitted = true;

axios({
  method:'post',
  url:'http://insure-profit.com/restserver/index.php/example_api/users',
  data: {
  userName: this.name,
    userEmail: this.email,
    userPhone: this.phone,
    userMessage: this.message,
    userPlan: this.plan,

  }
})
.then((response) => {
    console.log(response);
    //var self = this;
    this.submitted = true;
    this.responsemsg = response.data;
     setTimeout(() => {
                 
                 this.submitted = false;
                document.getElementById("signup-form").reset();
      
      //vent.target.reset();
            }, 1000);
           
    
   
    
  })
  .catch(function (error) {
    this.notSubmitted = true;
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
      }
      e.preventDefault();
console.log("done");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/style.scss";
.container-fluid {
  background-color: #eef1f5 !important;
}
h2 {
  color: #212529;

  font-weight: 600;
}
.Button--button--3B9Ox {
  color: white;
  background-color: $primary-color;
}
.row {
  padding-top: 40px;
}
.btn-wrapper {
  padding: 20px 0px;
}
.form-control-lg {
  border: 1px solid transparent;
  border-radius: 999px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  h2 {
    font-size: 1.5rem !important;
    font-weight: 600 !important;
  }
}
</style>
