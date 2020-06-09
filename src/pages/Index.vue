<template>
  <div>
    <div class="page-header page-header-medium heroBackgroundImage" style="background-image: url('img/nc.jpg')">
      <div class="content-center">
      <div class="container">
        <div class="row ">
          <div class="col-md-6 col-sm-6 ml-auto mr-auto text-center">
            <img class="heroLogo" src="img/logo/logoScaled.png">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center" id="scrollDown">
            <h1 class="smallerMobileH1">Welcome To <br> North Star Run</h1>
          </div>
        </div>
        <div class="row ml-auto mr-auto"> 
           <div class="col-md-12 ">
            <h3 class="stateText">Statesville, NC</h3> 
          </div>
        </div>
        <div class="row ml-auto mr-auto" style="margin-top: -10px;">       
          <div class="col-md-6 col-sm-12 mobileMarginBtn">
            <a href="#" v-scroll-to="'#scrollDown'">
              <h4>
               <n-button class="darkBG text-center heroBtn">Choose Retirement?</n-button>
              </h4>
           </a>
          </div>
          <div class="col-md-6 col-sm-12 mobileMarginBtn" >
            <router-link to="/About-Us">
              <h4>
                <n-button class="darkBG text-center heroBtn" >About Us</n-button>
              </h4>
           </router-link>
          </div>
        </div>
      </div>
      <div ></div>
      </div>

    </div>
    <div class="section section-about-us" id="">
      <div class="container">
         <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"> Are You Considering Retirement For Your Horse?</h2>
            <p class="">
                Considering Retirement Living for your horse?  Wondering if it’s the right choice for your equine
                partner?  It’s a difficult decision to make. I know, I’ve been there. In 2017 I retired my horse Ki to a
                retirement farm. I anguished over that decision, but I knew it was the right one when I saw Ki just “being
                a horse” in a peaceful, natural herd environment. He’s thriving and happy and I know that’s what he
                deserves.
            </p>
          </div>
        </div> 
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('https://cdn.pixabay.com/photo/2016/05/25/13/55/horses-1414889_1280.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "One of the best things about North Star Run is that we are very cognizant of the herd dynamic. 
                  We do our very best to find your horse the herd mates that maximize safety, comfort and health."
                  <br />
                  <br />
                  <small>-Jenni Burch</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg')"
              ></div>
                 
              <br>
               <p>
                Maybe your horse is older, and he’s done an amazing job taking care of you over the years.  Now you
                want to give back to him in the most loving way.
                <br><br>

                Or, maybe your horse in younger but an injury is keeping him from doing his job.
                <br><br>

                Or, perhaps you just need a reprieve from the high boarding costs in many parts of our country.
                <br><br>
    
                Or, maybe your horse just needs some much needed down time to refresh and relax.
              </p>
              <br>
              <p>
                Whatever the reason you are considering equine retirement, just know I have found it’s always a
                wonderful, selfless answer to many different scenarios.  You will be offering him a natural, peaceful way
                of life in a safe environment.
              </p>  
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section smallMobile" id="carousel"  style="background-size: cover; background-image: url('https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_1280.jpg')">
    <div class="container">
      <div class="title">
        <h4></h4>
      </div>
      <div class="row justify-content-center img-raised" >
        <div class="col-12  mb-2 mt-2">
          <el-carousel class="carousel-height">
            <el-carousel-item>
              <img class="d-block" src="https://cdn.pixabay.com/photo/2017/01/16/19/17/horses-1984977_1280.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Picture 1</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="https://cdn.pixabay.com/photo/2016/01/19/17/23/countryside-1149680_1280.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Picture 2</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="https://cdn.pixabay.com/photo/2014/08/26/15/15/country-lane-428039_1280.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Picture 3</h5>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
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
  name: 'landing',
  bodyClass: 'landing-page',
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
            location.reload();
          } 
      }
  }
};
</script>
<style>
  .stateText {
    font-size: 30px; 
  }

  /*contact form*/
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

  @media only screen and (max-width: 575px) {
   .heroLogo {
    width: 175px;
   }
   .stateText {
    font-size: 20px; 
   }
  }
  @media only screen and (max-width: 380px) {
   .heroLogo {
     width: 150px;
   }
  }

  .el-carousel__arrow {
    color: white !important;
    border: 1px solid white;
  }
 .carousel-height {
    height: 600px !important;
  }
  .el-carousel__container {
    height: 600px !important;
  }
  
  @media only screen and (max-width: 989px) {
  .carousel-height {
    height: 400px !important;
   }
   .el-carousel__container {
    height: 400px !important;
   /* object-fit: contain !important;*/
  }
  .el-carousel__container img {
    height: 400px !important;
    object-fit: cover !important;
    display: block;
    margin-left: auto;
    margin-right: auto;

  }
 }
 @media only screen and (max-width: 600px) {
  .carousel-height {
    height: 400px !important;
   }
   .el-carousel__container img{
    height: 300px !important;
  }
 }

 @media only screen and (max-width: 480px) {
  .carousel-height {
    height: 400px !important;
   }
   .el-carousel__container img{
    height: 300px !important;
  }
 }

 @media only screen and (max-width: 375px) {
  .smallMobile {
    display: none;
   }
 }


</style>
