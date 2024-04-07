<script setup>
import { ref } from 'vue'
import trump from '../assets/trump.png'
import trump2 from '../assets/trump2.jpg'
import trump3 from '../assets/trump3.jpg'
import gaza from '../assets/gaza.png'
import gaza2 from '../assets/gaza2.jpg'
import gaza3 from '../assets/gaza3.jpg'
import mark from '../assets/mark.png'
import mark2 from '../assets/mark2.jpg'
import mark3 from '../assets/mark3.jpg'
import pope from '../assets/pope.png'
import pope2 from '../assets/pope2.jpg'
import pope3 from '../assets/pope3.jpg'
import gabon1 from '../assets/gabon1.png'
import gabon2 from '../assets/gabon2.png'
import celebrity_deepfake from '../assets/celebrity_deepfake.png'
import Popup from '../components/PopUpMessage.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToAiContent = () => {
  router.push('/ai-generated-content')
}

const score = ref(0)
const round = ref(1)
const correctIndex = ref(0)
const displayedImages = ref([])
const showPopup = ref(false)
const popupMessage = ref('')

const enableToggle = true

const loadImages = () => {
  displayedImages.value = []

  const fakeImages = [trump, gaza, mark, pope] // Fake images

  const roundImages = [
    [trump2, trump3], // Round 1: Trump
    [gaza2, gaza3], // Round 2: Gaza
    [mark2, mark3], // Round 3: Mark
    [pope2, pope3] // Round 4: Pope
  ]

  const selectedRoundImages = roundImages[round.value - 1]

  displayedImages.value.push(...selectedRoundImages)

  const fakeImage = fakeImages[round.value - 1]
  displayedImages.value.push(fakeImage)

  shuffleArray(displayedImages.value)

  correctIndex.value = displayedImages.value.findIndex((image) => image === fakeImage)
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const hintMessages = [
  [
    'Hint 1: Examine if there are any facial Inconsistencies like the head not aligned properly with the body or the lighting on the face being different',
    'Hint 2: Look at the edges and borders carefully, and look for any unusual blurring or sharpness which incidents digital manipulation'
  ],
  [
    'Hint 1: Look at Smoke and Explosion Texture, if its too smooth or has a repeating pattern, it can be artificial.',
    'Hint 2: Examine the Interaction with the Environment, including casting shadows, causing visible damage, or affecting nearby objects.'
  ],
  [
    'Hint 1: Check for any irregularities in facial symmetry, as well as discrepancies in the size and placement of eyes, nose, mouth, and ears.',
    'Hint 2: The skin texture in a deepfake can often appear too smooth or uniform. Look for a lack of pores, wrinkles, and other skin features that are typical in real images.'
  ],
  [
    'Hint 1: Analyse if there are any Contextual Anomalies, meaning if the image seems out of character or unlike their public appearances, its fake.',
    'Hint 2: Look at Clothing Texture and Draping, If the clothing looks too stiff, too puffy, or unnaturally smooth, it may have been digitally altered.'
  ]
]

const checkAnswer = (index) => {
  if (index === correctIndex.value) {
    // If correct fake image is clicked
    score.value++
    round.value++
    loadImages()
  } else {
    // If any other image is clicked
    const roundIndex = round.value - 1
    const hintIndex = Math.floor(Math.random() * hintMessages[roundIndex].length)
    popupMessage.value = hintMessages[roundIndex][hintIndex]
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
      <div class="additional-item2" v-for="(card, index) in cards" :key="index">
        <h2 class="glow">{{ card.title }}</h2>
        <div class="learning-little">
          <p>
            <span class="subheadings">Context:</span>
            {{ card.context }}
            <br />
            <span class="subheadings">Debunking:</span>
            {{ card.debunking }}
            <br />
            <span class="subheadings">Lessons learned:</span>
            {{ card.lessons_learned }}
            <br />
            <img class="image" v-if="card.media" :src="card.media" />
            <img class="image" v-if="card.media2" :src="card.media2" />
          </p>
        </div>
      </div>
    </section>

    <section class="game">
      <Popup
        v-if="showPopup"
        :message1="hintMessages[round - 1][0]"
        :message2="hintMessages[round - 1][1]"
        :enableToggle="enableToggle"
        @close="closePopup"
        ref="popup"
      />
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
      selectedBox: null,
      enableToggle: true,
      popupToggleHintMessage: ''
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
    },
    toggleHint() {
      this.$refs.popup.toggleHint()
      this.popupToggleHintMessage = this.$refs.popup.currentMessage
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

.additional-item2 {
  margin-bottom: 3rem;
  padding: 1rem;
  background-color: #333;
  border-radius: 30px;
  box-shadow:
    rgba(44, 187, 99, 0.35) 0 -5px 12px -10px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px,
    rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px,
    rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transition: transform 0.3s ease;
  max-width: 1000px;
}

.additional-item2:hover {
  transform: scale(1.05);
}

.additional-item2 p {
  color: #fff;
}

.subheadings {
  color: #adadad;
}
</style>
