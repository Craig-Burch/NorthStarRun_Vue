<template>
  <div>
    <div class="page-header page-header-small heroBackgroundImage globalHeaderMobile" style="background-image: url('img/field22.jpg')">
      <div class="content-center">
      <div class="container">
        <info-section class="info-hover"
              direction="vertical"
              type="primary"
              icon="now-ui-icons ui-2_chat-round">
            <h1 class="info-title smallerMobileH1">Pricing</h1>
            <hr style="background-color: white !important">
            <h4 style="color: white">Our bording fee to provide exceptional, quality, care for your horse is $350 per month.</h4>
           
         </info-section>

      </div>
    </div>
    </div>
    <div class="section">
      <div class="container">
       
        <h3 class="title">Our Services Includes:</h3>
        <ul>
          <li>Hay fed year round as needed </li>
          <li>Nutrina Pro Force Senior Feed for our retirees needing extra help keeping weight on</li>
          <li>Trimming Every 6 Weeks</li>
          <li>Rotational Deworming 4 times per year</li>
          <li>Access to salt and mineral blocks</li>
          <li>Fly spray in the summer (provided by us) and we use fly masks as well (provided by you)</li>
          <li>Daily hands on inspection of each horse</li>
          <li>TLC is of the utmost importance</li>
          <li>Semi-annual / annual vaccination and dental work are the only extra costs.</li>
          
         
        </ul>
        
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
    mdbIcon
  }
};
</script>
<style>
 li {
  font-size: 1.3em;
 }
</style>
