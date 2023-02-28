<template>

    <div class="p-3 border-bottom rounded my-5">
        <div class="d-flex row">
            <div class="col-12 col-lg-3 col-md-6">
                <img class="img-fluid mt-2" :src="filmSeance.poster" alt="Image film">
            </div>
            <div class="col-12 col-lg-5 col-md-6 mt-2">
                <div class="text-uppercase">
                    {{ filmSeance.title }}
                </div>
                <div class="text-start mt-3 ">
                    <b>
                        Résumer : 
                    </b>
                    {{ filmSeance.overview }}
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <HoraireSeance :listeHoraireProps="filmSeance.seances"></HoraireSeance>
            </div>
        </div>

    </div>

</template>

<script>
import HoraireSeance from './HoraireSeance.vue';

    export default {
        props : {
            filmSeanceProps : {type: Object, default : () => {return {}}}
        },
        data() {
            return {
                filmSeance : this.filmSeanceProps
            }
        },

    components: { HoraireSeance }
}
</script>