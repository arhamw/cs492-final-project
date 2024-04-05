<script setup>
import { useRouter, RouterLink, RouterView } from 'vue-router'

const router = useRouter()

router.afterEach(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-menu">
        <RouterLink class="navbar-item" to="/">Home</RouterLink>
        <RouterLink class="navbar-item" to="/dangers-about-ai"
          >Dangers of AI Misinformation</RouterLink
        >
        <RouterLink class="navbar-item" to="/combatting-ai"
          >Combatting AI Misinformation</RouterLink
        >
        <RouterLink class="navbar-item" to="/deepfakes">What is a Deepfake?</RouterLink>
        <RouterLink class="navbar-item" to="/ai-generated-content"
          >Identifying AI-Generated Content</RouterLink
        >
        <RouterLink class="navbar-item" to="/about">About</RouterLink>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.navbar {
  width: 101%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgb(34, 34, 34);
  margin-top: 0px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px; /* Adjust as needed */
  max-width: 100%; /* Full width */
  margin: 0 auto; /* Center the container */
}

.navbar-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.navbar-item {
  display: inline-flex;
  margin: 0 10px; /* Spacing between items, adjust as needed */
  padding: 10px; /* Padding for clickable area, adjust as needed */
  text-decoration: none; /* Optional: Removes underline from links */
  /* color: #333; Optional: Text color */
}

.welcome-page {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: 'Arial', 'sans-serif';
}

h1 {
  font-size: 7em;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
