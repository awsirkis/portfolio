<template>
<div class="row">
  <article class="col-12">
    <h3>Cascade Martial Arts Website</h3>
    <p>A webpage for the martial arts school I train at. Initially intended to be a page to grab potential students, it later grew to include an online store, calendar, blog, and student resources behind role-based and rule-based access control based on rank, position, and other certifications.</p>
    <a class="btn btn-primary" href="https://www.cascademaa.com/" target="_blank" rel="noopener noreferrer">Link >></a>
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
