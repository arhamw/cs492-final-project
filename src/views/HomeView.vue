<template>
  <div class="homepage">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Our Website</h1>
      </div>
      <div class="features-button-container">
        <div class="features-button-wrapper">
          <div class="features-container">
            <div class="feature">
              <h2>Easy to Learn</h2>
              <p>
                Vue.js offers a simple and intuitive syntax, making it easy for developers to learn
                and use.
              </p>
            </div>
            <div class="feature">
              <h2>Flexible</h2>
              <p>
                Vue.js allows you to build scalable and maintainable applications with its flexible
                architecture.
              </p>
            </div>
            <div class="feature">
              <h2>Great Community</h2>
              <p>
                Join the vibrant Vue.js community and get support from experienced developers
                worldwide.
              </p>
            </div>
            <div class="feature">
              <h2>Play</h2>
              <p>
                Join the vibrant Vue.js community and get support from experienced developers
                worldwide.
              </p>
            </div>
          </div>
        </div>
        <div class="button-container">
          <button class="begin-button" @click="navigateToDangersPage">Start Now</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDangersPage = () => {
  // Navigate to the "Dangers of AI" page
  router.push('/dangers-about-ai')
}
</script>

<style scoped>
.homepage {
  padding: 5rem;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem; /* Reduced margin */
  position: relative; /* Make the hero section a positioning context */
}
.hero-content {
  margin-right: 80px; /* Adjust the value as needed */
}
.hero h1 {
  margin-bottom: 0.5rem; /* Adjusted margin */
  font-size: 3.5rem;
}

.features-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 6rem; /* Increase the padding to create more space */
  width: calc(100% + 12rem); /* Increase the width to include the padding */
  transform: translateX(7%); /* Adjust the container vertically to align with the desired element */
}

.features-button-wrapper {
  display: flex;
  flex-direction: column; /* Stack its children vertically */
}

.features-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Display two columns */
  gap: 1rem;
  margin-right: 16rem; /* Add margin to the right of the features */
}

.feature {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #27a770;
  background-image: linear-gradient(315deg, #27a770 0%, #dbe9d2 74%);
  text-align: center;
  cursor: default;
}

.feature:hover {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(150, 245, 189, 0.5),
    0.125rem 0.125rem 1rem rgba(59, 170, 133, 0.5);
  transform: translateY(-5px);
}

.feature h2 {
  margin-bottom: 1rem;
  color: #000000;
  font-weight: 500;
}

.feature p {
  color: #666;
}

.button-container {
  display: flex;
  align-items: center; /* Vertically center the button */
  margin-left: auto; /* Move the button to the right */
}

.begin-button {
  background-color: #c2fbd7;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 100px;
  box-shadow:
    rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px,
    rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px,
    rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;

  color: rgb(35, 51, 36);
  cursor: pointer;
  display: inline-block;
  font-family:
    CerebriSans-Regular,
    -apple-system,
    system-ui,
    Roboto,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 2.5;
  outline: transparent;
  padding: 0.55rem 2.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.begin-button:hover {
  box-shadow:
    rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px,
    rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px,
    rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
