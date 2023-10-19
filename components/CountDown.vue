<template>
  <div>
    <h1>Dynamic Counter</h1>
    <div class="counter">
      <h1>Select a Date and Time</h1>
      <input
        type="datetime-local"
        id="selectedDateTime"
        v-model="selectedDateTime"
        @input="handleDateTimeInput"
      />
      <p>Date and Time You Selected : {{ formattedSelectedDateTime }}</p>

      <Counter
        :year="selectedYear"
        :month="selectedMonth"
        :date="selectedDate"
        :hour="selectedHour"
        :minute="selectedMinute"
        :second="selectedSecond"
        :millisecond="selectedMillisecond"
      />
    </div>
  </div>
</template>



<script setup>
import { ref, watch } from 'vue';

const selectedDateTime = ref('');
const formattedSelectedDateTime = ref('');
const selectedYear = ref();
const selectedMonth = ref();
const selectedDate = ref();
const selectedHour = ref();
const selectedMinute = ref();
const selectedSecond = ref();
const selectedMillisecond = ref();

// Method to handle the input event and update selectedDateTime
const handleDateTimeInput = (event) => {
  selectedDateTime.value = event.target.value;
};

// Watch for changes in selectedDateTime and update the computed properties
watch(selectedDateTime, () => {
  const dateTime = new Date(selectedDateTime.value);

  // Extract individual date and time components
  selectedYear.value = dateTime.getFullYear();
  selectedMonth.value = dateTime.getMonth() + 1;
  selectedDate.value = dateTime.getDate();
  selectedHour.value = dateTime.getHours();
  selectedMinute.value = dateTime.getMinutes();
  selectedSecond.value = dateTime.getSeconds();
  selectedMillisecond.value = dateTime.getMilliseconds();

  // Format selected date and time for display
  formattedSelectedDateTime.value = dateTime.toLocaleString();
});

// Expose data to the template
{
  selectedDateTime,
  formattedSelectedDateTime,
  selectedYear,
  selectedMonth,
  selectedDate,
  selectedHour,
  selectedMinute,
  selectedSecond,
  selectedMillisecond,
  handleDateTimeInput
}
</script>

<style scoped>
.counter{
  border: 1px solid #dedede;
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(10px);

  padding: 20px;
}

input{
  padding: 5px;
  margin: 15px 0;
}

.counter h1{
  color: blue;
}

.counter p{
  font-size: 1.2rem;
  font-weight: 500;
    margin-bottom: 15px;
    letter-spacing: 1px;
}
</style>