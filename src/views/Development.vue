<template>
  <div>
    <SunScreen />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import SunScreen from "@/components/SunScreen.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    SunScreen,
  },
})
export default class Home extends Vue {}
</script>
