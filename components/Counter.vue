<template>
  <div class="countdown__text-wrap bordered">
    <p class="hard-coded">{{month}}-{{date}}-{{year}}</p>
    <div v-if="loaded" class="row">
      <div class="date">
          <span class="days">
          {{ displayDays }}
          </span>
          <div class="label countdown__text-info">D</div>
        </div>
      <span class="leading-snug">:</span>
      <div class="date">
          <span class="hours">
          {{ displayHours }}
          </span>
          <div class="label countdown__text-info">H</div>
        </div>
      <span class="leading-snug">:</span>
      <div class="date">
          <span class="minutes">
          {{ displayMinutes }}
          </span>
          <div class="label countdown__text-info">M</div>
        </div>
      <span class="leading-snug">:</span>
      <div class="date">
          <span class="seconds">
              {{ displaySeconds }}
          </span>
          <div class="label countdown__text-info">S</div>
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

.row{
  display: flex;
  justify-content: space-between;
}

.grid{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

h5{
    margin-bottom: 3rem;
}

.date{
  text-align: center;
  font-size: 1.3rem;
  margin: 10px 0;
  border: 1px solid #087e8b;
  position: relative;
  padding: 1rem;
  border-radius: 5px;
}

.date span{
  font-size: 1.4rem;
}

.days .hours .minutes .seconds{
    position: relative;
    text-align: center;
    font-size: 1.4rem;
    color: blue;
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
    color: #c81d25;
    letter-spacing: .5px;
    padding: 1rem 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .713rem;
    position: absolute;
    top: -1.1rem;
    left: 2px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 1);
}
 .rows{
     display: flex;
 }

 .leading-snug{
     margin: auto;
 }

 .hard-coded{
   margin-bottom: 30px;
   color: #c81d25;
   font-weight: 500;
 }
</style>