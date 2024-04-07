<script setup>
import { ref } from 'vue'
import elon from '../assets/elon.png'
import elon2 from '../assets/elon2.png'
import elon3 from '../assets/elon3.png'
import obama from '../assets/obama.png'
import obama2 from '../assets/obama2.png'
import obama3 from '../assets/obama3.png'
import oprah from '../assets/oprah.png'
import oprah2 from '../assets/oprah2.png'
import oprah3 from '../assets/oprah3.png'
import rock from '../assets/rock.png'
import rock2 from '../assets/rock2.png'
import rock3 from '../assets/rock3.png'
import taylor from '../assets/taylor.png'
import taylor2 from '../assets/taylor2.png'
import taylor3 from '../assets/taylor3.png'
import Popup from '../components/PopUpMessage.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToAboutPage = () => {
  router.push('/about')
}

const score = ref(0)
const round = ref(1)
const displayedImages = ref([])
const correctIndex = ref(0)
const showPopup = ref(false)
const popupMessage = ref('')

const loadImages = () => {
  displayedImages.value = []

  const roundImages = [
    [elon2, elon3, elon], // Round 1: Elon Musk
    [obama2, obama3, obama], // Round 2: Barack Obama
    [oprah2, oprah3, oprah], // Round 3: Oprah Winfrey
    [rock2, rock3, rock], // Round 4: The Rock
    [taylor2, taylor3, taylor] // Round 5: Taylor Swift
  ]

  const selectedRoundImages = roundImages[round.value - 1]

  shuffleArray(selectedRoundImages)

  displayedImages.value = selectedRoundImages
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const checkAnswer = (index) => {
  if (index === correctIndex.value) {
    // If correct AI image is clicked
    score.value++
    round.value++
    loadImages()
  } else {
    // If incorrect image is clicked
    popupMessage.value = 'Wrong answer! Try again.'
    showPopup.value = true
  }
}

const closePopup = () => {
  showPopup.value = false
}

const restartGame = () => {
  score.value = 0
  round.value = 1
  loadImages()
}

loadImages()
</script>

<template>
  <div class="about">
    <h1 class="glow">Identifying AI-Generated Photos (Photo Phantoms)</h1>
    <div class="content2">
      <p class="intro">
        There are many ways to determine whether a photo was generated from an AI model. Below are
        some tips that can help you:
      </p>
      <div class="tips">
        <div class="tip">
          <div class="icon">
            <i class="fas fa-search"></i>
          </div>
          <div class="tip-text">
            <h2>Zoom In</h2>
            <p>
              Look closely for irregularities that AI-generated photos may exhibit upon closer
              inspection.
            </p>
          </div>
        </div>
        <div class="tip">
          <div class="icon">
            <i class="fas fa-image"></i>
          </div>
          <div class="tip-text">
            <h2>Search Online</h2>
            <p>Upload the photo to Google Images to find its origin and verify its authenticity.</p>
          </div>
        </div>
        <div class="tip">
          <div class="icon">
            <i class="fas fa-user"></i>
          </div>
          <div class="tip-text">
            <h2>Examine People</h2>
            <p>
              Pay attention to details like hands, feet, and facial features for signs of AI
              generation.
            </p>
          </div>
        </div>
        <div class="tip">
          <div class="icon">
            <i class="fas fa-palette"></i>
          </div>
          <div class="tip-text">
            <h2>Check Lighting</h2>
            <p>
              Look for inconsistencies in lighting and shadows, which may reveal AI manipulation.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <h1 class="glow">Identifying AI-Generated Text (Text Trickery)</h1>
      <div class="content2">
        <p class="intro">
          Similar to images, there is a lot of AI-generated text circulating on the internet. Below
          are some tips that can help with identifying AI-generated text:
        </p>
        <div class="tips">
          <div class="tip">
            <div class="icon">
              <i class="fas fa-search"></i>
            </div>
            <div class="tip-text">
              <h2>Look for Excessive Words</h2>
              <p>
                Look for excessive uses of certain words that might indicate AI generation, such as
                "the", "it", or "is".
              </p>
            </div>
          </div>
          <div class="tip">
            <div class="icon">
              <i class="fas fa-comment"></i>
            </div>
            <div class="tip-text">
              <h2>Check for Typos</h2>
              <p>
                Human-written text often contains typos and grammatical errors, while AI-generated
                text is typically error-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="game">
      <Popup v-if="showPopup" :message="popupMessage" @close="closePopup" />
      <h2 class="glow">Test Your Knowledge</h2>
      <div v-if="round <= 5">
        <div class="image-container">
          <img
            v-for="(image, index) in displayedImages"
            :key="index"
            :src="image"
            @click="checkAnswer(index)"
          />
        </div>
        <div class="score">Score: {{ score }}</div>
      </div>
      <div class="final-score" v-else>
        <h2 class="glow">Game Over!</h2>
        <p>Your final score is {{ score }}</p>
        <button @click="restartGame">Play Again</button>
      </div>
    </section>
    <div class="button-container">
      <button class="begin-button" @click="navigateToAboutPage">Next</button>
    </div>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0;
}

.content2 {
  max-width: 800px;
  margin-top: 2rem;
}

.intro {
  font-size: 1.3rem;
  font-weight: bold;
  color: #429772;
  margin-bottom: 2rem;
}

.tips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tip {
  width: 300px;
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: #f3f3f3dc;
  box-shadow:
    0 0 2px #42977286,
    0 0 5px #42977286,
    0 0 10px #42977286;
  transition: transform 0.3s ease;
}

.tip:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tip-text h2 {
  font-size: 1.2rem;
  color: #429772;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: -10px;
}

.tip-text p {
  font-size: 1rem;
  color: #555;
}

.begin-button {
  background-color: #429772;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.begin-button:hover {
  background-color: #357e5d;
}

.fa {
  color: #429772;
}
.game {
  margin-top: -300px;
  margin-bottom: 100px;
}
.game h2 {
  margin-bottom: 10px;
  font-size: 1.7vw;
}
.image-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.image-container img {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  margin: 0 15px;
  transition: border-color 0.3s ease-in-out;
}
.image-container img:hover {
  box-shadow:
    0 0 5px #42977286,
    0 0 10px #42977286,
    0 0 15px #42977286;
}
.score {
  margin-top: 20px;
  font-size: 20px;
  color: #75d8adbd;
}

.final-score {
  text-align: center;
  margin-top: 100px;
}

.final-score h2 {
  margin-bottom: 10px;
  font-size: 34px;
}

.final-score p {
  font-size: 22px;
}

.final-score button {
  margin-top: 20px;
  padding: 8px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
