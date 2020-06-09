<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage globalHeaderMobile" style="background-image: url('img/contact2.jpg');"> 
      <div class="content-center">
      <div class="container">
         <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
            <h1 class="info-title smallerMobileH1">Contact Us</h1>
            <hr style="background-color: white !important">
            <h3 style="color: white">Send us a message below.</h3>
         </info-section>
        </div>
      </div>
</div>
    
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to talk?</h2>
        <p class="description darkColor">Your inquiry is very important to us.</p>
        <div class="contact">
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="Your Name.."
              name="name"
              v-model="data.name"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Your Email.."
              name="email"
              type="email"
              v-model="data.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                rows="4"
                cols="80"
                name="comment" 
                v-model="data.comment"
                placeholder="Please let us know about your specific needs.."
              ></textarea>
            </div>
            <div class="send-button">
               <button type="submit" class="darkBG btn" style="width: 150px; font-size: 20px">Submit</button>
            </div>
          </div>
        </div>
        </form>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { Carousel, CarouselItem } from 'element-ui';
import axios from "axios";
export default {

  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
     handleSubmit () {
      let formValues = [];
        const inputs = document.querySelectorAll(".contact input, textarea ");
          for (let input of inputs) {
            let name = input.name;
            let value = input.value;
            formValues.push({ [name]: value });
          }
          formValues = Object.assign({}, ...formValues);
          this.data = formValues;
          if (formValues.name === "") {
            alert('Name is Required. Please fix.');
          } else if (formValues.email === "") {
              alert('Email is Required. Please fix.');
          } else if (formValues.comment === "") {
              alert('Please tell us about your inquiry in the comment section. Thank you.');
          }
          else {
            axios 
            .post('http://northstarcontact-env.eba-vptdb8cr.us-east-1.elasticbeanstalk.com/mailer', formValues)
            .then(response => {       
              console.log(response);     
            })
            .catch(error => {
              console.log(error);
            });
            alert("Thank you, we will contact you as soon as possible! Have a wonderful day!");
            this.$router.push('/')
          } 
      }
  }
};
</script>
<style>
.carousel-inner img {
  width: 100%;
  height: 75vh;
  object-fit: cover;
}

.contactIcons {
  background-color: white; 
  border-radius: 40px; 
  padding: 20px;
}

.mt-below-icons {
  margin-top: -20px;
}

i.input-group-text  {
  border: 1px solid #2a425e !important;
  border-right: none !important;
}

input.form-control {
  border: 1px solid #2a425e !important;
  border-left: none !important;
}

textarea.form-control, .el-date-picker .el-input textarea.el-input__inner, .form-group textarea.el-input__inner {
  border-bottom: 1px solid #2a425e !important;
}
</style>
