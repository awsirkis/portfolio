<template>
<div class="row">
  <article class="col-12">
    <h3>Ideal Facility Docs Website</h3>
    <p>A project I was approached with in March of 2021 for Ideal Critical Facility Services. 
        The project was to make a system able to store images and inspection forms in a secure manner for remote access. Email me for a demo account from my <nuxt-link to="/contact">contact page</nuxt-link>.</p>
    <a class="btn btn-primary" href="http://docdemo.herokuapp.com" target="_blank" rel="noopener noreferrer">Link >></a>
  </article>
  <carousel :SRC="['download.png','download.png']" />
</div>
</template>

<script>
import pi from '~/components/project-item.vue'
import carousel from '~/components/carousel.vue'
export default {
  components:{
    pi,
    carousel
  },
  head(){
      return{
          title: 'Doc Demo | Adam Sirkis'
      }
  }
}
</script>
