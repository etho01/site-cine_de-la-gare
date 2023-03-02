<template>
    <section class="mt-5">

        <div class="container p-5">

            <div class="title mb-3">
                Connexion
            </div>
            <div class="container-login">

                <div class="bg-color-light-red p-2 mb-3 rounded" v-if="haveError">
                    {{ error }}
                </div>

                <label for="email"  class="form-label">Email</label>
                <input type="text" id="email" v-model="email" class="form-control mb-3" placeholder="Email">

                <label for="password"  class="form-label">Mot de passe</label>
                <input type="text" id="password" v-model="password" class="form-control" placeholder="Mot de passe">

                <button type="button" @click="login()" class="btn btn-primary mt-3">
                    Se connecter
                </button>

                <div class="text-align-center mt-3">
                    Vous n'avez pas de compte ?<br>
                    <router-link to="/register" >
                        inscrivez-vous
                    </router-link>
                </div>
            </div>

            
        </div>

    </section>
</template>

<script>
    import userObj from './../../../store/userStore/user.js';

    import Axios from '../../../utils/caller';

    export default {
        data() {
            return {
                user : userObj,
                error : '',
                email : "",
                password : ''
            }
        },

        methods : {
            login() {
                Axios.get('/user/login'+
                '?email='+this.email+'&password='+this.password).
                then((response) =>{
                    this.user.login(response.data)
                    this.$router.push('/') 
                }, (response) => {
                    if (response.request.status == 403){
                        this.error = "Erreur, email ou mot de passe incorect";
                    } else {
                        this.error = "Erreur : veuillez réessayer plus tard.";
                    }
                })
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