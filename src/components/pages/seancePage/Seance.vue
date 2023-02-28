<template>

<AfficheFilmsAffiche ></AfficheFilmsAffiche>

<ListeSceance></ListeSceance>

</template>

<script>
    import AfficheFilmsAffiche from "./AfficheFilmsAffiche.vue";
    import ListeSceance from './ListeSeance.vue';

    export default {

    components: { AfficheFilmsAffiche,
        ListeSceance }
}
</script>

<style>
</style>