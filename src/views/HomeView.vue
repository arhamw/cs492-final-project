<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDangersPage = () => {
  router.push('/dangers-about-ai')
}
</script>

<template>
  <div class="homepage">
    <section class="hero">
      <div class="hero-content">
        <h1 class="title">AI<span class="glow">Wise</span></h1>
      </div>
      <div class="features-button-container">
        <div class="features-button-wrapper">
          <div class="features-container">
            <div class="feature">
              <h2>Easy to Learn</h2>
              <p>
                Offers a simple and intuitive interface, making it easy for users to navigate and
                access valuable information on AI misinformation.
              </p>
            </div>
            <div class="feature">
              <h2>Flexible</h2>
              <p>
                Allows users to explore various topics related to AI misinformation through flexible
                and interactive content.
              </p>
            </div>
            <div class="feature">
              <h2>Discover</h2>
              <p>
                Provides insights and actual events, helping users understand the impact and
                prevalence of AI-generated content in today's world.
              </p>
            </div>
            <div class="feature">
              <h2>Play</h2>
              <p>
                Dive into the immersive learning experience offered by our website and discover
                innovative ways to identify AI-generated content.
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

<style scoped>
.homepage {
  padding: 5rem;
  position: relative; /* Ensure relative positioning */
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
}
.hero-content {
  margin-right: 80px;
}
.hero h1.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw; /* Responsive font size */
}

.hero h1.title .glow {
  color: #27a770; /* Color for "Wise" */
  animation: glow 1.5s infinite alternate; /* Apply animation */
}

/* Define the animation for glowing effect */
@keyframes glow {
  0% {
    text-shadow:
      0 0 10px #075f43,
      0 0 20px #075f43,
      0 0 30px #075f43;
  }
  50% {
    text-shadow:
      0 0 20px #075f43,
      0 0 30px #075f43,
      0 0 40px #075f43;
  }
  100% {
    text-shadow:
      0 0 10px #075f43,
      0 0 20px #075f43,
      0 0 30px #075f43;
  }
}

.features-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% + 12rem);
  margin-top: 3rem;
  justify-content: center; /* Center vertically */
}

.features-button-wrapper {
  display: flex;
  flex-direction: column;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-right: 16rem;
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
  position: fixed; /* Position fixed to the viewport */
  bottom: 3rem; /* Adjust bottom spacing */
  right: 0rem; /* Adjust right spacing */
  z-index: 9999;
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
  font-size: 1vw;
  font-weight: 600;
  line-height: 2.5;
  outline: transparent;
  padding: 0.55rem 2.5vw;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin-right: 80px;
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

/* Tablet Styles */
@media (max-width: 1024px) {
  .hero h1.title {
    font-size: 8vw; /* Adjust font size for tablet */
  }

  .begin-button {
    font-size: 1.3vw; /* Adjust font size for tablet */
    padding: 0.55em 3em; /* Adjust padding for tablet */
    margin-right: 2vw;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero h1.title {
    font-size: 10vw; /* Adjust font size for mobile */
  }

  .begin-button {
    font-size: 2vw;
  }
}
</style>
