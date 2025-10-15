import { ref } from "vue";

export const counter = ref(5);

export function useCounter() {
  function increment() {
    if (counter.value < 10) counter.value++;
  }
  function decrement() {
    if (counter.value > 0) counter.value--;
  }

  return {
    counter,
    increment,
    decrement,
  };
}
