<script lang="ts" setup>
defineProps<{
  message: string;
}>();
</script>

<template>
  <div class="text-2xl text-white">
    {{ message }}
  </div>
</template>

<style scoped></style>
