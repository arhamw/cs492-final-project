<template>
  <div class="popup-overlay" @click="closePopup">
    <div class="popup-content">
      <div class="popup-title">Message</div>
      <div class="popup-text">{{ currentMessage }}</div>
      <button v-if="enableToggle" @click.stop="toggleHint">Toggle Hint</button>
      <button @click.stop="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message1: {
      type: String,
      required: true
    },
    message2: {
      type: String,
      required: true
    },
    enableToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showFirstHint: true
    }
  },
  computed: {
    currentMessage() {
      return this.showFirstHint ? this.message1 : this.message2
    }
  },
  methods: {
    closePopup() {
      this.$emit('close')
    },
    toggleHint() {
      this.showFirstHint = !this.showFirstHint
    }
  }
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.popup-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.popup-text {
  margin-bottom: 10px;
}

button {
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
