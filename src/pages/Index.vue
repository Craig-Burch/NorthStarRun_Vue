<template>
  <div>
    <div class="page-header page-header-medium heroBackgroundImage">
      <div class="content-center">
      <div class="container">
        <div class="row ">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <img src ="img/logo/logoScaled.png">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h1>Welcome To <br> North Star Run</h1>
          </div>
        </div>
        <div class="row ml-auto mr-auto"> 
           <div class="col-md-12 ">
            <h5>Statesville, NC</h5>
          </div>
        </div>
        <div class="row ml-auto mr-auto" style="margin-top: -10px;">       
          <div class="col-md-6 col-sm-3">
            <a href="#" v-scroll-to="'#scrollDown'">
              <h4>
               <n-button class="darkBG text-center float-right heroBtn">Choose Retirement?</n-button>
              </h4>
           </a>
          </div>
          <div class="col-md-6 col-sm-3">
            <router-link to="/About-Us">
              <h4>
                <n-button class="darkBG text-center float-left heroBtn" >About Us</n-button>
              </h4>
           </router-link>
          </div>
        </div>
      </div>
      <div id="scrollDown"></div>
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
                A little about our Ranch
              </h3>
              <p>
                North Star Run is nestled on 160 Acres in Statesville, North Carolina.  This is a 5 Generation Family Farm located just 50 miles north of the Charlotte Douglas International Airport.  Our NC weather boasts all four seasons, but not extreme in any way—perfect for our retirees. Carved out from our farm’s best acreage, the lush rolling hills of our pasture include ample amount of tree lined shade, a natural spring running through the property, extremely safe fencing and a 50’ x 80’ run in to provide shelter in inclement weather.  

              </p>
             <!--  <p>
                Your horse can enjoy the water from our spring, but we will always have fresh clean water available to those horses that don’t want to get their feet wet. Hay is supplemented year-round as needed with horse quality, locally grown grass hay. Access to salt and mineral blocks is always available. We rotational de-worm every 3 months and hoof trim every 6 weeks.  We apply fly spray (provided by us) in the summer and use fly masks (provided by owner) to help combat any fly issues. We are happy to schedule a vet appointment for any issues and will meet the vet at no extra charge.  We are available to coordinate semiannual or annual vaccinations with our vet at market cost.  We have several vets within minutes of our farm and Tryon Equine Hospital within 100 miles. 
              </p> -->
              <!-- <p>
                One of the best things about North Star Run is that we are very cognizant of the herd dynamic. We do our very best to find your horse the herd mates that maximize safety, comfort and health. Herd placement is determined by sex, age, temperament and nutritional needs.
              </p> -->
               <p>
                We at NSR are committed to your horse’s well-being. TLC for each horse is of the utmost importance. Our daily hands on approach to your horse’s care is exactly that, hands on.  We get up close and personal with each horse. They are inspected daily.  We don’t just clance at your horse as we are driving by to feed them.  We personally check each horse from forelock to tail to make sure there are not any concerns we need to address.  Treating your horse as our own is our promise to you.
              </p>
              <!-- <p>
                We welcome visitors at any time. Several Major Airlines fly into the Charlotte Douglas International Airport.  All told, we are 65 miles North of the airport. We are only 10 minutes from the intersection of I-77 and I-40. Big rigs can deliver your horse to us with no difficulty. We have several hotels and restaurants nearby.  If you can’t come visit, we will do our best to bring your horse to you via pictures as often as you want.  We will do our best to keep you connected with your equine friend.
              </p>  -->
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
          <el-carousel height="600px">
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
  .carousel-inner img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
</style>
