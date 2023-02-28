<template>
<div class=" bg-color-light-grey">
    <div class="container bg-color-light-grey p-3">
        <div class="title">
            Demander un film
        </div>
        <div class="m-3 d-flex row" v-if="user.state.isLog">
            <div class=" col-12 col-md-3">
                Nom du film
            </div>
            <div class="col-12 col-md-6">
                <input type="text" v-model="filtre" class="form-control" placeholder="Nom du film">
            </div>
            <div class="col-12 col-md-3">
                <button class="btn btn-primary mt-3 mt-md-0" @click="getFilm()">
                    Rechercher un film
                </button>
            </div>

        </div>
        <div class="title-section" v-else>
            Veuillez vous 
            <router-link to="/login">connecter</router-link>
             pour demander un film
        </div>
    </div>
</div>
<div class="container mt-3" v-if="user.state.isLog">  
    <div v-for="film in rep">
        <div class="p-5">
            <div class="border-bottom ">


                <div class="d-flex row bg-hover-color-light-grey rounded"  @click.prevent="toggleConfirDemande(film.id)" style="cursor: pointer;">
                    <div class="col-12 col-md-3 mb-3">
                        <img :src="film.poster" class="img-fluid" alt="">
                    </div>

                    <div class="col-12 col-md-9">
                        <div class="">
                            {{ film.title }}
                        </div>
                        <div class="text-align-start">
                            {{ film.overview }}
                        </div>
                    </div>

                </div>
                <div class="p-2" v-if="idSelect == film.id">
                    <div class="bg-color-light-red p-2 mb-3 rounded" v-if="haveError">
                        {{ error }}
                    </div>
                    <div class="bg-color-light-green p-2 mb-3 rounded" v-if="haveSuccess">
                        {{ success }}
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-primary" @click="demandeFilm(film.id)">
                            Demander le film : {{ film.title }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import userObj from '../../../store/userStore/user.js';
    export default {
        data() {
            return {
                user : userObj,
                filtre : '',
                idSelect : 0,
                rep : [],
                error : "",
                success: ""
            }
        },
        methods : {
            getFilm (){
                this.$http.get(this.urlServApi+'/searchMovie?nom_film='+this.filtre)
                .then((response) =>{
                    console.log(response.data);
                    this.rep = response.data
                }, (response) => {
                    console.log(response)
                })

            },
            toggleConfirDemande(id){
                this.error = ""
                this.success = ""
                if (this.idSelect == id){
                    this.idSelect = 0
                } else {
                    this.idSelect = id
                }
            },
            demandeFilm(id) {
                this.success = ""
                this.$http.get(this.urlServApi+'/'+this.user.state.api_token+'/demande?id_film='+id)
                .then((response) =>{
                    this.success = "Demande envoyer"
                }, (response) => {
                    if (response.status == 403){
                        if (response.data.message = "demande already exist"){
                            this.error = "Erreur, vous avez deja fait une demande pour ce film"
                        }
                    }
                })
            }
        },
        computed : {
            haveError() {
                return this.error != "";
            },
            haveSuccess() {
                return this.success != "";
            }
        }
    }

</script>