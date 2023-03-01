<template>
    <section class="mt-5">

        <div class="container p-5">

            <div class="title mb-3" v-if="!user.state.isLog">
                Inscription
            </div>
            <div class="title mb-3"  v-else>
                Modification
            </div>
            <div class="container-login">

                <div class="bg-color-light-red p-2 mb-3 rounded" v-if="haveError">
                    {{ error }}
                </div>

                <div class="d-flex row mb-3">
                    <div class="col-12 col-md-6">
                        <label for="prenom" class="form-label">Prenom</label>
                        <input type="text" v-model="prenom" id="prenom" class="form-control" placeholder="Prenom">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="nom">Nom</label>
                        <input type="text" v-model="nom" id="nom" class="form-control" placeholder="Nom">
                    </div>
                </div>

                <label for="email"  class="form-label">Email</label>
                <input type="text" v-model="email" id="email" class="form-control mb-3" placeholder="Email">

                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" id="password" v-model="password" class="form-control" placeholder="Mot de passe">

                <div class="title mb-3" v-if="!user.state.isLog">
                    <button type="button" @click="register()" class="btn btn-primary mt-3">
                        S'inscrire
                    </button>
                </div>
                <div class="title mb-3"  v-else>
                    <div>
                        <button type="button" @click="deleteUser()" class="btn btn-danger mt-3">
                            Supprimer le compte
                        </button>
                        <button type="button" @click="update()" class="btn btn-primary mt-3 ml-2">
                            Modifier
                        </button>
                        <button type="button" @click="disconect()" class="btn btn-primary mt-3 ml-2">
                            Se deconecter
                        </button>
                    </div>
                </div>

            </div>

            
        </div>

    </section>
</template>

<script>
    import userObj from '../../../store/userStore/user.js';
    import Axios from '../../../utils/caller';

    export default {
        data() {
            return {
                user : userObj,
                error : '',
                email : userObj.state.email,
                password : '',
                nom : userObj.state.nom,
                prenom: userObj.state.prenom,
            }
        },

        methods : {
            register() {
                if (!this.validate()){
                    return "";
                }

                Axios.get('/user/register'+
                '?email='+this.email+'&password='+this.password
                +'&nom='+this.nom+'&prenom='+this.prenom).
                then((response) =>{
                    this.user.login(response.data)
                    this.$router.push('/') 
                }, (response) => {
                    if (response.request.status == 403){
                        if (response.response.data.message == 'user already exist'){
                            this.error = 'Le mail est déja pris'
                        }
                    } else {
                        this.error = "Erreur : veuillez réessayer plus tard.";
                    }
                })
            },
            update() {
                if (!this.validate()){
                    return "";
                }

                this.$http.get('/user/'+this.user.state.api_token+'/update'+
                '?email='+this.email+'&password='+this.password
                +'&nom='+this.nom+'&prenom='+this.prenom).
                then((response) =>{
                    this.user.login(response.data)
                    this.$router.push('/') 
                }, (response) => {
                    if (response.request.status == 403){
                        if (response.response.data.message == 'user already exist'){
                            this.error = 'Le mail est déja pris'
                        }
                    } else {
                        this.error = "Erreur : veuillez réessayer plus tard.";
                    }
                })
            },
            deleteUser (){
                this.$http.get('/user/'+this.user.state.api_token+'/delete').
                then((response) =>{
                    this.disconect();
                }, (response) => {
                    if (response.request.status == 403){
                        if (response.response.data.message == 'user already exist'){
                            this.error = 'Le mail est déja pris'
                        }
                    } else {
                        this.error = "Erreur : veuillez réessayer plus tard.";
                    }
                })
            },
            disconect(){
                this.user.disconect();
                this.$router.push('/') 
            },
            validate(){
                if (this.email == ""){
                    this.error = "Le mail ne doit pas etre null"
                    return false;
                }
                if (this.password == ""){
                    this.error = "Le mot de passe ne doit pas etre null"
                    return false;
                }
                if (this.nom == ""){
                    this.error = "Le nom ne doit pas etre null"
                    return false;
                }
                if (this.prenom == ''){
                    this.error = "Le prenom ne doit pas etre null"
                    return false;
                }

                return true;
            }
        },
        computed : {
            haveError (){
                return this.error != "";
            }
        }
    }
</script>

<style>


    .container-login{
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
    }
</style>