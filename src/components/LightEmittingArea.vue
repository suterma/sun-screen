<template>
    <div
        class="light-emitting-area"
        :style="{
            background: `linear-gradient(90deg, 
            rgb(${color.getRed()}, ${color.getGreen()}, ${color.getBlue()}) 
            ${lowerSplitPosition}%, 
            rgb(${colorSecondary.getRed()}, ${colorSecondary.getGreen()}, ${colorSecondary.getBlue()}) 
            ${upperSplitPosition}%
            )`,
        }"
    ></div>
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

    @Prop({ required: false, type: Number, default: 50 })
    splitPosition!: number;

    /** The width of the split area */
    splitWidth = 10;

    get lowerSplitPosition(): number {
        return this.splitPosition - this.splitWidth;
    }
    get upperSplitPosition(): number {
        return this.splitPosition + this.splitWidth;
    }
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
