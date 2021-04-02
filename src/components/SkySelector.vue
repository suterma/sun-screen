<template>
    <div>
        <!-- Root -->
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <md-speed-dial md-direction="bottom">
                    <md-speed-dial-target class="md-primary">
                        <md-icon>flare</md-icon>
                    </md-speed-dial-target>
                    <md-speed-dial-content>
                        <span
                            v-for="lightType in lightTypes"
                            :key="lightType.id"
                        >
                            <md-button
                                class="md-icon-button"
                                @click="selectedLightType = lightType.id"
                            >
                                <md-icon class="md-size-1x">{{
                                    lightType.iconName
                                }}</md-icon>
                            </md-button>
                            <md-tooltip md-direction="right">
                                {{ lightType.caption }}</md-tooltip
                            >
                        </span>
                    </md-speed-dial-content>
                </md-speed-dial>
            </div>
        </div>

        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <md-field>
                    <!-- <label for="intensity">Intensity</label> -->

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
                </md-field>
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

@Options({
    components: {},
})
/** A selector for the color representing a sky condition
 * @devdoc Values taken from https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/
 */
export default class SkySelector extends Vue {
    highNoonSunColor = new Color([255, 255, 251]);
    overcastSkyColor = new Color([201, 226, 255]);
    clearBlueSkyColor = new Color([64, 156, 255]);

    lightTypes = [
        {
            id: 'highNoonSun',
            color: this.highNoonSunColor,
            caption: 'High Noon Sun',
            iconName: 'light_mode',
        },
        {
            id: 'overcastSky',
            color: this.overcastSkyColor,
            caption: 'Overcast Sky',
            iconName: 'wb_cloudy',
        },
        {
            id: 'clearBlueSky',
            color: this.clearBlueSkyColor,
            caption: 'Clear Blue Sky',
            iconName: 'landscape',
        },
    ];

    selectedLightType = 'highNoonSun';
    brightness = 1;

    mounted(): void {
        //Emit the preselected option
        this.lightTypeChanged(this.selectedLightType);
    }

    @Watch('selectedLightType')
    lightTypeChanged(newValue: string): void {
        for (var lightType of this.lightTypes) {
            if (lightType.id === newValue) {
                this.emitColorChange(lightType.color, this.brightness);
            }
        }
    }

    @Watch('brightness')
    intensityChanged(newValue: number): void {
        for (var lightType of this.lightTypes) {
            if (lightType.id === this.selectedLightType) {
                this.emitColorChange(lightType.color, this.brightness);
            }
        }
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
