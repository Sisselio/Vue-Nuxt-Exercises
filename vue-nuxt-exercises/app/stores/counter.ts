import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);
  const status = ref("");

  const increment = () => {
    if (counter.value < 10) counter.value++;
  };

  const decrement = () => {
    if (counter.value > 0) counter.value--;
  };

  const counterFinale = computed(() => counter.value === 10);
  const doubleCounter = computed(() => counter.value * 2);

  function counterStatus() {
    if (counter.value === 10) {
      status.value = "Estás en el valor máximo";
    } else if (counter.value > 0 && counter.value < 10) {
      status.value = "Estás en los parámetros adecuados";
    } else if (counter.value === 0) {
      status.value = "Estás en el valor mínimo";
    }
  }

  watch(counter, counterStatus);
  counterStatus();

  return {
    counter,
    status,
    counterFinale,
    doubleCounter,
    increment,
    decrement,
  };
});
