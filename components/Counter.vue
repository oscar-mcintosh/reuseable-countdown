<template>
  <div class="countdown__text-wrap bordered">
    <div v-if="loaded" class="rows">
      <div class="date">
          <span class="days">
          {{ displayDays }}
          </span>
          <div class="label countdown__text-info">days</div>
        </div>
      <span class="leading-snug">:</span>
      <div class="date">
          <span class="hours">
          {{ displayHours }}
          </span>
          <div class="label countdown__text-info">hours</div>
        </div>
      <span class="leading-snug">:</span>
      <div class="date">
          <span class="minutes">
          {{ displayMinutes }}
          </span>
          <div class="label countdown__text-info">minutes</div>
        </div>
      <span class="leading-snug">:</span>
      <div class="date">
          <span class="seconds">
              {{ displaySeconds }}
          </span>
          <div class="label countdown__text-info">seconds</div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps(['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond']);

const displayDays = ref(0);
const displayHours = ref(0);
const displayMinutes = ref(0);
const displaySeconds = ref(0);
const loaded = ref(false);
const expired = ref(false);

const _seconds = 1000;
const _minutes = computed(() => _seconds * 60);
const _hours = computed(() => _minutes.value * 60);
const _days = computed(() => _hours.value * 24);

// Define the 'end' variable here based on the props
const end = computed(() => {
  return new Date(
    props.year,
    props.month - 1,
    props.date,
    props.hour,
    props.minute,
    props.second,
    props.millisecond
  );
});

const formatNum = (num) => (num < 10 ? '0' + num : num);

const showRemaining = () => {
  const timer = setInterval(() => {
    const now = new Date();
    const distance = end.value.getTime() - now.getTime();

    if (distance < 0) {
      clearInterval(timer);
      expired.value = true;
      return;
    }

    const days = Math.floor(distance / _days.value);
    const hours = Math.floor((distance % _days.value) / _hours.value);
    const minutes = Math.floor((distance % _hours.value) / _minutes.value);
    const seconds = Math.floor((distance % _minutes.value) / _seconds);
    displayMinutes.value = formatNum(minutes);
    displaySeconds.value = formatNum(seconds);
    displayHours.value = formatNum(hours);
    displayDays.value = formatNum(days);
    loaded.value = true;
  }, 1000);
};

onMounted(showRemaining);
</script>

<style lang="css" scoped>

section{
    align-content: center;
}

h5{
    margin-bottom: 3rem;
}

.date{
  text-align: center;
  font-size: 1.3rem;
  margin: 10px 0;
}

.date span{
  font-size: 1.4rem;
}

.days .hours .minutes .seconds{
    position: relative;
    text-align: center;
    font-size: 1.4rem;
}

.days{
    padding-left: 0;
}
.time{
    font-size: 1.8rem;
    color: black;
    text-align: center;
}
.label{
    color: red;
    letter-spacing: .5px;
    padding: 1rem 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    /* position: absolute; */
}
 .rows{
     display: flex;
 }

 .leading-snug{
     margin: 1rem ;
 }
</style>