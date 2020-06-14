<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage globalHeaderMobile" style="background-image: url('img/field13.jpg')">
      <div class="content-center">
      <div class="container">
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
            <h1 class="info-title smallerMobileH1">About Us</h1>
            <hr style="background-color: white !important">
           
         </info-section>
          <div class="row ml-auto mr-auto" style="margin-top: -10px;">       
          <div class="col-md-6 col-sm-12 mobileMarginBtn">
            <a href="#" v-scroll-to="'#scrollDown-OurFarm'">
              <h4>
               <n-button class="darkBG text-center heroBtn">Our Farm</n-button>
              </h4>
           </a>
          </div>
          <div class="col-md-6 col-sm-12 mobileMarginBtn">
            <a href="#" v-scroll-to="'#scrollDown-OurTeam'">
              <h4>
                <n-button class="darkBG text-center heroBtn" >Our Team</n-button>
              </h4>
           </a>
          </div>
        </div>
      </div>
       <div id="scrollDown-OurFarm">
          </div>
    </div>
    </div>
    <div class="section">
      <div class="container">
       
        <h3 class="title">Our Farm</h3>
        <p class="">
          Welcome to North Star Run! <br><br>
          North Star Run is nestled on 160 Acres in Statesville, North Carolina.  This is a 5th Generation Family Farm located just 50 miles north of the Charlotte Douglas International Airport.  Our NC weather boasts all four seasons, but not extreme in any way—perfect for our retirees. Carved out from our farm’s best acreage, the lush rolling hills of our pastures include ample amount of tree lined shade, a natural spring running through the property, extremely safe fencing and a 40’ x 44’ run in to provide shelter in inclement weather.  
          <br> <br>
          Your horse can enjoy the water from our spring, but we will always have fresh clean water available to those horses that don’t want to get their feet wet. Hay is supplemented year-round as needed with horse quality, locally grown grass hay. Access to salt and mineral blocks are always available. We rotational de-worm every 3 months and hoof trim every 6 weeks.  We apply fly spray (provided by us) in the summer and use fly masks (provided by owner) to help combat any fly issues. We are happy to schedule a vet appointment for any issues and will meet the vet at no extra charge.  We are available to coordinate semiannual or annual vaccinations with our vet at market cost.  We have several vets within minutes of our farm and Tryon Equine Hospital within 100 miles. 
          <br><br>
          One of the best things about North Star Run is that we are very cognizant of the herd dynamic. We do our very best to find your horse the herd mates that maximize safety, comfort and health. Herd placement is determined by sex, age, temperament and nutritional needs.
          <br><br>
          We at NSR are committed to your horse’s well-being. TLC for each horse is of the utmost importance. Our daily hands on approach to your horse’s care is exactly that, hands on.  We get up close and personal with each horse. They are inspected daily.  We don’t just glance at your horse as we are driving by to feed them.  We personally check each horse from forelock to tail to make sure there are not any concerns we need to address.  Treating your horse as our own is our promise to you.
          <br><br>
          We welcome visitors at any time. Several Major Airlines fly into the Charlotte Douglas International Airport.  All told, we are 65 miles North of the airport. We are only 10 minutes from the intersection of I-77 and I-40. Big rigs can deliver your horse to us with no difficulty. We have several hotels and restaurants nearby.  If you can’t come visit, we will do our best to bring your horse to you via pictures as often as you want.  We will do our best to keep you connected with your equine friend. 
         </p>
         <div id="scrollDown-OurTeam"></div>
      </div>
    </div>
    <div class="section section-team text-center" >
      <div class="container">
        <h3 class="title" > Our Team </h3>
         <p class="mb-5" style="width: 80%; margin-left: 10%">
          With decades of experience, our team has the tools to care for your horse with the knowledge and expertise needed to provide unmatched, quality care for your treasured companion. 
        </p>
        
        <div class="team">
          <div class="row">
            <div class="col-md-6">
              <div class="team-player">
                <img
                  src="img/jAndT.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised team-images"
                  width="170"
                />
                <h4 class="title">Jenni and Todd Burch</h4>
                <p class="category text-primary">Owners</p>
                <p class="">
                  Horses are Jenni's passion. She has been involved in the Equine Industry for the past 41 years in many capacities; trainer, riding instructor, competitor, boarding barn owner/manager, foaling manager, and horse owner. Both Jenni and husband, Todd, are excited to take their collective knowledge of Horses and Finance into the retirement boarding industry.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="team-player">
                <img
                  src="img/GandWscaled.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised team-images margin-top-mobile"             
                  width="170"
                />
                <h4 class="title">Wendy and Gary Holland</h4>
                <p class="category text-primary">Owners</p>
                <p class="">
                 Wendy grew up riding horses with Jenni and has always had a love for them. Really, she's always had a love for the farm life. Wendy and husband Gary, along with Gary’s family, own North Star Run's 160-acre farm. They live on the property and will be sharing in the day to day operation of NSR's retirement boarding facility.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { Tabs, TabPane } from '@/components';
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
export default { 
  components: {
    Tabs,
    TabPane,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  }
};
</script>
<style>
  .team-images img{
     height: 400px !important;
     width: 275px;
  }

@media only screen and (max-width: 767px) {
  .margin-top-mobile {
    margin-top: 35px;
  }
}

</style>
