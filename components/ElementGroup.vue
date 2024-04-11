<script setup lang="ts">
import gsap from "gsap";

const id = useId();
const props = defineProps({
  title: String,
  default: Boolean,
});

const isOpen = ref(props.default);

function changeOpen() {
  isOpen.value = !isOpen.value;
  animate();
}

function animate() {
  if (isOpen.value) {
    gsap.to("#" + id, { duration: 0.8, height: "auto", opacity: 1 });
    gsap.to("#icon-"+id, {rotateY: 180});
  } else {
    gsap.to("#" + id, { duration: 0.8, height: 0, opacity: 0 });
    gsap.to("#icon-"+id, {rotateY: 0});

  }
}
</script>

<template>
  <div class="w-full p-6">
    <div
      class="w-full bg-[#221F1F] select-none mb-2 flex justify-between h-10 rounded-lg p-1"
      @click="() => changeOpen()"
    >
      <p class="text-white text-2xl">{{ title }}</p>
      <img :id="'icon-'+id" src="/arrow-icon.svg" class="h-full rotate-90">
    </div>

    <div :id="id" class="group origin-top overflow-hidden" :class="props.default? '': 'h-0'">
      <slot></slot>
    </div>
  </div>
</template>
