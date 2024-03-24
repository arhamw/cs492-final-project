<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="main">
    <section class="content">
      <div class="title">
        <h1>This page is about the Dangers of AI Misinformation</h1>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card-icon">LOGO</div>
          <div class="card-content">
            <h2 class="card-title">Guide to Error & Exception Handling in Vue Apps</h2>
            <p></p>
            <p class="card-summary">
              We all try to debug and test our apps the best we can, but we can't really prevent
              errors from happening. As always in life, what matters is how you handle problems that
              inevitably pop up...
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-icon">LOGO</div>
          <div class="card-content">
            <h2 class="card-title">Guide to Error & Exception Handling in Vue Apps</h2>
            <p></p>
            <p class="card-summary">
              We all try to debug and test our apps the best we can, but we can't really prevent
              errors from happening. As always in life, what matters is how you handle problems that
              inevitably pop up...
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-icon">LOGO</div>
          <div class="card-content">
            <h2 class="card-title">Guide to Error & Exception Handling in Vue Apps</h2>
            <p></p>
            <p class="card-summary">
              We all try to debug and test our apps the best we can, but we can't really prevent
              errors from happening. As always in life, what matters is how you handle problems that
              inevitably pop up...
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.main {
  padding: 5rem;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem; /* Reduced margin */
  position: relative; /* Make the hero section a positioning context */
}

.title h1 {
  margin-bottom: 0.5rem; /* Adjusted margin as in the first file */
  font-size: 3.5rem; /* Same font size as in the first file */
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 300px; /* or whatever width you prefer */
  margin: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px; /* optional rounded corners */
  overflow: hidden;
}

.card-icon {
  /* Icon styles */
  color: #333;
  background-color: #24e494; /* Light green background */
  text-align: center;
  padding: 20px;
}

.card-content {
  padding: 20px;
}

.card-title {
  margin-top: 0;
  color: #333; /* Dark text color */
}

.card-summary {
  color: #333;
  font-size: 1em;
  line-height: 1.5;
}

/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
