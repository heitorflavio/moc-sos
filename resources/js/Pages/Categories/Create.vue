<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import FormSection from "@/Components/FormSection.vue";
import { useForm, router } from "@inertiajs/vue3";

const form = useForm({
  name: "",
  description: "",
});

const submit = () => {
  form.post(route("categories.store"), {
    onSuccess: () => {
     return router.visit(route("categories.index"));
    },
    onError: () => {
      console.log("Error");
    },
  });
};
</script>

<template>
  <AppLayout title="Create Category">
    <template #header>
      <h2
        class="font-semibold text-xl text-gray-800 leading-tight dark:text-white"
      >
        Create Category
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="">
          <FormSection class="p-6" @submit="submit()">
            <template #title>Create a New Category</template>
            <template #description
              >Fill in the details below to create a new category.</template
            >

            <template #form>
              <div class="col-span-6 sm:col-span-4">
                <label
                  for="name"
                  class="block font-medium text-sm text-gray-700 dark:text-gray-300"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div class="col-span-6 sm:col-span-4 mt-4">
                <label
                  for="description"
                  class="block font-medium text-sm text-gray-700 dark:text-gray-300"
                  >Description</label
                >
                <textarea
                  id="description"
                  v-model="form.description"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                ></textarea>
              </div>
            </template>

            <template #actions>
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
              >
                Save
              </button>
            </template>
          </FormSection>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
