<template>

<section  class="bg-color-light-grey pb-3 overflow-hidden" v-show="!isEmpty">
    <div class="container film-affiche-container pt-3" style="position: relative;">
        <div class="title mb-3">
            Films à l'affiche
        </div>

    </div>
            <Slider typeSliderProps="filmsAffiche" v-if="load">
                <SliderElement class="col-12 col-md-3 col-lg-2" v-for="filmAffiche in filmsAffiche">
                    <div class="card">

                        <img class="img-fluid" :src="filmAffiche.poster" alt="">
                            <div class="card-title m-1 fs-1">
                                {{ filmAffiche.title }}
                            </div>
                    </div>
                </SliderElement>

            </Slider>
            <div v-else style="height: 260px;">
                <Loader></Loader>
            </div>

</section>
</template>
<script>
import Loader from '../../utils/loader/Loader.vue';
import SliderElement from '../../utils/slider/SliderElement.vue';
import Slider from './../../utils/slider/Slider.vue';

import Axios from '../../../utils/caller';



export default {
    props : {
        filmsAfficheProps : {type: Array, default () {return []}}
    },
    data() {
        return {
            filmsAffiche : this.filmsAfficheProps,
            load : true
        }
    },
    mounted() {
        this.load = false;
        console.log(Axios)
        Axios.get('/films/getAffiche').
                then((response) =>{
                    this.filmsAffiche = response.data;
                    this.load = true;
                })
                .catch ((response) => {
                    console.log('erreur', response);
                })
    },
    components: {
    Slider,
    SliderElement,
    Loader
},
    computed : {
        isEmpty(){
            return this.filmsAffiche.length == 0;
        } ,
        filmsAfficheComputed (){
            return this.filmsAfficheProps
        }
    }

}
</script>