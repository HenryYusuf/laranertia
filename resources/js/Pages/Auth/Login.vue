<template>
    <Head title="Login Page" />
    <main class="grid place-items-center min-h-screen">
        <section class="bg-white p-8 rounded-xl max-w-md mx-auto mt-8 border">
            <h1 class="text-3xl mb-6">Login</h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-6">
                    <label
                        for="email"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >Email</label
                    >
                    <input
                        v-model="form.email"
                        type="email"
                        class="border border-gray-400 p-2 w-full rounded"
                        name="email"
                        id="email"
                        required
                    />
                    <div
                        v-if="form.errors.email"
                        class="text-red-500 text-xs mt-1"
                    >
                        {{ form.errors.email }}
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="password"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >Password</label
                    >
                    <input
                        v-model="form.password"
                        type="password"
                        class="border border-gray-400 p-2 w-full rounded"
                        name="password"
                        id="password"
                        required
                    />
                    <div
                        v-if="form.errors.password"
                        class="text-red-500 text-xs mt-1"
                    >
                        {{ form.errors.password }}
                    </div>
                </div>
                <div class="mb-6">
                    <button
                        type="submit"
                        class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                        :disabled="form.processing"
                    >
                        {{ form.processing ? "Loading..." : "Log In" }}
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";

defineOptions({
    layout: null,
});

const form = useForm({
    email: "",
    password: "",
});

const handleSubmit = () => {
    form.post("/login", {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>
