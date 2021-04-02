<template>
    <div>
        <!-- Root -->
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <md-speed-dial md-direction="bottom">
                    <md-speed-dial-target class="md-primary">
                        <md-icon>light_mode</md-icon>
                    </md-speed-dial-target>

                    <md-speed-dial-content>
                        <md-button
                            class="md-icon-button"
                            title="High Noon Sun"
                            @click="selectedLightType = '1'"
                        >
                            <md-icon class="md-size-1x">flare</md-icon>
                        </md-button>
                        <!-- <md-button
                            class="md-icon-button"
                            title="Direct Sunlight"
                            @click="selectedLightType = '2'"
                        >
                            <md-icon class="md-size-1x">wb_sunny</md-icon>
                        </md-button> -->
                        <md-button
                            class="md-icon-button"
                            title="Overcast Sky"
                            @click="selectedLightType = '3'"
                        >
                            <md-icon class="md-size-1x">wb_cloudy</md-icon>
                        </md-button>
                        <md-button
                            class="md-icon-button"
                            title="Clear Blue Sky"
                            @click="selectedLightType = '4'"
                        >
                            <md-icon class="md-size-1x">landscape</md-icon>
                        </md-button>
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
    directSunlightColor = new Color([255, 255, 255]);
    overcastSkyColor = new Color([201, 226, 255]);
    clearBlueSkyColor = new Color([64, 156, 255]);

    lightTypes = [
        { id: '1', color: this.highNoonSunColor },
        { id: '2', color: this.directSunlightColor },
        { id: '3', color: this.overcastSkyColor },
        { id: '4', color: this.clearBlueSkyColor },
    ];

    selectedLightType = '1';
    brightness = 1;

    mounted(): void {
        //Emit the preselected option
        this.lightTypeChanged(this.selectedLightType);
    }

    selectedHighNoonSun(): void {
        this.selectedLightType = '1';
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
/* Use textual icon buttons */
/* .md-icon-button {
    border-radius: 10px;
    min-width: 160px;
    min-height: 36px;
} */
</style>
