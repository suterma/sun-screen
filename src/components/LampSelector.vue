<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item">
            <ColorDial
                dialClass="md-bottom-right"
                direction="top"
                targetButtonName="lightbulb"
                :annotatedColors="lampTypes"
                @changed="lampTypeChanged"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Options from 'vue-class-component';
import ColorDial from '@/components/ColorDial.vue'; // @ is an alias to /src
import { AnnotatedColor } from '../code/AnnotatedColor';

@Options({
    components: { ColorDial },
})
/** A selector for an artificial lamp
 * @remarks Uses the vuex store to retrieve and update the lamp types.
 */
export default class LampSelector extends Vue {
    lampTypeChanged(newVal: AnnotatedColor): void {
        this.$store.dispatch('updateSelectedLampType', newVal.id);
    }

    get lampTypes(): AnnotatedColor[] {
        return this.$store.getters.lampTypes;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
