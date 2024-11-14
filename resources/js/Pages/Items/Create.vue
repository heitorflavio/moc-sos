<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import FormSection from "@/Components/FormSection.vue";
import { useForm, router } from "@inertiajs/vue3";
import { vMaska } from "maska/vue";
import { watchEffect } from "vue";

const props = defineProps({
  categories: Object,
});

const form = useForm({
  name: "",
  description: "",
  category_id: "",
  zip_code: "",
  number: "",
});

const submit = () => {
  form.post(route("items.store"), {
    onSuccess: () => {
      return router.visit(route("items.index"));
    },
    onError: (error) => {
      console.log("Error");
      console.log(error);
    },
  });
};
</script>

<template>
  <AppLayout title="Create Item">
    <template #header>
      <h2
        class="font-semibold text-xl text-gray-800 leading-tight dark:text-white"
      >
        Create Item
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div>
          <FormSection class="p-6" @submit="submit()">
            <template #title>Create a New Item</template>
            <template #description
              >Fill in the details below to create a new item.</template
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

              <div class="col-span-6 sm:col-span-4 mt-4">
                <label
                  for="category_id"
                  class="block font-medium text-sm text-gray-700 dark:text-gray-300"
                  >Category</label
                >
                <select
                  id="category_id"
                  v-model="form.category_id"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                >
                  <option value="" disabled>Select a category</option>
                  <option
                    v-for="category in props.categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-4 mt-4">
                <label
                  for="zip"
                  class="block font-medium text-sm text-gray-700 dark:text-gray-300"
                  >ZIP Code</label
                >
                <input
                  type="text"
                  id="zip"
                  v-model="form.zip_code"
                  v-maska
                  data-maska="#####-###"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div class="col-span-6 sm:col-span-4 mt-4">
                <label
                  for="number"
                  class="block font-medium text-sm text-gray-700 dark:text-gray-300"
                  >Number</label
                >
                <input
                  type="text"
                  id="number"
                  v-model="form.number"
                  v-maska
                  data-maska="########"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
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
