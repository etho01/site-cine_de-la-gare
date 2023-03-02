<template>
    <div ref-slider="filmsAffiche" class="slider-element">
        <slot></slot>
    </div>
    

</template>

<script>
    
    export default {
        props : {
        typeSliderProps : {type: String, default : ""}
    },
        data() {
            return {
                typeSlider : this.typeSliderProps
            }
        },

    }

</script>
