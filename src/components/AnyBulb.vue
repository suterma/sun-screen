<template>
    <div
        class="bulb-body"
        :style="{
            'background-color': `rgb(${ambientRed * intensity}, ${
                ambientGreen * intensity
            }, ${ambientBlue * intensity})`,
        }"
    >
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
                    <label for="movie">Movie</label>
                    <md-select
                        v-model="selectedLightType"
                        name="movie"
                        id="movie"
                    >
                        <md-option value="fight-club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather-ii">Godfather II</md-option>
                        <md-option value="godfather-iii"
                            >Godfather III</md-option
                        >
                        <md-option value="godfellas">Godfellas</md-option>
                        <md-option value="pulp-fiction">Pulp Fiction</md-option>
                        <md-option value="scarface">Scarface</md-option>
                    </md-select>
                </md-field>
            </div>
            <div class="md-layout-item">
                <md-field>
                    <!-- <label for="intensity">Intensity</label> -->

                    <input
                        name="Intensity"
                        id="intensity"
                        class="width-100"
                        type="range"
                        v-model.number="intensity"
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
import { Watch, Component, Prop } from 'vue-property-decorator';

@Options({
    components: {},
})
/** Represents a bulb, emulating the light of a selected source type
 * @devdoc Values taken from https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/
 */
export default class AnyBulb extends Vue {
    // Color values taken from https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/
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

    highNoonSun = { red: 255, green: 255, blue: 251 };
    directSunlight = { red: 255, green: 255, blue: 255 };
    overcastSky = { red: 201, green: 226, blue: 255 };
    clearBlueSky = { red: 64, green: 156, blue: 255 };
    candle = { red: 255, green: 147, blue: 41 };
    fourtyWattTungsten = { red: 255, green: 197, blue: 143 };
    hundredWattTungsten = { red: 255, green: 214, blue: 170 };
    halogen = { red: 255, green: 241, blue: 224 };
    carbonArc = { red: 255, green: 250, blue: 244 };
    warmFluorescent = { red: 255, green: 244, blue: 229 };
    standardFluorescent = { red: 244, green: 255, blue: 250 };
    coolWhiteFluorescent = { red: 212, green: 235, blue: 255 };
    fullSpectrumFluorescent = { red: 255, green: 244, blue: 242 };
    growLightFluorescent = { red: 255, green: 239, blue: 247 };
    blackLightFluorescent = { red: 167, green: 0, blue: 255 };
    mercuryVapor = { red: 216, green: 247, blue: 255 };
    sodiumVapor = { red: 255, green: 209, blue: 178 };
    metalHalide = { red: 242, green: 252, blue: 255 };
    highPressureSodium = { red: 255, green: 183, blue: 76 };

    lightTypes = [
        { id: '1', color: this.highNoonSun },
        { id: '2', color: this.directSunlight },
        { id: '3', color: this.overcastSky },
        { id: '4', color: this.clearBlueSky },
        { id: '5', color: this.candle },
        { id: '6', color: this.fourtyWattTungsten },
        { id: '7', color: this.hundredWattTungsten },
        { id: '8', color: this.halogen },
        { id: '9', color: this.carbonArc },
        { id: '10', color: this.warmFluorescent },
        { id: '11', color: this.standardFluorescent },
        { id: '12', color: this.coolWhiteFluorescent },
        { id: '13', color: this.fullSpectrumFluorescent },
        { id: '14', color: this.growLightFluorescent },
        { id: '15', color: this.blackLightFluorescent },
        { id: '16', color: this.mercuryVapor },
        { id: '17', color: this.sodiumVapor },
        { id: '18', color: this.metalHalide },
        { id: '19', color: this.highPressureSodium },
    ];

    selectedLightType = '1';
    ambientRed = 255;
    ambientGreen = 255;
    ambientBlue = 255;
    intensity = 1;

    mounted() {
        //Option auswählen
        this.selectedLightType = this.lightTypes[6].id;
        this.lightTypeChanged(this.selectedLightType);
    }

    @Watch('selectedLightType')
    lightTypeChanged(newValue: string) {
        for (var lightType of this.lightTypes) {
            if (lightType.id === newValue) {
                this.ambientRed = lightType.color.red;
                this.ambientGreen = lightType.color.green;
                this.ambientBlue = lightType.color.blue;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-radio {
    /* display: flex; */
    background-color: darkslategray;
    background-color: rgba(255, 255, 255, 0.2);
}

/** A control, representing the daytime clock */
.width-100 {
    width: 100%;
}
</style>
