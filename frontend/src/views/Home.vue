<template>
  <div class="page home">
    <!-- White egg background shape -->
    <div class="egg-background"></div>

    <div class="content">
      <!-- Logo/Title -->
      <div class="logo-section">
        <img class="katch-logo" src="@/assets/images/katch-logo.png" alt="KATCH" />
      </div>

      <!-- Tagline -->
      <h2 class="tagline">Find your K-pop match!</h2>

      <!-- Start Button -->
      <button class="start-button" @click="handleStart">START</button>
    </div>

    <!-- Cloud Character -->
    <div class="cloud-character">
      <img src="@/assets/images/cloud.png" alt="cloud character" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  methods: {
    handleStart() {
      this.$router.push('/how-it-works');
    },
  },
});
</script>

<style lang="scss" scoped>
.page.home {
  background: #e3cdf3;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60px 20px 0;

  .egg-background {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 120%;
    height: 80%;
    background: white;
    border-radius: 999px 999px 0 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
    margin-top: 40px;
  }

  .logo-section {
    margin-bottom: 20px;
    margin-top: 50px;

    .katch-logo {
      width: 750px;
      height: auto;
      display: block;
    }
  }

  .tagline {
    font-size: 64px;
    font-weight: 400;
    color: #5a4a5f;
    margin: 0 0 60px 0;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .start-button {
    background: linear-gradient(180deg, #8b6baa 0%, #7b5b9a 100%);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 20px 80px;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 4px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(123, 79, 160, 0.3);
    transition: all 0.3s ease;
    text-transform: uppercase;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(123, 79, 160, 0.4);
      background: linear-gradient(180deg, #9b7bba 0%, #8b6baa 100%);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 6px 15px rgba(123, 79, 160, 0.3);
    }
  }

  .cloud-character {
    width: 100%;
    max-width: 850px;
    z-index: 1;
    margin-top: auto;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  // Responsive design
  @media (max-width: 768px) {
    padding: 40px 20px 0;

    .egg-background {
      height: 55%;
    }

    .logo-section .katch-logo {
      max-width: 300px;
    }

    .tagline {
      font-size: 48px;
      margin-bottom: 40px;
    }

    .start-button {
      padding: 16px 60px;
      font-size: 28px;
      letter-spacing: 3px;
    }
  }

  @media (max-width: 480px) {
    .egg-background {
      height: 50%;
    }

    .logo-section .katch-logo {
      max-width: 250px;
    }

    .tagline {
      font-size: 48px;
      margin-bottom: 30px;
    }

    .start-button {
      padding: 14px 50px;
      font-size: 24px;
      letter-spacing: 2px;
    }
  }
}
</style>
