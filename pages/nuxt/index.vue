<template>
<div class="row">
  <article class="col-12">
    <h3>NuxtJS Web Projects</h3>
    <p>What all of my recent projects have been in.</p>
    <div class="container-fluid">
      <pi SRC="cmaa_dragon.png" TITLE="Cascade Martial Arts Academy Website (2019 - )" DESCRIPTION="Main Page for a martial arts dojo. Technologies Featured: Databse Querying (PostgreSQL), Email (nodemailer), Blogging (marked), Authentication (custom shcheme),Role-based Access Control, Rule-Based Access Control, Calendar, Online Store" LNK="/nuxt/cmaa" />
      <pi SRC="icon.png" TITLE="Doc Storage Website (2021)" DESCRIPTION="Document Storage page originally developed for Ideal Facility. Technologies Featured: Database Querying (Sequelize/PostgreSQL), Email (nodemailer), Authentication, Role-based Access Control" LNK="/nuxt/docs" />
      <pi SRC="icon.png" TITLE="Ideal Facility Main Page" DESCRIPTION="Main Page for Ideal Critical Facility Services. I was asked to update the information and layout." LNK="/nuxt/if" />
      <pi SRC="" TITLE="Straight to the Point Archery (Class 2019)" DESCRIPTION="Page created for class during web developer certification." LNK="https://awsirkis.github.io/archery/" />
      <pi SRC="" TITLE="Adopt-a-Dog (Class 2019)" DESCRIPTION="Page created for class during web developer certification." LNK="https://awsirkis.github.io/adopt-a-dog-spring2019/" />
    </div>
  </article>
</div>
</template>

<script>
import pi from '~/components/project-item.vue'
export default {
  components:{
    pi
  },
  head(){
      return{
          title: 'NuxtJS Applications | Adam Sirkis'
      }
  }
}
</script>
