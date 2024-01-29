<style>
@import url("~/src/styles.css");
</style>

<template>
  <div class="h-full w-full flex flex-col">
    <NavBar />
    <NuxtPage class="w-full grow-1" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>