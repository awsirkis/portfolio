<template>
<div class="program row col-12">
    <img class="program-img col-12 col-md-3 " :src="src" >
    <div class="program-text col-12 col-md-9">
        <h3 class="program-title">{{TITLE}}</h3>
        <p class="program-descrip">{{DESCRIPTION}}</p>
        <nuxt-link :to="LNK" class="btn btn-primary">Link >></nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    props:{
        SRC:{
            type: Array,
            default:null
        },
        TITLE:{
            type: String
        },
        DESCRIPTION:{
            type: String
        },
        LNK:{
            type: String,
            default:'/'
        }
    },
    computed:{
        src: function(){
            try {
				var m = require('~/assets/' + this.SRC);
			} catch (ex) {
				var m = require('~/assets/download.png');
			}
			return m.toString();
        }
    }
}
</script>

<style>
.program{
    margin: 2.5%; 
    background-color: grey;
}
.program-title{
    border-bottom: 3px solid lightgrey; 
    padding: 2.5%;
}

.program-descrip{
    width: 100%; 
}

.program-img {
    margin: 1% 0%;
    max-height: 100%;
    min-height: auto;
}
</style>