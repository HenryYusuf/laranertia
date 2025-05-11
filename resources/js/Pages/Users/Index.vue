<template>
    <Head>
        <title>Users</title>
        <meta name="description" content="Users page" head-key="description" />
    </Head>
    <div class="flex justify-between mb-6">
        <div class="flex items-center">
            <h1 class="text-3xl">Users</h1>
            <Link href="/users/create" class="text-blue-500 text-sm ml-4"
                >New user</Link
            >
        </div>
        <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="border px-2 rounded-lg"
        />
    </div>

    <div class="relative overflow-x-auto">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="px-6 py-3">Product name</th>
                    <th scope="col" class="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="user in users.data"
                    :key="user.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {{ user.name }}
                    </th>
                    <td class="px-6 py-4">
                        <Link
                            :href="`/users/${user.id}/edit`"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</Link
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Paginator -->
    <Pagination :links="users.links" class="mt-6" />
</template>

<script setup>
import { ref, watch } from "vue";
import { router } from "@inertiajs/vue3";
import Pagination from "@/Shared/Pagination.vue";

const propos = defineProps({
    users: {
        type: Object,
    },
    filters: {
        type: Object,
    },
});

const search = ref(propos.filters.search || "");

watch(search, (value) => {
    router.get(
        "/users",
        {
            search: value,
        },
        {
            preserveState: true,
            replace: true,
        }
    );
});
</script>
