<template>
<div class="row">
  <article class="col-12">
    <h3>Ideal Facility</h3>
    <p>Webpage for Ideal Facility Critical Services. I simply updated the old layout with Bootstrap and changed a few links.</p>
    <a class="btn btn-primary" href="https://www.ideal-facility.com/" target="_blank" rel="noopener noreferrer">Link >></a>
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
