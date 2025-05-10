<template>
    <Link
        class="text-black hover:underline"
        :class="{
            'font-bold underline': active,
        }"
        ><slot
    /></Link>
</template>

<script setup>
defineProps({
    active: {
        type: Boolean,
        default: false,
    },
});
</script>
