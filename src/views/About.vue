<template>
    <div>
        <div class="md-layout md-gutter">
            <div
                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
                <h2>About</h2>
                <AboutText />
                <p>
                    The latest version is available at
                    <a
                        href="https://sunscreen.marcelsuter.ch"
                        target="_blank"
                        rel="noopener"
                        >https://sunscreen.marcelsuter.ch</a
                    >
                </p>
                <p>
                    Source code is availabe at
                    <a
                        href="https://github.com/suterma/sun-screen"
                        target="_blank"
                        rel="noopener"
                        >https://github.com/suterma/sun-screen
                    </a>
                </p>
            </div>
            <div
                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
                <h2>Credits</h2>
                This project uses
                <ul>
                    <li>
                        <a
                            href="https://vuejs.org/"
                            target="_blank"
                            rel="noopener"
                            >Vue.js</a
                        >, the progressive JavaScript framework (Released under
                        the MIT License, Copyright © 2014-2021 Evan You)
                    </li>
                    <li>
                        <a
                            href="https://vuematerial.io/"
                            target="_blank"
                            rel="noopener"
                            >Vue Material</a
                        >, a set of components in the material design (The MIT
                        License (MIT), Copyright (c) 2016 - 2021 Marcos Moura)
                    </li>
                    <li>
                        <a
                            href="https://www.reddit.com/r/spaceengineers/comments/3e0k38/rgb_values_for_various_types_of_realworld_lights/"
                            target="_blank"
                            rel="noopener"
                            >RGB values for various types of real-world lights
                        </a>
                        by draeath (No licence, copyright with the author)
                    </li>
                    <li>
                        <a
                            href="https://github.com/dsteinman/ts-color-class"
                            target="_blank"
                            rel="noopener"
                            >ts-color-class
                        </a>
                        by Dan Steinman (No licence, copyright with the author)
                    </li>
                    <li>
                        <a
                            href="https://github.com/richtr/NoSleep.js"
                            target="_blank"
                            rel="noopener"
                            >NoSleep.js
                        </a>
                        by Rich Tibbett (MIT license copyright (c) Rich Tibbett)
                    </li>
                </ul>
            </div>
            <div
                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
                <h2>License</h2>
                <section class="page-container-section">
                    <p>MIT License</p>
                    <p>
                        Copyright (c) 2021
                        <a href="https://marcelsuter.ch" target="_blank"
                            >Marcel Suter</a
                        >
                    </p>
                    <p>
                        Permission is hereby granted, free of charge, to any
                        person obtaining a copy of this software and associated
                        documentation files (the "Software"), to deal in the
                        Software without restriction, including without
                        limitation the rights to use, copy, modify, merge,
                        publish, distribute, sublicense, and/or sell copies of
                        the Software, and to permit persons to whom the Software
                        is furnished to do so, subject to the following
                        conditions:
                    </p>
                    <p>
                        The above copyright notice and this permission notice
                        shall be included in all copies or substantial portions
                        of the Software.
                    </p>
                    <p>
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
                        ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                        TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                        PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
                        SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
                        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                        OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
                        IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                        DEALINGS IN THE SOFTWARE.
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Options from 'vue-class-component';
import AboutText from '@/components/AboutText.vue';

@Options({
    components: { AboutText },
})
export default class About extends Vue {}
</script>
