<template>

<section class="">
    <div class="container" v-if="load">
        <div class="title my-3">
            Liste des séances
            <svg style="height: 40px; cursor: pointer;" @click.prevent="toggleFiltre()" title="Filtres" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>

        </div>
        <div class="bg-color-light-grey rounded p-3" v-show="filtreIsShow">
            <div class="title-section py-3">
                Filtre 
            </div >
            <div class="d-flex row">
                <div class="col-12">
                    <label for="filmName">Nom du film</label>
                    <input type="text" v-model="recherche" id="filmName" class="form-control" placeholder="Nom du film">
                </div>
            </div>
        </div>
        <FilmSeance v-for="listeFilmSeance in listesFilmSeanceWithFiltre" :key="listeFilmSeance.id" :filmSeanceProps="listeFilmSeance"></FilmSeance>
    </div>
    <div v-else style="height: 260px;">
        <Loader></Loader>
    </div>
</section>

</template>

<script>
import FilmSeance from './filmSceance/FilmSeance.vue';
import Loader from '../../utils/loader/Loader.vue';

import Axios from '../../../utils/caller';
    
    export default {
        mounted() {
            this.load = false;
            Axios.get('/seances/getByFilm').
                then((response) =>{
                    this.listesFilmSeance = response.data;
                    this.load = true;
                }, (response) => {
                })
        },
        data() {
            return {
                listesFilmSeance : [],
                filtreShow : false,
                recherche : '',
                load : true
            }
        },
        methods: {
            toggleFiltre(){
                this.filtreShow = !this.filtreShow
            },

        },
        computed: {
            filtreIsShow() {
                return this.filtreShow
            },
            listesFilmSeanceWithFiltre (){
                return this.listesFilmSeance.filter((element) => {
                        name = element.title.toUpperCase();
                        
                        return name.includes(this.recherche.toUpperCase())
                })
            }
            
        },
    components: { FilmSeance, Loader }
}
</script>