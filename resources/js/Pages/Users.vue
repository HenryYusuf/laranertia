<template>
    <Head>
        <title>Users</title>
        <meta name="description" content="Users page" head-key="description" />
    </Head>
    <h1 class="text-3xl">Users</h1>
    <div class="mt-[800px]">
        <p>The current time is {{ time }}.</p>
        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>

<script setup>
defineProps({
    time: {
        type: String,
        required: true,
    },
});
</script>
