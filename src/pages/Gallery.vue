<template>
  <div class="lightBG">
   <div class="page-header page-header-small heroGalleryBackgroundImage globalHeaderMobile" style="background-image: url('img/gallery.jpg');"> 
    <div class="container mt-5">
      <div class="row d-flex justify-content-left mt-5 pt-5">
        <div class="col-md-6 col-sm-12 align-self-center" style="text-align: left">
          <h1 class="smallerMobileH1">Check Out Our Farm</h1>
           <hr style="background-color: white !important">
           <h3>We take pride in our services and our ability to maintain a healthy environment for your horse.</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
       <gallery :images="images" :index="index" @close="index = null"></gallery>
       <div class="row mt-5 mb-5">
    <div
      class="image col-lg-4 col-md-6 col-sm-12"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '600px', height: '300px' }"
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
          'https://cdn.pixabay.com/photo/2016/01/19/18/00/horses-1150017_1280.jpg',
          'https://cdn.pixabay.com/photo/2017/08/02/15/15/horse-2572051_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/05/25/13/55/horses-1414889_1280.jpg',
          'https://cdn.pixabay.com/photo/2018/10/14/20/16/horses-3747374_1280.jpg',
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
    //console.log('fire');
  }
};
</script>
<style>
  a.close {
    color: white !important;
  }
  a.next {
    color: white !important;
  }
  a.prev {
    color: white !important;
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
    opacity: .5;
    transition: 0.1s;
  }



  @media only screen and (max-width: 989px) {
  .carousel-height {
    height: 350px;
   }
 }

</style>
