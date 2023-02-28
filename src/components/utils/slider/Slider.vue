<template>
    <div class="container-fluid" style="position: relative;">
        <div class="container d-flex flex-row flex-nowrap">
            <slot></slot>
        </div>
    
        <div class="zone-slider">
            <div class="d-flex align-content-between h-100">

                    <div @click="prev" class="btn-slider btn-slider-pre align-self-center">
                        &lt;
                    </div>
                    <div @click="next" class="btn-slider btn-slider-aft align-self-center">
                        >
                    </div>
            </div>
        </div>
    </div>

    

</template>

<script>
import SliderElement from './SliderElement.vue';

export default {
    props : {
        typeSliderProps : {type: String, default : ""}
    },
    data() {
        return {
            pos : 0,
            typeSlider: this.typeSliderProps,
            elements : []
        }
    },
    updated() {
        this.elements = this.$children
        this.elements.forEach((element, i) => {
            element.idElement = this.typeSlider+i
        })
        this.pos = 0;
    },
    mounted () {
        this.elements = this.$children
        this.elements.forEach((element, i) => {
            element.idElement = this.typeSlider+i
        })
    },
    methods: {
        next () {
            if (this.pos >= this.elements.length -1){
                this.pos = 0;
            } else {
                this.pos++;
            }
            this.resize()

        },
        prev () {
            this.pos--;
            if (this.pos == -1){
                this.pos = this.elements.length -1;
            }
            this.resize()
        },
        resize () {
            this.elements.forEach((element, i) => {
                element.infoTranslate = "translateX(-"+this.pos * document.getElementById(this.typeSlider+"0").offsetWidth+"px)";
            });
         }
    },
}

</script>

