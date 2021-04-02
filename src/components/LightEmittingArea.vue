<template>
    <div>
        <!-- background: rgb(2,0,36);
background: linear-gradient(110deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 46%); -->

        <!-- 'background-color': `rgb(${color.getRed()}, ${color.getGreen()}, ${color.getBlue()})`, -->

        <div
            class="light-emitting-area"
            :style="{
                background: `linear-gradient(90deg, rgb(${color.getRed()}, ${color.getGreen()}, ${color.getBlue()}) 40%, rgb(${colorSecondary.getRed()}, ${colorSecondary.getGreen()}, ${colorSecondary.getBlue()}) 60%)`,
            }"
        ></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Color from 'ts-color-class';

@Component({
    components: {},
})
export default class LightEmittingArea extends Vue {
    @Prop({ required: true, type: Color, default: new Color('black') })
    color!: Color;

    @Prop({ required: true, type: Color, default: new Color('white') })
    colorSecondary!: Color;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-emitting-area {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* height: 100vh; */
    /* background: rgba(255, 0, 0, 0.5); */
    content: 'AFTER';
}
</style>
