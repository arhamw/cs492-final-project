<script setup>
import insta_logo from '../assets/instagram_logo.png'
</script>

<template>
  <div class="about">
    <h1 class="glow">About Us</h1>
    <div class="description">
      <p>
        Our website is dedicated to providing valuable information about various topics relating to
        AI Misinformation. Whether you're looking to learn something new, explore different ideas,
        or simply stay updated with the latest trends, we've got you covered.
      </p>
    </div>
    <div class="team-section">
      <div class="team-header">
        <h2>Meet Our Team</h2>
      </div>
      <div class="group-members">
        <div class="member">
          <img src="../assets/profile1.jpg" alt="Member 1" />
          <p>Sajeenth Shiva</p>
        </div>
        <div class="member">
          <img src="../assets/profile2.png" alt="Member 2" />
          <p>Erfan Ghafoori</p>
        </div>
        <div class="member">
          <img src="../assets/profile4.jpg" alt="Member 3" />
          <p>Akshita Choudhury</p>
        </div>
        <div class="member">
          <img src="../assets/profile3.jpeg" alt="Member 4" />
          <p>Arham Waqar</p>
        </div>
      </div>
    </div>
    <div class="insta-section">
      <h2 class="glow">Checkout our Instagram</h2>
      <a href="https://www.instagram.com/ai._wise/" target="_blank">
        <img class="image" v-if="insta_logo" :src="insta_logo" />
      </a>
    </div>
    <div>
      <h2 class="glow">References</h2>
      <p>
        (1) Breland, A., Corn, D., Friedman, D., Younes, L., de Leon, R., Sokolove, M., Métraux, J.,
        McShane, J., Vesoulis, A., Coghill, A., & Lanard, N. (2019, March 15). The bizarre and
        terrifying case of the "deepfake" video that helped bring an African nation to the brink.
        Mother Jones. Retrieved April 7, 2024, from
        https://www.motherjones.com/politics/2019/03/deepfake-gabon-ali-bongo/<br /><br />
        (2) Buljan, M. (2021, November 15). Gamification For Learning: Strategies And Examples.
        eLearning Industry. Retrieved March 12, 2024, from
        https://elearningindustry.com/gamification-for-learning-strategies-and-examples<br /><br />
        (3) Canadian Security Intelligence Service. (2023, October). The Evolution of
        Disinformation: A Deepfake Future. His Majesty the King in Right of Canada, as represented
        by the Minister of Public Safety. Retrieved from
        https://www.canada.ca/en/security-intelligence-service/corporate/publications/the-evolution-of-disinformation-a-deepfake-future<br /><br />
        (4) Guess, A. M., et al. (2020). A digital media literacy intervention increases discernment
        between mainstream and false news in the United States and India. Proceedings of the
        National Academy of Sciences, 117(27), 15536–15545.
        https://doi.org/10.1073/pnas.1920498117<br /><br />
        (5) Heikkilä, M., & Douglas, W. (2022, December 19). How to spot AI-generated text. MIT
        Technology Review. Retrieved April 7, 2024, from
        https://www.technologyreview.com/2022/12/19/1065596/how-to-spot-ai-generated-text/<br /><br />
        (6) Healey, J. (2024, February 26). Beverly Hills Middle School Rocked by AI-Generated Nude
        Images of Students. Los Angeles Times. Retrieved from
        https://www.latimes.com/california/story/2024-02-26/beverly-hills-middle-school-is-the-atest-to-be-rocked-by-deepfake-scandal<br /><br />
        (7) Islam, M. S., et al. (2020). COVID-19–Related Infodemic and Its Impact on Public Health:
        A Global Social Media Analysis. The American Journal of Tropical Medicine and Hygiene,
        103(4), 1621-1629. https://doi.org/10.4269/ajtmh.20-0812<br /><br />
        (8) Kennedy, B., Tyson, A., & Saks, E. (2023, February 15). Public awareness of artificial
        intelligence in Everyday Activities. Pew Research Center Science & Society.
        https://www.pewresearch.org/science/2023/02/15/public-awareness-of-artificial-intelligence-in-everyday-activities/
        <br /><br />
        (9) Kong, H. (2024, February 5). Deepfake Scammer Walks Off with $25 Million in
        First-of-its-Kind AI Heist. Ars Technica. Retrieved from
        https://www.arstechnica.com/information-technology/2024/02/deepfake-scammer-walks-off-with-25-million-in-first-of-its-kind-ai-heist<br /><br />
        (10) Lord, K. M., & Vogt, K. (2021). Strengthen Media Literacy to Win the Fight Against
        Misinformation. Stanford Social Innovation Review. https://doi.org/10.48558/PY1B-3G51<br /><br />
        (11) Responsibility & Safety. Google DeepMind. (n.d.).
        https://deepmind.google/about/responsibility-safety/<br /><br />
        (12) Ryan-Mosley, T. (2023, October 4). How Generative AI Is Boosting the Spread of
        Disinformation and Propaganda. MIT Technology Review. Retrieved from
        https://www.technologyreview.com/2023/10/04/1080801/generative-ai-boosting-disinformation-and-propaganda-freedom-house/<br /><br />
        (13) Sailer, M., Homner, L. The Gamification of Learning: a Meta-analysis. Educ Psychol Rev
        32, 77–112 (2020). https://doi.org/10.1007/s10648-019-09498-w<br /><br />
        (14) Savin, J. (2022, October 6). Deepfake Porn Is on the Rise – and Everyday Women Are the
        Target. Cosmopolitan. Retrieved from
        https://www.cosmopolitan.com/uk/reports/a41534567/what-are-deepfakes/<br /><br />
        (15) Serrano, J. (2022, May 27). Please Don’t Invest in This Crypto Scam Because Deepfake
        Elon Musk Told You To. Gizmodo. Retrieved from
        https://www.gizmodo.com/elon-musk-deepfake-invest-bitcoin-scam-bitvex-1848982652<br /><br />
        (16) We Stand for Integrity. The Trust Project. (2023, July 31).
        https://thetrustproject.org/<br /><br />
        (17) Wesolowski, K. (2023, April 9). Fact check: How can I spot AI-generated images? – DW –
        04/09/2023. DW. Retrieved April 7, 2024, from
        https://www.dw.com/en/fact-check-how-can-i-spot-ai-generated-images/a-65252602<br />
      </p>
    </div>
  </div>
</template>

<style>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.description {
  margin-bottom: 60px;
}
.description p {
  margin-top: -30px;
}
.team-header {
  margin-bottom: 10px;
}
.group-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  text-align: center;
}

.member {
  display: inline-block;
}

.member img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.member p {
  margin-top: 10px;
  font-weight: bold;
}

.insta-section {
  margin-top: 50px;
  margin-bottom: 30px;
  /* padding: 50px; */
  cursor: pointer;
}

.insta-section a:hover {
  text-decoration: none;
  background-color: transparent;
}

@media (max-width: 600px) {
  .group-members {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
