<template>
    <div
        class="light-emitting-area"
        :style="{
            background: `linear-gradient(90deg, 
            ${selectedSkyType.color.toString()} 
            ${lowerInflectionBoundary}%, 
            ${selectedLampType.color.toString()} 
            ${upperInflectionBoundary}%
            )`,
        }"
    ></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AnnotatedColor } from '@/code/AnnotatedColor';

@Component({
    components: {},
})
/** An area that emits the light according to the selected lighting parameters
 * @remarks Uses the Sky and Lamp type, plus the inflection from the vuex store.
 */
export default class LightEmittingArea extends Vue {
    /** The width of the inflection area, in percent */
    inflectionWidth = 5;

    /** Returns the lower boundary of the inflection area */
    get lowerInflectionBoundary(): number {
        var lowerSplitPosition = Math.max(
            0,
            Number(this.gradationInflectionPoint) - Number(this.inflectionWidth)
        );
        //console.debug('lowerSplitPosition', lowerSplitPosition);
        return lowerSplitPosition;
    }
    /** Returns the upper boundary of the inflection area */
    get upperInflectionBoundary(): number {
        var upperSplitPosition = Math.min(
            100,
            Number(this.gradationInflectionPoint) + Number(this.inflectionWidth)
        );
        //console.debug('upperSplitPosition', upperSplitPosition);
        return upperSplitPosition;
    }

    get selectedLampType(): AnnotatedColor {
        return this.$store.getters.selectedLampType;
    }

    get selectedSkyType(): AnnotatedColor {
        return this.$store.getters.selectedSkyType;
    }

    get gradationInflectionPoint(): number {
        return this.$store.getters.gradationInflectionPoint;
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
