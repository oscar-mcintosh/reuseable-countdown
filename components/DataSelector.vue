<template>
  <div>
    <label for="selectedDate">Select a Date:</label>
    <input
      type="date"
      id="selectedDate"
      v-model="selectedDate"
    />
    <p>Selected Date: {{ selectedDate }}</p>
  </div>
</template>

<script setup>
const selectedDate = ref(null);
</script>
