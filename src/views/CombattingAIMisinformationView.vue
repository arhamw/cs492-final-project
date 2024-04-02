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
            <div class="square" v-for="(item, index) in items" :key="index">
              <h2>{{ item.heading }}</h2>
              <p>{{ item.body }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="additional-content">
        <div class="additional-item">
          <h2 class="glow">Google's Commitment to Safe AI</h2>
          <p>
            Google sets high standards to ensure their AI behaves responsibly. They have a dedicated
            team, the Responsibility and Safety Council, which checks every piece of AI research to
            make sure it's safe and ethical. So, when you use Google, you're interacting with AI
            that's been thoroughly checked for risks.
          </p>
        </div>
        <div class="additional-item">
          <h2 class="glow">The Trust Project</h2>
          <div class="trust-project">
            <p>
              Imagine a badge of honor for trustworthy news. The Trust Project is exactly that,
              creating clear standards to help you tell apart true news from fake stories made by
              AI. It's like having a trusted guide in the confusing world of online information.
            </p>
          </div>
          <div class="partnerships">
            <p>
              By teaming up with tech companies and educational bodies, The Trust Project is on a
              mission to make us all smarter consumers of news. They want everyone to have the tools
              to think critically and make informed decisions about what to believe online.
            </p>
          </div>
        </div>
        <div class="additional-item">
          <h2 class="glow">Digital Literacy is Key</h2>
          <div class="digital-literacy">
            <p>
              Ever felt overwhelmed by how much is fake online? You're not alone. Research by Pew
              Research Center shows that many of us might not realize how much AI is in our daily
              lives, from recommending songs to filtering emails. This can make it tricky to spot
              the fake stuff.
            </p>
          </div>
        </div>
        <div class="additional-item">
          <h2 class="glow">Learning Little Can Mean a Lot</h2>
          <div class="learning-little">
            <p>
              Just a bit of knowledge about media literacy—knowing how to question and verify online
              information—can go a long way. Studies suggest that even a little learning can make
              you much better at telling real news from fake. By understanding these initiatives and
              the importance of digital literacy, you're taking a big step toward navigating the
              online world more safely and confidently. Remember, every piece of news deserves a
              second look, and with the right tools and knowledge, you can be your own best
              fact-checker.
            </p>
          </div>
        </div>
        <div class="button-container">
          <button class="begin-button" @click="navigateToDeepFakePage">Next</button>
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
          body: 'Learn to spot the real from the fake. Just like a detective looks for clues, you can too! Check if reputable news outlets are also reporting the story, and be wary of sensational headlines. Remember, if it sounds too good (or bad) to be true, it might just be AI trying to fool you.'
        },
        {
          heading: 'Know AI Tricks',
          body: 'Artificial Intelligence can create news stories or images that seem very real but arent. Understanding that not everything we see online is true helps us stay cautious. Think of AI like a magician – its good at illusions. Our job is to look beyond the trick and seek the truth.'
        },
        {
          heading: 'Use Your Tools',
          body: 'Just like gardeners use tools to keep weeds out, we can use tools to filter out fake news. Many websites and apps can check facts for you, identifying stories or claims that are false. Embrace these tools; theyre like your digital garden shears for trimming away misinformation.'
        },
        {
          heading: 'Demand Clear Information',
          body: 'We all deserve to know where our news comes from and how decisions about what we see are made. Encouraging websites and social media to be open about how they decide what news to show us helps everyone. Think of it as asking for the recipe to a dish were being served – we have the right to know whats in it.'
        }
      ],
      selectedBox: null
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
  color: #429772;
  animation: glow 1.5s infinite alternate;
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

.additional-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
  position: relative;
  z-index: 1;
}

.additional-item {
  margin-bottom: 3rem;
  padding: 1rem;
  background-color: #333;
  border-radius: 80px;
  box-shadow:
    rgba(44, 187, 99, 0.35) 0 -5px 12px -10px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px,
    rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px,
    rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transition: transform 0.3s ease;
}

.additional-item:hover {
  transform: scale(1.05) rotate(-1deg);
}

.additional-item p {
  color: #fff;
}

.trust-project,
.partnerships,
.digital-literacy,
.learning-little {
  display: flex;
  align-items: center;
}
</style>
