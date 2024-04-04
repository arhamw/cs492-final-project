<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToAboutPage = () => {
  router.push('/about')
}
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
</style>
