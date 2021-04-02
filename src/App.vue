<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title">SunScreen</span>

                <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/office">Office</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
            </md-app-toolbar>

            <!-- <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer> -->

            <md-app-content>
                <!-- Your content here -->
                <router-view />
            </md-app-content>

            <!-- <div class="phone-viewport">
                <md-bottom-bar md-sync-route>
                    <md-bottom-bar-item
                        to="/components/bottom-bar"
                        exact
                        md-label="Home"
                        md-icon="home"
                    ></md-bottom-bar-item>
                    <md-bottom-bar-item
                        to="/components/bottom-bar/posts"
                        md-label="Posts"
                        md-icon="/assets/icon-whatshot.svg"
                    ></md-bottom-bar-item>
                    <md-bottom-bar-item
                        to="/components/bottom-bar/favorites"
                        md-label="Favorites"
                        md-icon="favorite"
                    ></md-bottom-bar-item>
                </md-bottom-bar>
            </div> -->
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
