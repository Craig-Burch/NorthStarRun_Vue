<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage globalHeaderMobile" style="background-image: url('img/faqHorse2.jpg')"> 
      <div class="content-center">
        <div class="container">
            <h1 class="info-title smallerMobileH1">Questions and Answers</h1>
            <hr style="background-color: white !important">
            <h3>Common questions answered for your convenience.</h3>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
           <h3 class="title" style="margin-bottom: 10px !important;">What type of hay will you be feeding? </h3>
           <ul>
             <li>  The most readily available locally grown supplemental hays are orchard and coastal grass hay.
             </li>
           </ul>   
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What type of fencing is used on the farm for the horses? </h3>
           <ul>
             <li>  White 3 rail electric tape with T-Posts and solar panel chargers. All T-Posts tops are protected with rubber caps.
             </li>
           </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What type of grass is in your pastures?  </h3>
           <ul>
             <li>  Fescue and Red Clover.
             </li>
           </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What Vet do you use? </h3>
           <ul>
            <li>  We have several Vets within a ½ hour driving distance. <a target="_blank" href="http://www.statesvilleequineclinic.com/">Statesville Equine Clinic</a>  
             and <a target="_blank" href="https://nianimalhospital.com/">Bradford Animal Hospital</a> and both just minutes away from the farm. 
            </li>
          </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">How far is the closest surgical center?  </h3> 
           <ul>
             <li>  Approximately 100 miles. <a target="_blank" href="https://www.tryonequine.com/"> Tryon Equine Hospital </a> in Columbus, NC. 
             </li>
           </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What is the weather like in Statesville?  </h3>
           <ul>
            <li> 
               There is a detailed summary of Charlotte’s weather (50 miles South of NSR) that you can access with the link below. 
            </li>
            <li> You can check weather.com info <a target="_blank" href="https://www.weather-us.com/en/north-carolina-usa/charlotte-climate">HERE.</a>             
            </li>          
           </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What’s the average annual rainfall in Statesville?  </h3>
           <ul>
            <li> 44”
            </li>
           </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What’s the average annual snow fall in Statesville?  </h3>
           <ul>
            <li>  5” 
            </li>
           </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What is the hurricane history in Statesville?  </h3>
           <ul>
           <li>Statesville is in a very low risk hurricane zone. We understand that the past is not a perfect indication of the future. However, in this family’s 5 generation occupancy of the farm, there has been no harm to animals or property due to a hurricane. Fran went over Fayetteville, NC as a Category 1 in ’96.  Jeanne was a Tropical Depression over Winston-Salem in ’04.  Cindy (‘05) was less than a Tropical Depression when it hit the Carolinas.</li>
          </ul>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">What if my horse dies while residing at North Star Run?  </h3>
           <ol>
            <li >In the event of passing, we offer burial services right on the farm. 
            </li>
            <li >  
              Cremation is an option through a local,  <a target="_blank" href="https://agapepetservices.com/north-carolina/">reputable pet service</a>. If you choose cremation, they will compassionately and discretely retrieve your horse.
            </li>
            <li >  
              You may be able to donate your horse to NC State veterinary program. Your donation can help countless students learn more about the way our magnificent equine partners are created.
            </li>
          </ol>
        <hr>
           <h3 class="title" style="margin-bottom: 10px !important;">We are happy to answer your specific questions if you don't see them here. Please contact us and we will gladly answer your questions.</h3>
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
