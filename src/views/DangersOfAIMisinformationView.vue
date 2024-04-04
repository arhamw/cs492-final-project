<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToCombattingAIPage = () => {
  router.push('/combatting-ai')
}
</script>

<template>
  <div class="main">
    <section class="content">
      <div class="title">
        <h1 class="glow">The AI Mirage: Unveiling Misinformation Dangers</h1>
      </div>
      <p>
        AI-generated misinformation poses dangers to society by challenging our ability to
        distinguish between authentic and fabricated information. This erodes trust in media and
        institutions, influencing political landscapes, endangering public health, and violating
        personal privacy and security.
      </p>
      <div class="card-container">
        <div class="card" v-for="(card, index) in cards" :key="index" @click="openPopup(card)">
          <div class="card-icon">{{ card.title }}</div>
          <div class="card-content">
            <p class="card-summary">
              {{ card.context }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="showPopup" class="popup" @click="closePopup">
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
          </div>
        </div>
      </div>
      <div class="button-container">
        <button class="begin-button" @click="navigateToCombattingAIPage">Next</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Healthcare Misinformation: COVID-19 Treatment Claims',
          context:
            'During the COVID-19 pandemic, a video purportedly from a reputable health organization claimed a breakthrough treatment that was later identified as harmful. The video, sophisticatedly edited, included logos and elements that made it appear legitimate.',
          debunking:
            "Healthcare professionals and fact-checking organizations quickly challenged the video, citing lack of evidence in peer-reviewed medical journals and discrepancies in the treatment protocols mentioned. The real health organization issued a statement denying the claims, and digital forensic analysis revealed the video's AI-generated origins.",
          lessons_learned:
            'The rapid spread of this harmful misinformation highlighted the critical need for public health literacy and the dangers of unchecked AI-generated content. It emphasized the importance of consulting trusted healthcare sources and the role of authoritative bodies in providing clear, accurate information during crises.',
          media: ''
        },
        {
          title: 'Financial Fraud: The CEO Voice Clone Scam',
          context:
            "In 2020, a UK energy firm was defrauded of $243,000 after the company's CEO received a phone call from what he believed was the voice of the firm's parent company's chief executive. The caller demanded an urgent transfer of funds to a supposed supplier, citing confidentiality and the need for swift action. The voice was later identified as a deepfake, synthetically generated to mimic the parent company CEO's voice.",
          debunking:
            "The fraud came to light after the transaction when the supposed urgency did not match the reality, prompting an internal investigation that revealed the call's AI origins.",
          lessons_learned:
            'This incident highlighted the sophistication of financial scams utilizing AI and the need for enhanced security protocols, including multi-factor authentication and verbal confirmation through known, secure channels before executing significant transactions.',
          media: ''
        },
        {
          title: 'Misleading Crisis Footage: The Syrian Conflict',
          context:
            'During the Syrian conflict, a video surfaced online purporting to show a chemical attack by the Syrian government on civilians. The video, later identified as a deepfake, was alarmingly realistic, causing international outrage and nearly leading to foreign military intervention.',
          debunking:
            'Independent investigators and digital forensic experts analyzed the video, identifying inconsistencies with real events and the chemical properties of the supposed attack. Additionally, NGOs on the ground were unable to verify the incident, leading to the conclusion that the footage was fabricated.',
          lessons_learned:
            "This incident demonstrated the potential of deepfake technology to escalate conflicts and even trigger international crises based on false premises. It highlighted the need for rigorous verification of content before it's used as a basis for policy decisions or military action, emphasizing the critical role of on-the-ground reporting and digital forensic analysis in conflict zones.",
          media: ''
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
  margin-bottom: 0.5rem;
  font-size: 3.5rem;
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

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.card {
  max-width: 330px;
  min-height: 410px;
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

.card:hover {
  transform: translateY(-10px);
}

.card-icon {
  /* Icon styles */
  color: #333;
  background-color: #24e494;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 1.1rem;
}

.card-content {
  padding: 20px;
}

.card-title {
  margin-top: 0;
  color: #333;
}

.card-summary {
  color: #333;
  font-size: 1em;
  line-height: 1.5;
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
  color: #24e494;
}

.popup-text {
  color: #fff;
}
</style>
