<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  categoryNames: Array,
  categoryCounts: Array,
});

onMounted(() => {
  const ctx = document.getElementById("myChart").getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: props.categoryNames,
      datasets: [
        {
          label: "Category Counts",
          data: props.categoryCounts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });
});
</script>

<template>
  <AppLayout title="Dashboard">
    <template #header>
      <h2
        class="font-semibold text-xl text-gray-800 leading-tight dark:text-white"
      >
        Dashboard
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
          class="bg-white overflow-hidden shadow-xl sm:rounded-lg dark:bg-gray-800"
        >
          <div
            class="p-6 lg:p-8 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-800"
          >
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
