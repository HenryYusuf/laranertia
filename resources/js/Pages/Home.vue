<template>
    <h1>Hello {{ name }}</h1>
    <p>Frameworks</p>
    <ul>
        <li v-for="framework of frameworks">{{ framework }}</li>
    </ul>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: "World",
    },
    frameworks: {
        type: Array,
        default: () => ["Vue", "React", "Svelte"],
    },
});
</script>
