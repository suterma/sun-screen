<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item">
            <ColorDial
                dialClass="md-bottom-right"
                direction="top"
                targetButtonName="lightbulb"
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
/** A selector for the color representing an artificial lamp
 * @devdoc Values taken from https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/
 */
export default class LampSelector extends Vue {
    candleColor = new Color([255, 147, 41]);
    fourtyWattTungstenColor = new Color([255, 197, 143]);
    hundredWattTungstenColor = new Color([255, 214, 170]);
    halogenColor = new Color([255, 241, 224]);
    warmFluorescentColor = new Color([255, 244, 229]);
    standardFluorescentColor = new Color([244, 255, 250]);
    coolWhiteFluorescentColor = new Color([212, 235, 255]);
    fullSpectrumFluorescentColor = new Color([255, 244, 242]);

    lightTypes = [
        new AnnotatedColor('candle', 'Candle', this.candleColor, 'cake'),
        new AnnotatedColor(
            'fourtyWattTungsten',
            '40W Incandescent',
            this.fourtyWattTungstenColor,
            'light'
        ),
        new AnnotatedColor(
            'hundredWattTungsten',
            '100W Incandescent',
            this.hundredWattTungstenColor,
            'tungsten'
        ),
        new AnnotatedColor(
            'halogen',
            'Halogen',
            this.halogenColor,
            'online_prediction'
        ),
        new AnnotatedColor(
            'warmFluorescent',
            'Warm Fluorescent',
            this.warmFluorescentColor,
            'wb_iridescent'
        ),
        new AnnotatedColor(
            'standardFluorescent',
            'Standard Fluorescent',
            this.standardFluorescentColor,
            'wb_iridescent'
        ),
        new AnnotatedColor(
            'coolWhiteFluorescent',
            'Cool White Fluorescent',
            this.coolWhiteFluorescentColor,
            'wb_iridescent'
        ),
        new AnnotatedColor(
            'fullSpectrumFluorescent',
            'Full Spectrum Fluorescent',
            this.fullSpectrumFluorescentColor,
            'wb_iridescent'
        ),
    ];

    selectedLightType = this.lightTypes[0];

    lightTypeChanged(newVal: AnnotatedColor): void {
        this.selectedLightType = newVal;
        this.$emit('changed', newVal.color);
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
