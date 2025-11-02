<template>
  <header class="katch-header">
    <div class="header-background">
      <div class="bg-purple"></div>
      <div class="bg-white"></div>
    </div>
    <img src="@/assets/images/katch-logo.png" alt="KATCH" class="header-logo" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KatchHeader',
});
</script>

<style lang="scss" scoped>
.katch-header {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .header-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 0;

    .bg-purple {
      flex: 1;
      background: #e3cdf3;
    }

    .bg-white {
      flex: 1;
      background: white;
      border-radius: 120px 120px 0 0;
    }
  }

  .header-logo {
    width: 180px;
    height: auto;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 15px;
    
    .header-logo {
      width: 140px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    
    .header-logo {
      width: 120px;
    }
  }
}
</style>

