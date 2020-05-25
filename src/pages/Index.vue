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
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h1 class="smallerMobileH1">Welcome To <br> North Star Run</h1>
          </div>
        </div>
        <div class="row ml-auto mr-auto"> 
           <div class="col-md-12 ">
            <h3>Statesville, NC</h3>
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
          <div class="col-md-6 col-sm-12 mobileMarginBtn" id="scrollDown">
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

     <!-- orginal slide -->
      <!-- <div id="slides" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" class="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2017/06/21/15/08/horses-2427513_1280.jpg" alt="NSR" width="1100" height="500">
            <div class="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>   
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2020/04/07/14/09/obertraun-5013491_1280.jpg" alt="NSR" width="1100" height="500">
            <div class="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>   
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2015/05/23/16/59/homestead-780767_1280.jpg" alt="NSR" width="1100" height="500">
            <div class="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>   
          </div>
         </div>
          <a class="carousel-control-prev" href="#slides" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#slides" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
      </div> -->



    </div>
    <div class="section section-about-us" id="">
      <div class="container">
        <!-- <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Our Mission</h2>
            <p class="">
              In 2017, I retired my Thoroughbred, Ki, to a retirement farm in Kentucky.  I anguished over that decision.  I knew it was the right decision, when I saw him gallop across the pasture and play in the pond with his herd mates.  To see Ki just “being a horse” in a peaceful, natural herd environment makes me so happy and I know it’s what he deserves.  Let North Star Run welcome your horse to retirement. 
              <br><br>
              Ki isn’t really that old, but he has health issues that make him un-rideable. He did an amazing job taking care of me over the years.  I wanted to give back to him in the most loving way. Whether it be old age, injury or just a reprieve from high boarding costs, consider NSR a selfless answer to a lease on a new life.
            </p>
          </div>
        </div> -->
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
                  <small>-Jennifer Burch</small>
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
              <h3>
                Are you considering retirement for your horse?
              </h3>
              <p>
               In 2017, I retired my Thoroughbred, Ki, to a retirement farm in Kentucky. I
               anguished over that decision. I knew it was the right decision, when I saw him
               gallop across the pasture and play in the pond with his herd mates. To see Ki just
               “being a horse” in a peaceful, natural herd environment makes me so happy and I
               know it’s what he deserves. Let North Star Run welcome your horse to
               retirement. 

              </p>
              <br>
               <p>
                Considering Retirement Living for your horse?  Wondering if it’s the right choice for your equine
                partner?  It’s a difficult decision to make. I know, I’ve been there. In 2017 I retired my horse Ki to a
                retirement farm. I anguished over that decision, but I knew it was the right one when I see Ki just “being
                a horse” in a peaceful, natural herd environment. He’s thriving and happy and I know that’s what he
                deserves.
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

    <div class="section" id="carousel"  style="background-size: cover; background-image: url('https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_1280.jpg')">
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
        <p class="description">Your inquiry is very important to us.</p>
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
  @media only screen and (max-width: 575px) {
   .heroLogo {
    width: 175px;
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
    height: 600px;
  }
  @media only screen and (max-width: 989px) {
  .carousel-height {
    height: 350px;
   }
 }
  .carousel-inner img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }

  @media only screen and (max-width: 989px) {
  .carousel-inner img {
  height: 100vh;
  border: 1px solid red;

  }
}


</style>
