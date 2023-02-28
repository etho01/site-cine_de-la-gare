<template>
    <div class="seance" >
        <div class="title-section">
            Séances
        </div>
        <div class="rounded bg-color-blue bg-color-c-blue p-3 text-color-light-grey my-3" v-for="listeHoraire in updateFormatInfos">
            {{ listeHoraire.dateSeance }}
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            listeHoraireProps : {type: Array, default : () => {return []}}
        },
        data() {
            return {
                listeHoraires : this.listeHoraireProps
            }
        },

        computed: {
            haveSeance() {
                return this.listeHoraires.length != 0
            },
            updateFormatInfos() {
                var liste = [];
                var dateVar;
                var dateString;
                this.listeHoraires.forEach(element => {
                    dateVar = new Date(element.date_seance);
                    dateString = dateVar.toLocaleString()
                    liste.push({
                        dateSeance : dateString
                    })
                });
                return liste
            }
        }
    }
</script>

<style>

.seance{
    max-height: 350px;
    overflow: auto;
}

</style>