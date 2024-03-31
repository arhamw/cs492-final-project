<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToAboutPage = () => {
  router.push('/about')
}
</script>

<template>
  <div class="about">
    <h1 class="glow">Identifying AI-Generated Photos (Photo Phantoms)</h1>
    <div class="button-container">
      <button class="begin-button" @click="navigateToAboutPage">Next</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
