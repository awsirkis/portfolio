<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators" v-if="SRC.length > 1">
        <button type="button" data-bs-target="#carouselExampleIndicators" v-for="item in SRC.length" :key="item" :data-bs-slide-to="item - 1" :class="item == 1 ? 'active' : ''"  :aria-current="item == 1" :aria-label="`Slide ${item}`"></button>
    </div>
    <div class="carousel-inner">
        <div :class="index == 0 ? 'carousel-item active' : 'carousel-item'" v-for="(item, index) in SRC" :key="index">
        <img :src="require(`~/assets/${item}`)" class="d-block w-100" alt="image of program">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" v-if="SRC.length > 1 ">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" v-if="SRC.length > 1">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>

<script>
export default {
    props:{
        SRC:{
            type: Array
        }
    }
}
</script>