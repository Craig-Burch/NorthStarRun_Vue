<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage" style="background-image: url('img/field.png')">
      <div class="content-center">
      <div class="container">
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
            <h1 class="info-title">About Us</h1>
            <hr style="background-color: white !important">
           
         </info-section>
          <div class="row ml-auto mr-auto" style="margin-top: -10px;">       
          <div class="col-md-6 col-sm-3">
            <a href="#" v-scroll-to="'#scrollDown-OurFarm'">
              <h4>
               <n-button class="darkBG text-center float-right heroBtn">Our Farm</n-button>
              </h4>
           </a>
          </div>
          <div class="col-md-6 col-sm-3">
            <a href="#" v-scroll-to="'#scrollDown-OurTeam'">
              <h4>
                <n-button class="darkBG text-center float-left heroBtn" >Our Team</n-button>
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
          Welcome to North Star Run, we are nestled on 160 Acres in Statesville, North Carolina.  This is a 5 Generation Family Farm located just 50 miles north of the Charlotte Douglas International Airport.  Our NC weather boasts all four seasons, but not extreme in any way—perfect for our retirees. Carved out from our farm’s best acreage, the lush rolling hills of our pasture include ample amount of tree lined shade, a natural spring running through the property, extremely safe fencing and a 40’ x 44’ run in to provide shelter in inclement weather.  
          <br> <br>
          Your horse can enjoy the water from our spring, but we will always have fresh clean water available to those horses that don’t want to get their feet wet. Hay is supplemented year-round as needed with horse quality, locally grown grass hay. Access to salt and mineral blocks is always available. We rotational de-worm every 3 months and hoof trim every 6 weeks.  We apply fly spray (provided by us) in the summer and use fly masks (provided by owner) to help combat any fly issues. We are happy to schedule a vet appointment for any issues and will meet the vet at no extra charge.  We are available to coordinate semiannual or annual vaccinations with our vet at market cost.  We have several vets within minutes of our farm and Tryon Equine Hospital within 100 miles. 
          <br><br>
          One of the best things about North Star Run is that we are very cognizant of the herd dynamic. We do our very best to find your horse the herd mates that maximize safety, comfort and health. Herd placement is determined by sex, age, temperament and nutritional needs.
          <br><br>
          We at NSR are committed to your horse’s well-being. TLC for each horse is of the utmost importance. Our daily hands on approach to your horse’s care is exactly that, hands on.  We get up close and personal with each horse. They are inspected daily.  We don’t just clance at your horse as we are driving by to feed them.  We personally check each horse from forelock to tail to make sure there are not any concerns we need to address.  Treating your horse as our own is our promise to you.
          <br><br>
          We welcome visitors at any time. Several Major Airlines fly into the Charlotte Douglas International Airport.  All told, we are 65 miles North of the airport. We are only 10 minutes from the intersection of I-77 and I-40. Big rigs can deliver your horse to us with no difficulty. We have several hotels and restaurants nearby.  If you can’t come visit, we will do our best to bring your horse to you via pictures as often as you want.  We will do our best to keep you connected with your equine friend. 
         </p>
         
      </div>
    </div>
     <!-- move to about us page and transistion section to our experience, for wendy use picture of her and gary, dont use mason and wendy photo for now. -->
    <div class="section section-team text-center" id="scrollDown-OurTeam">
      <div class="container">
        <h3 class="title" > Our Team </h3>
         <p class="mb-5">
          With decades of experience, we have the tools to take care of the... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        
        <div class="team">
          <div class="row">
            <div class="col-md-6">
              <div class="team-player">
                <img
                  src="img/JandKscaled.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised team-images"
                  width="170"
                />
                <h4 class="title">Jennifer Burch</h4>
                <p class="category text-primary">Owner</p>
                <p class="">
                  Horses are my passion. I’ve been involved in the Equine Industry for the past 41 years in many capacities; trainer, riding instructor, show coach, boarding barn owner/manager, foaling manager, and horse owner.  
                  <!-- I am so blessed to have had so many amazing opportunities in the horse world.  -->
                  I’m excited to take this knowledge into the retirement boarding industry.
                </p>
                <!-- <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a> -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="team-player">
                <img
                  src="img/GandWscaled.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised team-images"             
                  width="170"
                />
                <h4 class="title">Wendy Holland</h4>
                <p class="category text-primary">Owner</p>
                <p class="">
                 I grew up riding horses with Jenni. I’ve always had a love for horses. Really, I’ve always had a love for the farm life. My husband Gary and I, along with Gary’s family, own our 160-acre farm.  We live on the property and will be sharing in the day to day operation of our retirement boarding facility.
                </p>
               <!--  <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a> -->
              </div>
            </div>
            
            <!-- <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/GaryAndWendy.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Gary Holland</h4>
                <p class="category text-primary">Owner</p>
                <p class="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn darkBG btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>



    <!-- <mdb-container>
    <h4 class="pb-2">Cascading cards</h4>
    <mdb-row>
      <mdb-col sm="4">
        <mdb-card wide>
          <div class="img-wrapper">
          <mdb-view>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves zoom="white-slight"></mdb-mask>
          </mdb-view>
         </div>
          <mdb-card-body class="text-center" cascade>
            <mdb-card-title><strong>Alice Mayer</strong></mdb-card-title>
            <h5 class="indigo-text"><strong>Photographer</strong></h5>
            <mdb-card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.</mdb-card-text>
            <a class="fa-lg li-ic px-2">
              <mdb-icon fab icon="linkedin" /></a>
            <a class="fa-lg tw-ic px-2">
              <mdb-icon fab icon="twitter" /></a>
            <a class="fa-lg fb-ic px-2">
              <mdb-icon fab icon="facebook" /></a>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col sm="4">
        <mdb-card narrow>
          <mdb-view hover cascade>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body cascade>
            <h5 class="pink-text pb-2 pt-1">
              <mdb-icon fab icon="utensils" /> Culinary</h5>
            <mdb-card-title>Cheat day inspirations</mdb-card-title>
            <mdb-card-text>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.</mdb-card-text>
            <mdb-btn color="unique">Button</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col sm="4">
        <mdb-card cascade>
          <mdb-view hover cascade>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body class="text-center" cascade>
            <mdb-card-title><strong>Billy Cullen</strong></mdb-card-title>
            <h5>Web developer</h5>
            <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex,
              recusandae. Facere modi sunt, quod quibusdam.</mdb-card-text>
            <mdb-btn tag="a" floating small class="btn-fb">
              <mdb-icon fab icon="facebook" />
            </mdb-btn>
            <mdb-btn tag="a" floating small class="btn-tw">
              <mdb-icon fab icon="twitter" />
            </mdb-btn>
            <mdb-btn tag="a" floating small class="btn-dribbble">
              <mdb-icon fab icon="dribbble" />
            </mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container> -->


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

</style>
