<template>
    <Head>
        <title>Laranertia</title>
        <meta name="description" content="Layout" head-key="description" />
    </Head>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">Laranertia</h1>

                <p class="text-sm ml-4">Welcome Back, {{ username }}!</p>
            </div>

            <Nav />
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import Nav from "./Nav.vue";

const page = usePage();

const username = computed(() => {
    return page.props.auth.user.username;
});
</script>
