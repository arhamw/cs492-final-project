<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDeepFakePage = () => {
  router.push('/deepfakes')
}
</script>

<template>
  <div class="main">
    <section class="content">
      <div class="title">
        <h1 class="glow">Navigating the Maze: Your Guide to Outsmarting AI Misinformation</h1>
      </div>
      <div class="container">
        <div class="content-wrapper">
          <div class="square-container">
            <div
              class="square"
              v-for="(item, index) in items"
              :key="index"
              @click="openPopup(item)"
            >
              <h2>{{ item.heading }}</h2>
              <p>{{ item.body }}</p>
            </div>
          </div>
          <div v-if="showPopup" class="popup" @click="closePopup">
            <div class="popup-content">
              <div class="left-section">
                <p>
                  {{ selectedBox.body }}
                  <br /><br />
                  Additional content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed non maximus erat, et bibendum leo. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Quisque at maximus magna.
                  Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident.
                </p>
              </div>
              <div class="right-section">
                <!-- Add media here -->
              </div>
              <div class="close-btn">X</div>
            </div>
          </div>
          <div class="button-container">
            <button class="begin-button" @click="navigateToDeepFakePage">Next</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          heading: 'Become a Savvy News Detective',
          body: 'Learn to spot the real from the fake. Just like a detective looks for clues, you can too! Check if reputable news outlets are also reporting the story, and be wary of sensational headlines. Remember, if it sounds too good (or bad) to be true, it might just be AI trying to fool you.',
          popupBody:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames act'
        },
        {
          heading: 'Know AI Tricks',
          body: 'Artificial Intelligence can create news stories or images that seem very real but arent. Understanding that not everything we see online is true helps us stay cautious. Think of AI like a magician – its good at illusions. Our job is to look beyond the trick and seek the truth.',
          popupBody:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames act'
        },
        {
          heading: 'Use Your Tools',
          body: 'Just like gardeners use tools to keep weeds out, we can use tools to filter out fake news. Many websites and apps can check facts for you, identifying stories or claims that are false. Embrace these tools; theyre like your digital garden shears for trimming away misinformation.',
          popupBody:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames act'
        },
        {
          heading: 'Demand Clear Information',
          body: 'We all deserve to know where our news comes from and how decisions about what we see are made. Encouraging websites and social media to be open about how they decide what news to show us helps everyone. Think of it as asking for the recipe to a dish were being served – we have the right to know whats in it.',
          popupBody:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames act'
        }
      ],
      showPopup: false,
      selectedBox: null
    }
  },
  methods: {
    openPopup(item) {
      this.selectedBox = item
      this.showPopup = true
    },
    closePopup() {
      this.selectedBox = null
      this.showPopup = false
    }
  }
}
</script>

<style>
.main {
  padding: 5rem;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
}

.title h1 {
  margin-bottom: 2rem;
  font-size: 2.3vw;
}

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

.glow {
  color: #429772; /* Color for glowing effect */
  animation: glow 1.5s infinite alternate; /* Apply animation */
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 6rem;
  width: calc(100% + 12rem);
}

.square-container h2 {
  color: hsla(160, 100%, 37%, 1);
}
.content-wrapper {
  display: flex;
  align-items: center;
}

.button-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
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

.square-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  max-height: 700px;
  width: 100%;
  height: 600px;
}
.square {
  width: calc(50% - 20px);
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease;
  background-color: #333333;
  cursor: pointer;
}

.square:hover {
  transform: scale(1.05);
  border-color: aquamarine;
  box-shadow: 0 0 10px rgba(137, 192, 112, 0.856);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.popup-content {
  background-color: #727272;
  padding: 20px;
  border: 2px solid #e7f8d8;
  border-radius: 10px;
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.left-section {
  /* Style for left section */
}

.right-section {
  /* Style for right section */
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;
  color: #999;
  padding: 20px;
}

.close-btn:hover {
  background-color: #f0f0f0;
}
</style>
