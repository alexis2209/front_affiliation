<template>
    <!-- .block-slideshow -->
    <div :class="['block-slideshow',`block-slideshow--layout--with-departments`,'block']">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 d-none d-lg-block" />
                <div class="col-lg-9">
                    <div class="block-slideshow__body">
                      <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <CarouselSlide v-for="(slide, index) in slides" :key="index">
                              <nuxt-link class="block-slideshow__slide" :to="'/'">
                                    <div class="block-slideshow__slide-image block-slideshow__slide-image--desktop" :style="{ backgroundImage: `url(${slide.imageClassic})` }" />
                                    <div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" :style="{ backgroundImage: `url(${slide.imageClassic})`  }" />
                                    <div class="block-slideshow__slide-content">
                                        <!-- eslint-disable-next-line vue/no-v-html -->
                                        <div class="block-slideshow__slide-title" v-html="slide.title" />
                                        <!-- eslint-disable-next-line vue/no-v-html -->
                                        <div class="block-slideshow__slide-text" v-html="slide.text" />
                                        <div class="block-slideshow__slide-button">
                                            <span class="btn btn-primary btn-lg">Shop Now</span>
                                        </div>
                                    </div>
                              </nuxt-link>
                            </CarouselSlide>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- .block-slideshow / end -->
</template>

<script>

export default {
  props: [
    'slides'
  ],
}
</script>
