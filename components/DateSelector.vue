<template>
  <div>
    <label for="selectedDate">Select a Date:</label>
    <input name="inputDate"
      type="datetime-local"
      id="selectedDate"
      v-model="selectedDate"
    />
    <p>Selected Date: {{ selectedDate }}</p>
        <p>Selected Date: </p>

  </div>
</template>

<script setup>
const selectedDate = ref(null);
const logInputType = () => {
  const inputType = document.getElementById('selectedDate').type;
  console.log('Input Type:', inputType);
};
</script>

<style scoped>
p{
    color:black
}
</style>
