<script setup>
import { Head, Link, useForm, router } from "@inertiajs/vue3";
import Map from "@/Components/Map.vue";
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
  },
  categories: {
    type: Array,
  },
  selectedCategory: {
    type: Number,
  },
  selectedSearch: {
    type: String,
  },
});

function handleImageError() {
  document.getElementById("screenshot-container")?.classList.add("!hidden");
  document.getElementById("docs-card")?.classList.add("!row-span-1");
  document.getElementById("docs-card-content")?.classList.add("!flex-row");
  document.getElementById("background")?.classList.add("!hidden");
}

const form = useForm({
  search: "",
  category: "",
});

const menuOpen = ref(false);

onMounted(() => {
  if (props.selectedCategory) {
    form.category = props.selectedCategory;
  }
  if (props.selectedSearch) {
    form.search = props.selectedSearch;
  }
});

function submit() {
  form.get(route("map"), {
    preserveScroll: true,
  });
}

function reset() {
  form.reset();
  form.get(route("map"), {
    preserveScroll: true,
  });
}
</script>

<template>
  <Head title="Welcome" />

  <nav class="fixed top-0 left-0 w-full bg-transparent p-4 z-10">
    <div class="flex justify-between items-center">
      <!-- Logo à esquerda -->
      <div class="text-white font-bold">
        <a
          href="#"
          class="font-mono font-bold flex items-center space-x-2 text-3xl"
          >MOC SOS</a
        >
      </div>

      <!-- Menu Hamburguer (para mobile) -->
      <button
        class="lg:hidden text-white"
        @click="menuOpen = !menuOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Inputs e botão à direita -->
      <form
        action="#"
        class="flex space-x-4 items-center hidden lg:flex"
        @submit.prevent="submit()"
      >
        <div class="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Pesquisar..."
            class="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="form.search"
          />

          <select
            class="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="form.category"
          >
            <option value="">Categorias</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>

          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
          <button
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="button"
            @click="reset()"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
    <!-- Menu mobile -->
    <div v-if="menuOpen" class="lg:hidden absolute top-16 left-0 w-full bg-gray-800 p-4">
      <form
        action="#"
        class="flex flex-col space-y-4"
        @submit.prevent="submit()"
      >
        <div class="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Pesquisar..."
            class="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="form.search"
          />

          <select
            class="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="form.category"
          >
            <option value="">Categorias</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>

          <div class="flex space-x-4">
            <button
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar
            </button>
            <button
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="button"
              @click="reset()"
            >
              Limpar
            </button>
          </div>
        </div>
      </form>
    </div>
  </nav>

  <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
    <img
      id="background"
      class="absolute  top-0 max-w-[877px] w-full h-full object-cover object-center z-0"
      src="https://laravel.com/assets/img/welcome/background.svg"
    />
    <div
      class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
    >
      <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
        <main class="mt-6">
          <div>
            <div
              id="docs-card"
              class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-4 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
            >
              <Map :items="items" />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
