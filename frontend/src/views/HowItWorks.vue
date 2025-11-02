<template>
  <div class="page how-it-works">
    <div class="header-section">
      <Header />
    </div>
    
    <div class="main-section">
      <div class="content">
        <div class="content-inner">
          <h1 class="title">Hoe werkt het?</h1>
          
          <p class="description">
            Je krijgt verschillende artiesten te zien. Swip deze artiesten naar rechts als je hun muziek leuk vindt en naar links als je hun muziek niet leuk vindt. Als je de artiest niet kent kan je een audio fragment afspelen om erachter te komen wat voor muziek ze maken.
          </p>
          
          <p class="description">
            Aan het einde krijg jij een Kpop groep aangeraden die helemaal bij jouw muzieksmaak past!
          </p>
          
          <button class="next-button" @click="handleNext">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10L25 20L15 30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Cloud Character -->
      <div class="cloud-character">
        <img src="@/assets/images/cloud.png" alt="cloud character" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'HowItWorksView',
  components: {
    Header,
  },
  methods: {
    handleNext() {
      this.$router.push('/game');
    },
  },
});
</script>

<style lang="scss" scoped>
.page.how-it-works {
  background: #e3cdf3;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .header-section {
    height: 15vh;
    width: 100%;
    flex-shrink: 0;
  }

  .main-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    width: 100%;
    padding: 0 150px 0 150px;
  }

  .content-inner {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    font-size: 64px;
    font-weight: 400;
    color: #333;
    margin: 0 0 40px 0;
    text-align: left;
  }

  .description {
    font-size: 20px;
    line-height: 1.8;
    color: #555;
    margin: 0 0 30px 0;
    text-align: left;
  }

  .next-button {
    background: linear-gradient(180deg, #8b6baa 0%, #7b5b9a 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(123, 79, 160, 0.3);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(123, 79, 160, 0.4);
      background: linear-gradient(180deg, #9b7bba 0%, #8b6baa 100%);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 6px 15px rgba(123, 79, 160, 0.3);
    }

    svg {
      display: block;
    }
  }

  .cloud-character {
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 850px;
      height: auto;
      display: block;
    }
  }

  // Responsive design
  @media (max-width: 768px) {
    .content {
      padding: 15px;
    }

    .title {
      font-size: 36px;
      margin-bottom: 30px;
    }

    .description {
      font-size: 16px;
    }

    .next-button {
      width: 70px;
      height: 70px;

      svg {
        width: 35px;
        height: 35px;
      }
    }
  }

  @media (max-width: 480px) {

    .title {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .description {
      font-size: 14px;
      line-height: 1.6;
    }

    .next-button {
      width: 60px;
      height: 60px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>

