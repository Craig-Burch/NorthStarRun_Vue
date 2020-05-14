<template>
  <div>
   <div class="page-header" >

    <div class="section" id="carousel"  style="background-size: cover; background-image: url('https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_1280.jpg')">
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
  </div>


  </div>

  <div class="container">
      <div class="row">
          <div class="col-md-4 border">
              <div class="image-container galleryImages">
                 <img src ="https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg">
              </div>
          </div>
          <div class="col-md-4 border">
              <div class="image-container galleryImages" >
                <img src ="https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg">
              </div>
          </div>
          <div class="col-md-4 border">     
              <div class="image-container galleryImages">
                <img  src ="https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg">
              </div>
          </div>
       </div>

       <div class="row">
          <div class="col-md-4 border">
              <div class="image-container galleryImages">
                 <img src ="https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg">
              </div>
          </div>
          <div class="col-md-4 border">
              <div class="image-container galleryImages" >
                <img src ="https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_1280.jpg">
              </div>
          </div>
          <div class="col-md-4 border">     
              <div class="image-container galleryImages">
                <img  src ="https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg">
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
  name: 'portfolio',
  bodyClass: 'portfolio-page',
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
  .galleryImages img {
    height: 400px;
    object-fit: cover;
  }
  .galleryImages:hover {
     cursor: pointer;
  }
  .border {
    border: 1px solid white;
  }


</style>
