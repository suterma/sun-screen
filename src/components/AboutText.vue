<template>
    <div>
        <p>
            sun-screen is a web app to improve the lighting in home office or
            conference video calls. In a dual monitor setup, on one screen you
            can run the video call, while the second monitor improves the
            lighting of your face. You can also use it as background light.
        </p>
        <p>
            It works by using the computer or device screen to emulate various
            natural sky conditions (high noon sunlight, overcast, clear blue
            sky) and artificial light bulbs (incandescent, fluorescent and
            others). It fills the full screen background of the browser window
            with their representations in the RGB color space. You can slide
            between two colors to adapt for lighting changes during the day.
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {},
})
/** An about text
 */
export default class AboutText extends Vue {}
</script>
