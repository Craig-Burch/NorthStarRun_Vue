<template>
  <div class="lightBG">
   <div class="page-header page-header-small heroGalleryBackgroundImage" style="background-image: url('img/Light.jpeg');"> 
    <div class="container mt-5">
      <div class="row d-flex justify-content-center mt-5">
        <div class="col-4 align-self-center" style="text-align: left">
          <h1>Check Out Our Farm</h1>
          <h3>We take pride in our services and our ability to maintain a healthy enviornment for your horse.</h3>
        </div>
        <div class="col-8">
          <img    style=""
                  src="img/GalleryAsset.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid "
                  height=""
                  width="800px"
                />
        </div>
      </div>
    </div>
  </div>
    <!-- <div class="section" id="carousel"  style="background-size: cover; background-image: url('https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_1280.jpg')">
    <div class="container">
      <div class="title">
        <h4></h4>
      </div>
      <div class="row justify-content-center img-raised mt-5" >
        <div class="col-12 mt-5 mb-5">
          <el-carousel height="500px">
            <el-carousel-item>
              <img class="d-block" src="https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Nature, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Somewhere Beyond, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Yellowstone National Park, United States</h5>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div> -->


  

  <div class="container">
    <!-- most likely use this is as mobile version -->
       <!-- <div class="row mt-5 mb-4">
          <div class="col-md-4">
              <div class="image-container img-raised galleryImages">
                 <img src ="https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg">
              </div>
          </div>
          <div class="col-md-4">
              <div class="image-container img-raised galleryImages" >
                <img src ="https://cdn.pixabay.com/photo/2017/01/16/19/17/horses-1984977_1280.jpg">
              </div>
          </div>
          <div class="col-md-4">     
              <div class="image-container img-raised galleryImages">
                <img  src ="https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg">
              </div>
          </div>
       </div>

       <div class="row mb-4">
          <div class="col-md-4">
              <div class="image-container img-raised galleryImages">
                 <img src ="https://cdn.pixabay.com/photo/2013/10/17/20/59/horse-197199_1280.jpg">
              </div>
          </div>
          <div class="col-md-4">
              <div class="image-container img-raised galleryImages" >
                <img src ="https://cdn.pixabay.com/photo/2012/10/06/22/18/horse-60153_1280.jpg">
              </div>
          </div>
          <div class="col-md-4">     
              <div class="image-container img-raised galleryImages">
                <img  src ="https://cdn.pixabay.com/photo/2017/08/02/15/15/horse-2572051_1280.jpg">
              </div>
          </div>
       </div>

       <div class="row  mb-5">
          <div class="col-md-4">
              <div class="image-container img-raised galleryImages">
                 <img src ="https://cdn.pixabay.com/photo/2016/05/25/13/55/horses-1414889_1280.jpg">
              </div>
          </div>
          <div class="col-md-4">
              <div class="image-container img-raised galleryImages" >
                <img src ="https://cdn.pixabay.com/photo/2019/10/23/16/23/horse-4572080_1280.jpg">
              </div>
          </div>
          <div class="col-md-4">     
              <div class="image-container img-raised galleryImages">
                <img  src ="https://cdn.pixabay.com/photo/2015/08/24/19/55/horse-905534_1280.jpg">
              </div>
          </div>
       </div>  -->

       <gallery :images="images" :index="index" @close="index = null"></gallery>
       <div class="row mt-5 mb-5 border">
    <div
      class="image col-4"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '300px' }"
    >
      </div>
    </div>
    </div> 


</div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { Carousel, CarouselItem } from 'element-ui';
import VueGallery from 'vue-gallery';
export default {

  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    'gallery': VueGallery
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
       images: [
          'https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg',
          'https://cdn.pixabay.com/photo/2017/01/16/19/17/horses-1984977_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg',
          'https://cdn.pixabay.com/photo/2017/08/02/15/15/horse-2572051_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/05/25/13/55/horses-1414889_1280.jpg',
          'https://cdn.pixabay.com/photo/2012/10/06/22/18/horse-60153_1280.jpg',
          'https://cdn.pixabay.com/photo/2013/10/17/20/59/horse-197199_1280.jpg',
          'https://cdn.pixabay.com/photo/2019/10/23/16/23/horse-4572080_1280.jpg',
          'https://cdn.pixabay.com/photo/2015/08/24/19/55/horse-905534_1280.jpg',
        ],
        index: null
    };
  },
  methods: {
    galleryModal() {

    }
  },
  created() {
    console.log('fire');
  }
};
</script>
<style>
  .galleryImgBorder {
    border: 1px solid #2a425e;
  }

  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
  }
  .image:hover {
    cursor: pointer;
    opacity: .8;
  }

  a.close {
    color: white !important;
  }

</style>
