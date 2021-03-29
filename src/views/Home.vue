<template>
    <div>
        <AnyBulb />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AnyBulb from '@/components/AnyBulb.vue'; // @ is an alias to /src

@Component({
    components: {
        AnyBulb,
    },
})
export default class About extends Vue {}
</script>
