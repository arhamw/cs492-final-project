<script setup></script>

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

@media (max-width: 600px) {
  .group-members {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
