<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage" style="background-image: url('https://cdn.pixabay.com/photo/2017/01/12/12/49/painting-1974614_1280.jpg');"> 
      <div class="content-center">
      <div class="container mt-5">
         <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
            <h1 class="info-title">Contact Us</h1>
            <hr style="background-color: white !important">
           
         </info-section>
        <div class="row ">
          <div class="col-md-4 ml-auto mr-auto text-center ">
            <i style="font-size: 40px;" class="now-ui-icons tech_mobile"></i>
            <h4 class="mt-2"> Feel free to call us by clicking on the icon above and talk about your questions regarding our horse retirement farm.</h4>
          </div>
          <div class="col-md-4 ml-auto mr-auto text-center  ">
            <i style="font-size: 40px;" class="now-ui-icons ui-1_email-85"></i>
             <h4 class="mt-2">You can email us by clicking the icon above or filling out contact form below. We look forward to hearing from you!</h4>
          </div>
          <div class="col-md-4 ml-auto mr-auto text-center  ">
            <i style="font-size: 40px;" class="now-ui-icons media-1_camera-compact"></i>
             <h4 class="mt-2"> Follow us on our Instagram to keep up with the news surrounding our business. Thank you for your interest!</h4>
          </div>
        </div>
        </div>
      </div>
</div>
    
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to talk?</h2>
        <p class="description darkColor">Your inquiry is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button class ="darkBG" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>



    </div>


  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { Carousel, CarouselItem } from 'element-ui';
export default {

  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style>
  .carousel-inner img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
</style>
