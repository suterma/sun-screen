<template>
    <!-- <div class="sunscreen" :style="dynamicStyle"> -->
    <div
        class="sunscreen"
        :style="{
            'background-color': `rgb(${ambientRed}, ${ambientGreen}, ${ambientBlue})`,
        }"
    >
        <span>A screen area, emulating ambient light</span>

        <!-- <DayTimeSlider
            :minute-of-day="minuteOfDay"
            @input="onMinuteOfDayChanged($event)"
        /> -->
        {{ minuteOfDay }}
        <input type="number" v-model="minuteOfDay" />
        <p>{{ zeroPad(hourOfDay, 2) }}:{{ zeroPad(minuteOfHour, 2) }}</p>
        <p>
            <input
                class="clock"
                type="range"
                min="0"
                max="1440"
                v-model.number="minuteOfDay"
            />
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Options from 'vue-class-component';
import { Watch, Component, Prop } from 'vue-property-decorator';

@Options({
    components: {
        //DayTimeSlider,
        // MdButton,
        // MdContent,
        // MdTabs,
    },
})
export default class SunScreen extends Vue {
    /** Returns a number representation with a given amount of digits */
    zeroPad(num: number, places: number): string {
        return String(num).padStart(places, '0');
    }

    minuteOfDay = 0;

    // Color values taken from https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/
    // High Noon Sun
    highNoon = {
        red: 255,
        green: 255,
        blue: 251,
    };

    //Candle
    candle = {
        red: 255,
        green: 147,
        blue: 41,
    };

    //Ambient
    ambientRed = 20;
    ambientGreen = 40;
    ambientBlue = 60;

    mounted() {
        this.onMinuteOfDayChanged(this.minuteOfDay);
    }

    @Watch('minuteOfDay')
    onMinuteOfDayChanged(value: number) {
        console.log(value);
        //this.minuteOfDay = value;

        //Calculating the sunlight color
        var factor = this.elevation;
        this.ambientRed =
            this.candle.red + (this.highNoon.red - this.candle.red) * factor;
        this.ambientGreen =
            this.candle.green +
            (this.highNoon.green - this.candle.green) * factor;
        this.ambientBlue =
            this.candle.blue + (this.highNoon.blue - this.candle.blue) * factor;
    }

    get elevation(): number {
        var factor = this.minuteOfDay / 1440 - 0.25;
        var rotation = factor * 2 * Math.PI;
        var elevation = Math.max(Math.sin(rotation), 0);
        return elevation;
    }

    get hourOfDay(): number {
        return Math.floor(this.minuteOfDay / 60);
    }
    get minuteOfHour(): number {
        return this.minuteOfDay % 60;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sunscreen {
    width: 100%;
    height: 800px;

    /* background-color: burlywood; */
}

/** A control, representing the daytime clock */
.clock {
    width: 100%;
}
</style>
