<template>
  <div class="popup" @click.self="closePopup">
    <div class="popup-content">
      <p>{{ message }}</p>
      <button @click="closePopup" class="close-button">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  },
  methods: {
    closePopup() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the popup is on top of other content */
}

.popup-content {
  text-align: center;
}

.popup p {
  margin-bottom: 15px;
}

.popup .close-button {
  padding: 8px 12px; /* Adjusted padding for the close button */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: auto; /* Set width to auto */
}
</style>
