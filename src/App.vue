<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <router-link to="/">
                    <span class="md-title" title="SunScreen"> <AppIcon /></span>
                </router-link>
                <div id="nav">
                    <router-link to="/">Light</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
            </md-app-toolbar>
            <md-app-content>
                <!-- App content here -->
                <router-view />
            </md-app-content>
        </md-app>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppIcon from '@/components/AppIcon.vue'; // @ is an alias to /src

@Component({
    components: {
        AppIcon,
    },
})
export default class App extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
    padding-left: 30px;
}

#nav a {
    color: white;
}

#nav a.router-link-exact-active {
    font-weight: bold;
}

/* The app should use the whole html area for the page container, which in turn provides it to the content */
.page-container {
    min-height: 100vh;
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
