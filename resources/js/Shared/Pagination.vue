<template>
    <div>
        <!-- <template v-for="link in users.links">
                <Link
                    v-if="link.url"
                    :href="link.url"
                    v-html="link.label"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                />
                <span v-else v-html="link.label"></span>
            </template> -->
        <Component
            :is="link.url ? 'Link' : 'span'"
            v-for="link in links"
            :href="link.url"
            v-html="link.label"
            class="px-1"
            :class="{
                'text-blue-600 dark:text-blue-500 hover:underline': link.url,
                'font-bold underline': link.active,
                'text-gray-500 dark:text-gray-400': !link.url,
            }"
        />
    </div>
</template>

<script setup>
defineProps({
    links: {
        type: Array,
    },
});
</script>
