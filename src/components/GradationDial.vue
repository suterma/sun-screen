<template>
    <div>
        <!-- Root -->
        <div class="md-layout">
            <div class="md-layout-item">
                <md-field>
                    <input
                        name="Split Position"
                        id="splitPosition"
                        class="range-slider-gradation"
                        type="range"
                        v-bind:value="value"
                        v-on:input="$emit('input', $event.target.value)"
                        min="0"
                        max="100"
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
import { Watch, Prop } from 'vue-property-decorator';
@Options({
    components: {},
})
/** A dial for the values of the gradation
 * @remarks Takes no preset, but just emits any selected color as the "change" event
 */
export default class GradationDial extends Vue {
    /** The value of the gradation */
    @Prop({ required: false, type: Number })
    value!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/** A range slider that takes almost all of the visible area, with an icon thumb
 * @devdoc It can not grow larger than the available area for this element*/
.range-slider-gradation {
    -webkit-appearance: none;
    width: 100%;
    /* The height is set so, that most vertical space gets used by the slider, 
    but no vertical scrolling occurs, 
    and the bottom speed dials are not covered */
    height: calc(100vh - 200px);
    background: transparent;
    outline: none;
    padding: 0;
    margin: 0;
    /** z to hide the slider line below the slider thumb */
    z-index: 2;
}
/* Range Handle, like a ripple button */
.range-slider-gradation::-webkit-slider-thumb {
    appearance: none;
    border-radius: 50%;
    background-color: var(--md-theme-default-primary, #448aff);
    cursor: pointer;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
        0 1px 18px 0 rgb(0 0 0 / 12%);
    width: 56px;
    height: 56px;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M22,8l-4-4v3H3v2h15v3L22,8z"/><path d="M2,16l4,4v-3h15v-2H6v-3L2,16z"/></g></g></svg>');
    background-size: 43%;
    background-position: center;
    background-repeat: no-repeat;
}

.range-slider-gradation:active::-webkit-slider-thumb {
    box-shadow: 0 7px 8px -4px rgb(0 0 0 / 20%),
        0 12px 17px 2px rgb(0 0 0 / 14%), 0 5px 22px 4px rgb(0 0 0 / 12%);
}

/** Use the field separator here as a slider indicator */
.md-field:after {
    top: calc(50vh - 86px);
    height: 1;
}
</style>
