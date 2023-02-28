<template>
    <div :id="idElement" :style="{ transform:  infoTranslate}" class="slider-element">
        <slot></slot>
    </div>
    

</template>

<script>
    
    export default {
        data() {
            return {
                infoTranslate: "translateX(-0px)",
                idElement: ""
            }
        },

    }

</script>
