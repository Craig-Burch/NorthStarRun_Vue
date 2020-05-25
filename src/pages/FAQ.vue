<!-- this code was moved to index -->
<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage" style="background-image: url('img/FAQhorse.png')"> 

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
           <h3 class="title" style="margin-bottom: 10px !important;">What type of hay will you be feeding? </h3>
           <ul>
             <li>  The most readily available locally grown supplemental hays are orchard and coastal grass hay.
             </li>
           </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What type of fencing is used on the farm for the horses? </h3>
           <ul>
             <li>  White, 3 rail electric tape with Tpost and Solar panel chargers. All Tpost tops are protected with rubber caps.
             </li>
           </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What type of grass is in your pastures?  </h3>
           <ul>
             <li>  Fescue and Red Clover.
             </li>
           </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What Vet do you use? </h3>
           <ul>
            <li>  We have several Vets within a ½ hour driving distance. <a target="_blank" href="http://www.statesvilleequineclinic.com/">Statesville Equine Clinic</a>  
             and <a target="_blank" href="https://nianimalhospital.com/">Bradford Animal Hospital</a> and both just minutes away from the farm. (add links)
            </li>
          </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">How far is the closest surgical center?  </h3>
           <ul>
             <li>  Approximately 100 miles. Tryon Equine Hospital in Columbus, NC. (add link)
             </li>
           </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What is the weather like in Statesville?  </h3>
           <ul>
           <li> You can check weather.com’s info <a target="_blank" href="https://www.weather-us.com/en/north-carolina-usa/charlotte-climate">HERE.</a>
              
            </li>
            <li> 
               There is a detailed summary of Charlotte’s weather (50 miles South of NSR) that you can access with the link below. 
              </li>
           </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What’s the average annual rainfall in Statesville?  </h3>
           <ul>
            <li> 44”
            </li>
           </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What’s the average annual snow fall in Statesville?  </h3>
           <ul>
            <li>  5” 
            </li>
           </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What is the hurricane history in Statesville?  </h3>
           <ul>
           <li>Statesville is in a very low risk hurricane zone. We understand that the past is not a perfect indication of the future. However, in this family’s 5 generation occupancy of the farm, there has been no harm to animals or property due to a hurricane. Fran went over Fayetteville, NC as a Category 1 in ’96.  Jeanne was a Tropical Depression over Winston-Salem in ’04.  Cindy (‘05) was less than a Tropical Depression when it hit the Carolinas.</li>
          </ul>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">What if my horse dies while residing at North Star Run?  </h3>
           <ol>
            <li >In the event of passing, we offer burial services right on the farm. 
            </li>
            <li >  
              Cremation is an option through a local,  <a target="_blank" href="https://agapepetservices.com/north-carolina/">reputable pet service</a>. If you choose cremation, they will compassionately and discretely retrieve your horse.
            </li>
            <li >  
              You may be able to donate your horse to UNC Chapel Hill Vet program. Your donation can help countless students learn more about the way our magnificent equine partners are created.
            </li>
          </ol>
        </info-section>
        <hr>
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
           <h3 class="title" style="margin-bottom: 10px !important;">If we did not answer your specific questions, please ask. We are happy to answer any questions you may have. </h3>
          
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
