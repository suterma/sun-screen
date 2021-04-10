<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title">SunScreen</span>

                <div id="nav">
                    <!-- This uses the Office view as the Home view -->
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
            </md-app-toolbar>
            <md-app-content>
                <!-- Your content here -->
                <router-view />
            </md-app-content>
        </md-app>
    </div>
</template>

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
