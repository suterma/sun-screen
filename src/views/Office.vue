<template>
    <div>
        <LightEmittingArea />
        <GradationDial />
        <Splash />
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <SkySelector />
                <LampSelector />
            </div>
        </div>
        <md-tooltip md-direction="bottom">
            <span> {{ selectedSkyType.caption }} </span
            ><span class="color-caption-separator">|</span>
            <span> {{ selectedLampType.caption }}</span></md-tooltip
        >
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SkySelector from '@/components/SkySelector.vue'; // @ is an alias to /src
import LampSelector from '@/components/LampSelector.vue'; // @ is an alias to /src
import LightEmittingArea from '@/components/LightEmittingArea.vue'; // @ is an alias to /src
import GradationDial from '@/components/GradationDial.vue'; // @ is an alias to /src
import Splash from '@/components/Splash.vue'; // @ is an alias to /src
import { AnnotatedColor } from '@/code/AnnotatedColor';
import NoSleep from 'nosleep.js';

@Component({
    components: {
        GradationDial,
        SkySelector,
        LampSelector,
        LightEmittingArea,
        Splash,
    },
})
export default class Office extends Vue {
    get selectedLampType(): AnnotatedColor {
        return this.$store.getters.selectedLampType;
    }

    get selectedSkyType(): AnnotatedColor {
        return this.$store.getters.selectedSkyType;
    }

    noSleep = new NoSleep();

    mounted(): void {
        this.noSleep.enable();
    }
    destroyed(): void {
        this.noSleep.disable();
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

/** Tooltip on colors with better separation of captions */
.color-caption-separator {
    padding-right: 12px;
    padding-left: 12px;
}
</style>
