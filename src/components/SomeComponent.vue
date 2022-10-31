<script lang="ts" setup>
import type { ImageDatas } from "../interfaces/interfaces";
import { ref } from "vue";
const API_KEY = import.meta.env.TOP_SECRET;

const randomPhoto = ref<ImageDatas>();

try {
  let response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${API_KEY}`
  );
  let responseData = await response.json();
  randomPhoto.value = responseData;
} catch (e) {
  console.error(e);
}
</script>

<template>
  <div class="text-2xl text-white bg-gray-800">
    <img
      class="w-full h-full"
      :src="randomPhoto?.urls.regular"
      alt=""
    />
    <a href="`../pages/search_results/${'Hello'}`">Here</a>
  </div>
</template>

<style scoped></style>
