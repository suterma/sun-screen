<template>
    <div>
        <LightEmittingArea
            :color="selectedSkyColor"
            :colorSecondary="selectedLampColor"
        />
        <SkySelector @changed="skyColorChanged" />
        <LampSelector @changed="lampColorChanged" />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Color from 'ts-color-class';
import SkySelector from '@/components/SkySelector.vue'; // @ is an alias to /src
import LampSelector from '@/components/LampSelector.vue'; // @ is an alias to /src
import LightEmittingArea from '@/components/LightEmittingArea.vue'; // @ is an alias to /src

@Component({
    components: {
        SkySelector,
        LampSelector,
        LightEmittingArea,
    },
})
export default class Office extends Vue {
    selectedSkyColor = new Color('white');
    selectedLampColor = new Color('orange');

    skyColorChanged(newVal: Color): void {
        console.debug(newVal);
        this.selectedSkyColor = newVal;
    }
    lampColorChanged(newVal: Color): void {
        console.debug(newVal);
        this.selectedLampColor = newVal;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-emitting-area {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* height: 100vh; */
    /* background: rgba(255, 0, 0, 0.5); */
    content: 'AFTER';
}

/** Use the whole available content area (minus the menu bar) for the app content */
.md-content {
    min-height: calc(100vh - 64px);
}
@media (max-width: 960px) {
    .md-content {
        min-height: calc(100vh - 48px);
    }
}
@media (max-width: 600px) {
    .md-content {
        min-height: calc(100vh - 56px);
    }
}
</style>
