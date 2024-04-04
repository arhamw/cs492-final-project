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
import gabon1 from '../assets/gabon1.png'
import gabon2 from '../assets/gabon2.png'
import celebrity_deepfake from '../assets/celebrity_deepfake.png'
import Popup from '../components/PopUpMessage.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToAiContent = () => {
  router.push('/ai-generated-content')
}

const realImages = ref([image1, image2, image3, image4, image5, image6, image7, image8])
const aiImages = ref([image9, image10, image11, image12])
const score = ref(0)
const round = ref(1)
const displayedImages = ref([])
const correctIndex = ref(0)
const showPopup = ref(false)
const popupMessage = ref('')

const loadImages = () => {
  displayedImages.value = []

  const selectedRealImages = selectRandom(realImages.value, 2)
  correctIndex.value = Math.floor(Math.random() * 3)
  const selectedAiImage = selectRandom(aiImages.value, 1)

  displayedImages.value = [
    ...selectedRealImages.slice(0, correctIndex.value),
    ...selectedAiImage,
    ...selectedRealImages.slice(correctIndex.value)
  ]

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
  } else {
    // If incorrect image is clicked
    popupMessage.value = 'Wrong answer! Try again.'
    showPopup.value = true
  }
}

const closePopup = () => {
  showPopup.value = false
}

loadImages()

const restartGame = () => {
  score.value = 0
  round.value = 1
  loadImages()
}
</script>

<template>
  <div class="about">
    <h1 class="glow">Decoding Deepfakes: The Reality Behind AI's Illusions</h1>
    <section class="interesting-facts">
      <div class="fact-container">
        <div class="fact">
          <p>
            <strong>71% of respondents globally</strong> are unaware of what a deepfake is, though
            <strong>57% believe they could identify one</strong> if seen.
          </p>
        </div>
        <div class="fact">
          <p>
            <strong>Deepfake fraud attempts</strong> have skyrocketed by <strong>3,000%</strong> in
            <strong>2023</strong> alone, underlining the rapid growth and escalating threat posed by
            easily accessible generative AI and deepfake technologies.
          </p>
        </div>
        <div class="fact">
          <p>
            Deepfakes <strong>harness AI technologies</strong> to create hyper-realistic videos.
            <strong>Deep learning</strong> trains a system to mimic appearances or voices. Imagine
            fake videos of presidents or celebrities.
          </p>
        </div>
      </div>
    </section>
    <br />

    <section class="user-stories">
      <h2 class="glow">User Stories</h2>
      <div class="card-container">
        <div class="card1" v-for="(card, index) in cards" :key="index" @click="openPopup1(card)">
          <div class="card-icon">{{ card.title }}</div>
          <div class="card-content">
            <p class="card-summary">
              {{ card.context }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="showPopup1" class="popup" @click="closePopup1">
        <div class="popup-content">
          <div class="left-section">
            <h1 class="popup-title">{{ selectedBox.title }}</h1>
            <br />
            <p class="popup-text">{{ selectedBox.context }}</p>
            <br />
            <p class="popup-text">{{ selectedBox.debunking }}</p>
            <br />
          </div>
          <div class="right-section">
            <p class="popup-text">{{ selectedBox.lessons_learned }}</p>
            <img class="image" v-if="selectedBox.media" :src="selectedBox.media" />
            <img class="image" v-if="selectedBox.media2" :src="selectedBox.media2" />
          </div>
          <div class="close-btn">X</div>
        </div>
      </div>
    </section>

    <section class="game">
      <Popup v-if="showPopup" :message="popupMessage" @close="closePopup" />
      <h2 class="glow">Test Your Knowledge</h2>
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
        <h2 class="glow">Game Over!</h2>
        <p>Your final score is {{ score }}</p>
        <button @click="restartGame">Play Again</button>
      </div>
    </section>
    <div class="button-container">
      <button class="begin-button" @click="navigateToAiContent">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "The Political Deepfake: Gabon President's Speech",
          context:
            "In 2019, a video surfaced of Gabon's President Ali Bongo giving a New Year's speech, which sparked rumours about his health and capability to govern. The video's slight irregularities in his appearance raised suspicions.",
          debunking:
            "Experts analyzed the video, pointing out inconsistencies with previous appearances of President Bongo, such as unusual facial movements and discrepancies in the background. Further investigation by political analysts and digital forensic experts confirmed the video's manipulated aspects.",
          lessons_learned:
            'This incident underscored the potential of deepfakes to destabilize political environments and the importance of critical media literacy. It highlighted the need for verification tools and the critical role of experts in debunking misinformation.',
          media: gabon1,
          media2: gabon2
        },
        {
          title: 'Celebrity Deepfake: Rashmika Mandanna',
          context:
            "A viral deepfake merged Rashmika Mandanna's face onto another individual's video. It was intended to inflate a fan page's followers.",
          debunking:
            "Traced by Delhi Police's digital forensics, the creator, an Andhra Pradesh tech enthusiast, was apprehended.",
          lessons_learned:
            'Highlighting the risks of deepfakes, this case advocates for stronger verification on social media and legal measures against such digital misuse',
          media: celebrity_deepfake
        }
      ],
      showPopup1: false,
      selectedBox: null
    }
  },
  methods: {
    openPopup1(item) {
      this.selectedBox = item
      this.showPopup1 = true
    },
    closePopup1() {
      this.selectedBox = null
      this.showPopup1 = false
    }
  }
}
</script>

<style>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  position: relative;
}
.about h1 {
  margin-bottom: 50px;
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
  color: #429772;
  animation: glow 1.5s infinite alternate;
}

.interesting-facts {
  margin-bottom: 3rem;
}
.fact-container {
  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.fact {
  flex: 1 1 calc(33% - 2rem);
  padding: 1rem;
  background-color: #f7f7f7ce;
  border-radius: 10px;
  box-shadow:
    0 0 5px #42977286,
    0 0 10px #42977286,
    0 0 15px #42977286;
  transition: transform 0.3s ease;
  animation: bounce 4s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.fact p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

.fact strong {
  font-weight: bold;
  color: #007bff;
}

.user-stories {
  margin-bottom: 4rem;
}

.user-stories .glow {
  font-size: 1.4vw;
}

.game h2 {
  margin-bottom: 10px;
  font-size: 1.4vw;
}
.image-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.image-container img {
  width: 400px;
  height: 400px;
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

.popup-content {
  background-color: #1e1e1e !important;
  padding: 20px;
  border: 2px solid #e7f8d8;
  border-radius: 10px;
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.popup-title {
  font-size: 1.1rem !important;
  color: #24e494;
}

.popup-text {
  color: #fff;
}

.card1 {
  max-width: 330px;
  min-height: 270px;
  /* width: 300px; */
  margin: 10px;
  background-color: #fff;
  box-shadow:
    0 0 5px #42977286,
    0 0 10px #42977286,
    0 0 15px #42977286;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease-in;
}
.card1:hover {
  transform: translateY(-10px);
}

.image {
  max-width: 250px;
  max-height: 200px;
  padding: 10px;
}
</style>
