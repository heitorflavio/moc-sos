<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps } from "vue";
import { Link } from "@inertiajs/vue3";
import moment from "moment";

const props = defineProps({
  categories: Object,
});
</script>

<template>
  <AppLayout title="Categories">
    <template #header>
      <div class="flex justify-between items-center">
        <h2
          class="font-semibold text-xl text-gray-800 leading-tight dark:text-white"
        >
          Categories
        </h2>
        <Link
          :href="route('categories.create')"
          class="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
        >
          Create
        </Link>
      </div>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div
            class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-800"
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Created At</th>
                    <th scope="col" class="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="category in categories.data"
                    :key="category.id"
                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ category.name }}
                    </th>
                    <td class="px-6 py-4">
                      {{ moment(category.created_at).format("ll") }}
                    </td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
