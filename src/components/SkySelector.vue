<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item">
            <ColorDial
                dialClass="md-bottom-left"
                direction="top"
                targetButtonName="flare"
                :annotatedColors="lightTypes"
                @changed="lightTypeChanged"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Options from 'vue-class-component';
import Color from 'ts-color-class';
import ColorDial from '@/components/ColorDial.vue'; // @ is an alias to /src
import { AnnotatedColor } from '../code/AnnotatedColor';

@Options({
    components: { ColorDial },
})
/** A selector for the color representing a sky condition
 * @remarks Emits an Annotated color on change
 * @devdoc Values taken from https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/
 */
export default class SkySelector extends Vue {
    highNoonSunColor = new Color([255, 255, 251]);
    overcastSkyColor = new Color([201, 226, 255]);
    clearBlueSkyColor = new Color([64, 156, 255]);

    lightTypes = [
        new AnnotatedColor(
            'highNoonSun',
            'High Noon Sun',
            this.highNoonSunColor,
            'light_mode'
        ),
        new AnnotatedColor(
            'overcastSky',
            'Overcast Sky',
            this.overcastSkyColor,
            'wb_cloudy'
        ),
        new AnnotatedColor(
            'clearBlueSky',
            'Clear Blue Sky',
            this.clearBlueSkyColor,
            'landscape'
        ),
    ];

    mounted() {
        //emit the default selection
        this.lightTypeChanged(this.selectedLightType);
    }

    selectedLightType: AnnotatedColor = this.lightTypes[0];

    lightTypeChanged(newVal: AnnotatedColor): void {
        this.selectedLightType = newVal;
        this.$emit('changed', newVal);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
