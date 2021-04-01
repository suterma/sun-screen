<template>
    <div>
        <!-- Root -->
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <md-radio v-model="selectedLightType" value="1"
                    >High Noon Sun</md-radio
                >
                <md-radio v-model="selectedLightType" value="2"
                    >Direct Sunlight</md-radio
                >
                <md-radio v-model="selectedLightType" value="3"
                    >Overcast Sky</md-radio
                >
                <md-radio v-model="selectedLightType" value="4"
                    >Clear Blue Sky</md-radio
                >
                <md-divider></md-divider>
                <md-radio v-model="selectedLightType" value="5"
                    >Candle</md-radio
                >
                <md-radio v-model="selectedLightType" value="6"
                    >40W Tungsten</md-radio
                >
                <md-radio v-model="selectedLightType" value="7"
                    >100W Tungsten</md-radio
                >
                <md-radio v-model="selectedLightType" value="8"
                    >Halogen</md-radio
                >
                <md-radio v-model="selectedLightType" value="9"
                    >Carbon Arc</md-radio
                >
                <md-divider></md-divider>

                <md-radio v-model="selectedLightType" value="10"
                    >Warm Fluorescent</md-radio
                >
                <md-radio v-model="selectedLightType" value="11"
                    >Standard Fluorescent</md-radio
                >
                <md-radio v-model="selectedLightType" value="12"
                    >Cool White Fluorescent</md-radio
                >
                <md-radio v-model="selectedLightType" value="13"
                    >Full Spectrum Fluorescent</md-radio
                >
                <md-radio v-model="selectedLightType" value="14"
                    >Grow Light Fluorescent</md-radio
                >
                <md-radio v-model="selectedLightType" value="15"
                    >Black Light Fluorescent</md-radio
                >
                <md-divider></md-divider>
                <md-radio v-model="selectedLightType" value="16"
                    >Mercury Vapor</md-radio
                >
                <md-radio v-model="selectedLightType" value="17"
                    >Sodium Vapor</md-radio
                >
                <md-radio v-model="selectedLightType" value="18"
                    >Metal Halide</md-radio
                >
                <md-radio v-model="selectedLightType" value="19"
                    >High Pressure Sodium</md-radio
                >
                <small>Model value: {{ selectedLightType }}</small>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <md-field>
                    <!-- <label for="intensity">Intensity</label> -->

                    <input
                        name="Brightnesd"
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
/** Selects a color, emulating a light source at a given intensity.
 * @devdoc Color values taken from https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/
 */
export default class ColorSelector extends Vue {
    // highNoonSun
    // directSunlight
    // overcastSky
    // clearBlueSky
    // candle
    // fourtyWattTungsten
    // hundredWattTungsten
    // halogen
    // carbonArc
    // warmFluorescent
    // standardFluorescent
    // coolWhiteFluorescent
    // fullSpectrumFluorescent
    // growLightFluorescent
    // blackLightFluorescent
    // mercuryVapor
    // sodiumVapor
    // metalHalide
    // highPressureSodium

    highNoonSunColor = new Color([255, 255, 251]);
    directSunlightColor = new Color([255, 255, 255]);
    overcastSkyColor = new Color([201, 226, 255]);
    clearBlueSkyColor = new Color([64, 156, 255]);
    candleColor = new Color([255, 147, 41]);
    fourtyWattTungstenColor = new Color([255, 197, 143]);
    hundredWattTungstenColor = new Color([255, 214, 170]);
    halogenColor = new Color([255, 241, 224]);
    carbonArcColor = new Color([255, 250, 244]);
    warmFluorescentColor = new Color([255, 244, 229]);
    standardFluorescentColor = new Color([244, 255, 250]);
    coolWhiteFluorescentColor = new Color([212, 235, 255]);
    fullSpectrumFluorescentColor = new Color([255, 244, 242]);
    growLightFluorescentColor = new Color([255, 239, 247]);
    blackLightFluorescentColor = new Color([167, 0, 255]);
    mercuryVaporColor = new Color([216, 247, 255]);
    sodiumVaporColor = new Color([255, 209, 178]);
    metalHalideColor = new Color([242, 252, 255]);
    highPressureSodiumColor = new Color([255, 183, 76]);

    lightTypes = [
        { id: '1', color: this.highNoonSunColor },
        { id: '2', color: this.directSunlightColor },
        { id: '3', color: this.overcastSkyColor },
        { id: '4', color: this.clearBlueSkyColor },
        { id: '5', color: this.candleColor },
        { id: '6', color: this.fourtyWattTungstenColor },
        { id: '7', color: this.hundredWattTungstenColor },
        { id: '8', color: this.halogenColor },
        { id: '9', color: this.carbonArcColor },
        { id: '10', color: this.warmFluorescentColor },
        { id: '11', color: this.standardFluorescentColor },
        { id: '12', color: this.coolWhiteFluorescentColor },
        { id: '13', color: this.fullSpectrumFluorescentColor },
        { id: '14', color: this.growLightFluorescentColor },
        { id: '15', color: this.blackLightFluorescentColor },
        { id: '16', color: this.mercuryVaporColor },
        { id: '17', color: this.sodiumVaporColor },
        { id: '18', color: this.metalHalideColor },
        { id: '19', color: this.highPressureSodiumColor },
    ];

    selectedLightType = '7';
    brightness = 1;

    mounted(): void {
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
        console.debug('ColorSelector.vue::emitColorChange->emit', dimmedColor);
        this.$emit('changed', dimmedColor);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-radio {
    background-color: rgba(255, 255, 255, 0.2);
}

/** A control, representing the daytime clock */
.width-100 {
    width: 100%;
}
</style>
