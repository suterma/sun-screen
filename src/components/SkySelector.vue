<template>
    <div>
        <!-- Root -->

        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <ColorDial
                    dialClass="md-bottom-left"
                    direction="top"
                    targetButtonName="flare"
                    :annotatedColors="lightTypes"
                    @changed="lightTypeChanged"
                />
                <!-- <md-field>
                    <input
                        name="Brightness"
                        id="brightness"
                        class="width-100"
                        type="range"
                        v-model.number="brightness"
                        min="0"
                        max="1"
                        step="0.01"
                    />
                </md-field> -->
            </div>
        </div>
    </div>
    <!-- Root -->
</template>

<script lang="ts">
import Vue from 'vue';
import Options from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import Color from 'ts-color-class';
import ColorDial from '@/components/ColorDial.vue'; // @ is an alias to /src
import { AnnotatedColor } from '../code/AnnotatedColor';

@Options({
    components: { ColorDial },
})
/** A selector for the color representing a sky condition
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

    selectedLightType = this.lightTypes[0];
    brightness = 1;

    lightTypeChanged(newVal: AnnotatedColor): void {
        this.selectedLightType = newVal;
        this.emitColorChange(newVal.color, this.brightness);
    }

    @Watch('brightness')
    intensityChanged(newValue: number): void {
        this.emitColorChange(this.selectedLightType.color, this.brightness);
    }

    emitColorChange(color: Color, brightness: number): void {
        var dimmedColor = new Color(
            color.getRed() * brightness,
            color.getGreen() * brightness,
            color.getBlue() * brightness
        );
        console.debug('SkySelector.vue::emitColorChange->emit', dimmedColor);
        this.$emit('changed', dimmedColor);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/** pale tooltips */
.md-tooltip.md-theme-default {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.54);
}

/** Button tooltips more vertically centered */
.md-tooltip.md-tooltip-left,
.md-tooltip.md-tooltip-right {
    padding-top: 4px;
}
</style>
