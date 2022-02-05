<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>SunScreen</md-dialog-title>
            <md-dialog-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-xsmall-size-100">
                        <p>
                            SunScreen is a web app to improve the lighting in
                            home office or conference video calls. In a dual
                            monitor setup, on one screen you can run the video
                            call, while the second monitor improves the lighting
                            of your face. You can also use it as background
                            light.
                        </p>
                        <p>
                            It works by using the computer or device screen to
                            emulate various natural and artificial light
                            sources. It fills the background of the browser
                            window with their typical representations in the RGB
                            color space.
                        </p>
                    </div>
                </div>
            </md-dialog-content>
            <md-dialog-actions>
                <md-checkbox v-model="neverShowSplashAgain" value="true"
                    >Never show again</md-checkbox
                >
                <md-button
                    class="md-primary md-raised"
                    @click="showDialog = false"
                    >Close</md-button
                >
            </md-dialog-actions>
        </md-dialog>

        <!-- <md-button class="md-primary md-raised" @click="showDialog = true"
            >Show Dialog</md-button
        > -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {},
})
/** A simple splash screen with a short introduction
 */
export default class Splash extends Vue {
    showDialog = false;

    mounted() {
        this.showDialog = !this.neverShowSplashAgain === true;
    }

    get neverShowSplashAgain(): boolean {
        return this.$store.getters.neverShowSplashAgain;
    }
    set neverShowSplashAgain(value: boolean) {
        this.$store.dispatch('updateNeverShowSplashAgain', value);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.md-dialog /deep/.md-dialog-container {
    max-width: 768px;
}
</style>
