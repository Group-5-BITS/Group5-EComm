<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
<script setup>
import "animate.css";
import NavBar from "./components/NavBar.vue";</script>

<style>
::-webkit-scrollbar {
  display: none;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}

</style>

