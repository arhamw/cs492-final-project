<script setup>
import { ref } from 'vue'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import Popup from '../components/PopUpMessage.vue'

const realImages = ref([image1, image2, image3, image4, image5, image6, image7, image8])
const aiImages = ref([image9, image10, image11, image12])
const score = ref(0)
const round = ref(1)
const displayedImages = ref([])
const correctIndex = ref(0)
let alertTimeout
const showPopup = ref(false)
const popupMessage = ref('')

const loadImages = () => {
  // Clear displayed images
  displayedImages.value = []

  // Select two random real images
  const selectedRealImages = selectRandom(realImages.value, 2)
  // Select one random AI image
  correctIndex.value = Math.floor(Math.random() * 3)
  const selectedAiImage = selectRandom(aiImages.value, 1)

  // Merge selected images for display
  displayedImages.value = [
    ...selectedRealImages.slice(0, correctIndex.value),
    ...selectedAiImage,
    ...selectedRealImages.slice(correctIndex.value)
  ]

  // Shuffle displayed images
  shuffleArray(displayedImages.value)
}

const selectRandom = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
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
    showAlert('Correct answer!', 'green')
  } else {
    // If incorrect image is clicked
    popupMessage.value = 'Wrong answer! Try again.'
    showPopup.value = true
    showAlert('Wrong answer! Try again.', 'red')
  }
}

const closePopup = () => {
  showPopup.value = false
}

const showAlert = (message, color) => {
  // Remove existing alert
  if (alertTimeout) {
    clearTimeout(alertTimeout)
    removeAlert()
  }

  const alertDiv = document.createElement('div')
  alertDiv.className = 'alert'
  alertDiv.style.backgroundColor = color
  alertDiv.textContent = message
  document.body.appendChild(alertDiv)
  alertTimeout = setTimeout(() => {
    removeAlert()
  }, 1000)
}

const removeAlert = () => {
  const alertDiv = document.querySelector('.alert')
  if (alertDiv) {
    alertDiv.remove()
  }
}

loadImages()

const restartGame = () => {
  // Reset the game state
  score.value = 0
  round.value = 1
  // Load new set of images
  loadImages()
}
</script>

<template>
  <div class="about">
    <h1 class="glow">Decoding Deepfakes: The Reality Behind AI's Illusions</h1>
    <section class="interesting-facts">
      <h2>Interesting Facts</h2>
      <!-- Add your interesting facts content here -->
    </section>

    <section class="user-stories">
      <h2>User Stories</h2>
      <!-- Add your user stories content here -->
    </section>

    <section class="game">
      <Popup v-if="showPopup" :message="popupMessage" @close="closePopup" />
      <h2>Play the Game</h2>
      <div v-if="round <= 4">
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
        <h2>Game Over!</h2>
        <p>Your final score is {{ score }}</p>
        <button @click="restartGame">Play Again</button>
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    position: relative; /* Add position: relative */
  }
  .about h1 {
    margin-bottom: 50px; /* Add margin-bottom */
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

  .image-container {
    display: flex;
    justify-content: space-between; /* Add space between images */
    margin-top: 80px;
  }
  .image-container img {
    width: 400px;
    height: 400px;
    cursor: pointer;
    border-radius: 5px; /* Optional: Add border radius */
    padding: 5px; /* Optional: Add padding */
    margin: 0 15px; /* Add margin to create more space between images */
    transition: border-color 0.3s ease-in-out;
  }
  .score {
    margin-top: 20px;
    font-size: 20px; /* Increase font size */
  }
  .alert {
    position: absolute; /* Change position to absolute */
    top: 27%; /* Position below the h1 */
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
  }
  .final-score {
    text-align: center; /* Center align the content */
    margin-top: 100px; /* Add top margin for spacing */
  }

  .final-score h2 {
    margin-bottom: 10px; /* Add bottom margin for spacing */
    font-size: 34px; /* Adjusted font size */
  }

  .final-score p {
    font-size: 22px; /* Adjusted font size */
  }

  .final-score button {
    margin-top: 20px; /* Add top margin for spacing */
    padding: 8px 20px; /* Add padding */
    background-color: #007bff; /* Blue background color */
    color: white; /* White text color */
    border: none; /* Remove border */
    border-radius: 5px; /* Add border radius */
    cursor: pointer; /* Add cursor pointer */
  }
}
</style>
