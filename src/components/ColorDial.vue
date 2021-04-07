<template>
    <div>
        <!-- Root -->
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <md-speed-dial
                    md-effect="fling"
                    :class="dialClass"
                    :md-direction="direction"
                >
                    <md-speed-dial-target class="md-primary" md-event="hover">
                        <md-icon>{{ targetButtonName }}</md-icon>
                    </md-speed-dial-target>
                    <md-speed-dial-content>
                        <span
                            v-for="annotatedColor in annotatedColors"
                            :key="annotatedColor.id"
                        >
                            <md-button
                                class="md-icon-button"
                                @click="selectedLightType = annotatedColor.id"
                            >
                                <md-icon class="md-size-1x">{{
                                    annotatedColor.iconName
                                }}</md-icon>
                            </md-button>
                            <md-tooltip md-direction="right">
                                {{ annotatedColor.caption }}</md-tooltip
                            >
                        </span>
                    </md-speed-dial-content>
                </md-speed-dial>
            </div>
        </div>
    </div>

    <!-- Root -->
</template>

<script lang="ts">
import Vue from 'vue';
import Options from 'vue-class-component';
import { Watch, Prop } from 'vue-property-decorator';
import { AnnotatedColor } from '../code/AnnotatedColor';
@Options({
    components: {},
})
/** A speed dial for a set of annotated colors
 * @remarks Takes no preset, but just emits any selected color as the "change" event
 */
export default class ColorDial extends Vue {
    /** The name of the material icon to use for the target button */
    @Prop({ required: false, type: String, default: 'help' })
    targetButtonName!: string;

    /** The set of colors to choose from */
    @Prop({ required: true, type: Array })
    annotatedColors!: AnnotatedColor[];

    /** The CSS class to use for the dial */
    @Prop({ required: false, type: String })
    dialClass!: string;

    /** The direction of the options
     * @remarks Must be "top" or "bottom", default is "bottom"
     */
    @Prop({ required: false, type: String, default: 'bottom' })
    direction!: string;

    selectedLightType = 'highNoonSun';

    @Watch('selectedLightType')
    lightTypeChanged(newValue: string): void {
        console.debug('ColorDial.vue::lightTypeChanged->newValue', newValue);
        for (var annotatedColor of this.annotatedColors) {
            if (annotatedColor.id === newValue) {
                this.emitColorChange(annotatedColor);
            }
        }
    }
    emitColorChange(color: AnnotatedColor): void {
        console.debug('ColorDial.vue::emitColorChange->emit', color);
        this.$emit('changed', color);
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
    padding-top: 0px;
}
</style>
