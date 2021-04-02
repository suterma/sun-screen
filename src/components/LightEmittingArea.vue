<template>
    <div>
        <div
            class="light-emitting-area"
            :style="{
                'background-color': `rgb(${color.getRed()}, ${color.getGreen()}, ${color.getBlue()})`,
            }"
        ></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Color from 'ts-color-class';
import AnyBulb from '@/components/AnyBulb.vue'; // @ is an alias to /src

@Component({
    components: {},
})
export default class LightEmittingArea extends Vue {
    @Prop({ required: true, type: Color, default: new Color('black') })
    color!: Color;
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
