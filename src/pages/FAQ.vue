<!-- this code was moved to index -->
<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage" style="background-image: url('https://cdn.pixabay.com/photo/2018/07/22/20/02/horse-3555391_1280.jpg')"> 

      <div class="content-center">
        <div class="container">
          <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
            <h1 class="info-title">Questions and Answers</h1>
            <hr style="background-color: white !important">
            <h4 style="color: white">Common questions answered for your convenience.</h4>
         </info-section>
        </div>
      </div>
    </div>


    <div class="section section-about-us">
      <div class="container">
        <info-section class="info-hover "
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What type of hay will you be feeding? </h3>
           <p class="ml-4">- Your horse will be able to graze on Fescue and Red Clover.  The most readily available locally grown supplemental hays are orchard and coastal grass hay.</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What type of fencing is used on the farm for the horses? </h3>
           <p class="ml-4 mb-4"> - 3 rail electric tape with Solar panel charger.</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What type of grass is in your pastures?  </h3>
           <p class="ml-4 mb-4">- Fescue and Red Clover.</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What Vet do you use? </h3>
           <p class="ml-4 mb-4">- We have several Vets within a ½ hour driving distance.  Statesville Equine Clinic and Bradford animal hospital and both just minutes away from the farm. (add links)</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">How far is the closest surgical center?  </h3>
           <p class="ml-4 mb-4">- Approximately 100 miles. Tryon Equine Hospital in Columbus, NC. (add link)</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What is the weather like in Statesville?  </h3>
           <p class="ml-4 mb-4">- You can check weather.com’s info here. <br> - There is a detailed summary of Charlotte’s weather (50 miles South of NSR) that you can access with the link below. <br>
                      <a target="_blank" href="https://www.weather-us.com/en/north-carolina-usa/charlotte-climate">LINK TO WEATHER</a></p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What’s the average annual rainfall in Statesville?  </h3>
           <p class="ml-4 mb-4"> 44”</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What’s the average annual snow fall in Statesville?  </h3>
           <p class="ml-4 mb-4">  5” </p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What is the hurricane history in Statesville?  </h3>
           <p class="ml-4 mb-4">- Statesville is in a very low risk hurricane zone. We understand that the past is not a perfect indication of the future. However, in this family’s 5 generation occupancy of the farm, there has been no harm to animals or property due to a hurricane. Fran went over Fayetteville, NC as a Category 1 in ’96.  Jeanne was a Tropical Depression over Winston-Salem in ’04.  Cindy (‘05) was less than a Tropical Depression when it hit the Carolinas.</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">What if my horse dies while residing at North Star Run?  </h3>
           <p class="ml-4 mb-4">1.)   In the event of passing, we offer burial services right on the farm. <br>
                                2.)   Cremation is an option through a local,  <a target="_blank" href="https://agapepetservices.com/north-carolina/">reputable pet service</a>. If you choose cremation, they will compassionately and discretely retrieve your horse. <br>
                                3.)   You may be able to donate your horse to UNC Chapel Hill Vet program. Your donation can help countless students learn more about the way our magnificent equine partners are created.</p>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 style="margin-bottom: 10px !important;">If we did not answer your specific questions, please ask. We are happy to answer any questions you may have. </h3>
          
        </info-section>
      </div>
    </div>
  </div>
</template>


<script>
import { Button, FormGroupInput } from '@/components';
export default {

  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
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
<style scoped>
  .borderQA {
    .border: 1px solid #2a425e;
  }
</style>
