<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item">
            <ColorDial
                dialClass="md-bottom-left md-disappear"
                direction="top"
                targetButtonName="flare"
                :annotatedColors="skyTypes"
                @changed="skyTypeChanged"
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
/** A selector for a sky condition
 * @remarks Uses the vuex store to retrieve and update the sky types.
 */
export default class SkySelector extends Vue {
    skyTypeChanged(newVal: AnnotatedColor): void {
        this.$store.dispatch('updateSelectedSkyType', newVal.id);
    }

    get skyTypes(): AnnotatedColor[] {
        return this.$store.getters.skyTypes;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
