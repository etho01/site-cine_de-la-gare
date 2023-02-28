<template>
    <header>
        <nav class="navbar navbar-light navbar-expand-lg">
            <div class="container d-flex justify-content-between">
                <img class="rounded img-fluid mh-100 mr-3 pl-lg-3" src="/src/assets/image_cinema.jpg" alt="Image cinema" style="height: 90px;">
                <span class="fs-1"> Cinema de la Gare</span>
                <button class="navbar-toggler collapsed" type="button" aria-label="Toggle navigation" aria-expanded="false" @click="toggleNavbar()"
                 aria-controls="nav-collapse" style="overflow-anchor: none;">
                    s
                </button>
                <div class="navbar-collapse collapse" :class="{ show : extented }" id="nav-collapse">
                    <!-- Right aligned nav items -->
                    <ul class="navbar-nav ml-auto">
                        <router-link to="/" class="nav-link nav-item">
                            Séance
                        </router-link>
                        <router-link to="/DemandeFilm" class="nav-link nav-item">
                            Demande de films
                        </router-link>
                        <router-link to="/login" class="nav-link nav-item" v-if="!user.isLog">
                            Connexion
                        </router-link>
                        <router-link to="/user" class="nav-link nav-item" v-else>
                            {{ user.nom+ ' '+user.prenom }}
                        </router-link>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

import userObj from './../../store/userStore/user';

export default {
    data : function () {
        return {
            user: userObj.state,
            extented : false 
        }
    },
    methods : {
        toggleNavbar (){
            this.extented = !this.extented
        }
    },
    computed : {
        NavbarIsShow(){
            return this.extented
        }
    }
}

</script>

<style lang="scss">

   
</style>