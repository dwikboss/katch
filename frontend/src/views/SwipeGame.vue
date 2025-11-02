<template>
  <div class="page swipe-game">
    <div class="header-section">
      <Header />
    </div>
    
    <div class="main-section">
      <div class="content">
      <!-- Card Stack -->
      <div class="card-stack">
        <div 
          v-for="(card, index) in cards"
          :key="card.id"
          class="artist-card"
          :style="getCardStyle(index)"
          :class="{ 'top-card': index === cards.length - 1 }"
          @mousedown="index === cards.length - 1 ? startDrag($event) : null"
          @touchstart="index === cards.length - 1 ? startDrag($event) : null"
        >
          <img 
            :src="card.image" 
            :alt="card.name" 
            class="artist-image"
          />
          
          <div class="card-overlay">
            <h2 class="artist-name">{{ card.name }}</h2>
            <p class="artist-genre">{{ card.genre }}</p>
          </div>
          
          <!-- Action buttons on the side (only show on top card) -->
          <div v-if="index === cards.length - 1" class="side-actions">
            <button class="action-btn info-btn" @click.stop>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="action-btn music-btn" @click.stop>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18V5L21 3V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Swipe Actions (overlaying the card) -->
        <button class="swipe-btn dislike-btn" @click="swipeLeft">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14L34 34M14 34L34 14" stroke="white" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </button>
        
        <button class="swipe-btn like-btn" @click="swipeRight">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 38.5C24 38.5 7 28 7 16.5C7 13.7152 8.10625 11.0445 10.0754 9.07538C12.0445 7.10625 14.7152 6 17.5 6C20.68 6 23.32 7.64 24 10.08C24.68 7.64 27.32 6 30.5 6C33.2848 6 35.9555 7.10625 37.9246 9.07538C39.8938 11.0445 41 13.7152 41 16.5C41 28 24 38.5 24 38.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'SwipeGameView',
  components: {
    Header,
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      offsetX: 0,
      offsetY: 0,
      preferences: [] as string[],
      likedCards: [] as any[],
      dislikedCards: [] as any[],
      cards: [
        {
          id: 1,
          name: 'CHAPPEL ROAN',
          genre: 'Pop',
          image: 'https://i0.wp.com/industryme.co.uk/wp-content/uploads/2024/06/Chappell.jpeg?fit=640%2C640&ssl=1',
        },
        {
          id: 2,
          name: 'LEWIS CAPALDI',
          genre: 'Pop',
          image: 'https://mixbeep.com/media/singerpics/pic-lewis-capaldi-v0t8fq.webp',
        },
        {
          id: 3,
          name: 'ALEX WARREN',
          genre: 'Pop, Country, Rock',
          image: 'https://ca-times.brightspotcdn.com/dims4/default/c3f3da6/2147483647/strip/false/crop/4299x6459+0+0/resize/989x1486!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcc%2F04%2F276ba8e34b3bbbed84886640c90b%2F1510940-et-alex-warren-portraits-5321.jpg',
        },
        {
          id: 4,
          name: 'CHARLI XCX',
          genre: 'Hyperpop, Pop',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Charli_XCX-4059_%28cropped%29.jpg/960px-Charli_XCX-4059_%28cropped%29.jpg',
        },
        {
          id: 5,
          name: 'DOJA CAT',
          genre: 'Pop, HIP-HOP',
          image: 'https://api.time.com/wp-content/uploads/2023/04/doja-cat-time100-2023.jpg',
        },
        {
          id: 6,
          name: 'BAD BUNNY',
          genre: 'Pop, R&B',
          image: 'https://image.demorgen.be/179968031/width/2480/bad-bunny-is-wereldwijd-de-meest-gestreamde-artiest-van-dit-jaar',
        },
        {
          id: 7,
          name: 'ED SHEERAN',
          genre: 'Pop',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/960px-Ed_Sheeran-6886_%28cropped%29.jpg',
        },
        {
          id: 8,
          name: 'HARRY STYLES',
          genre: 'Pop',
          image: 'https://cdn.britannica.com/07/222807-050-50D5DC99/English-singer-songwriter-actor-Harry-Styles-2020.jpg',
        },
        {
          id: 9,
          name: 'TAYLOR SWIFT',
          genre: 'Pop',
          image: 'https://m.media-amazon.com/images/M/MV5BYWYwYzYzMjUtNWE0MS00NmJlLTljNGMtNzliYjg5NzQ1OWY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: 10,
          name: 'SABRINA CARPENTER',
          genre: 'Pop',
          image: 'https://hips.hearstapps.com/hmg-prod/images/sabrina-carpenter-attends-the-2024-mtv-video-music-awards-news-photo-1727886045.jpg?crop=0.828xw:0.553xh;0.109xw,0.0386xh&resize=640',
        },
      ],
      stackRotations: [-3, 2, -4, 3, -2, 4, -3, 2, -1, 0],
    };
  },
  mounted() {
    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchmove', this.onDrag);
    document.addEventListener('touchend', this.stopDrag);
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchmove', this.onDrag);
    document.removeEventListener('touchend', this.stopDrag);
  },
  methods: {
    getCardStyle(index: number) {
      const isTopCard = index === this.cards.length - 1;
      const reverseIndex = this.cards.length - 1 - index;
      
      // Only apply drag style to the top card
      if (isTopCard && (this.isDragging || this.offsetX !== 0 || this.offsetY !== 0)) {
        const rotation = this.offsetX / 20 + this.stackRotations[index];
        const opacity = Math.max(0.5, 1 - Math.abs(this.offsetX) / 300);
        
        return {
          transform: `translate(${this.offsetX}px, ${this.offsetY}px) rotate(${rotation}deg)`,
          transition: this.isDragging ? 'none' : 'all 0.3s ease',
          opacity: opacity,
          zIndex: 100 + index,
        };
      }
      
      // Stack cards messily behind
      const stackOffset = reverseIndex * 3;
      const rotation = this.stackRotations[index];
      const scale = 1 - reverseIndex * 0.02;
      
      return {
        transform: `translateY(-${stackOffset}px) rotate(${rotation}deg) scale(${scale})`,
        zIndex: index,
        transition: 'all 0.3s ease',
      };
    },
    
    startDrag(event: MouseEvent | TouchEvent) {
      this.isDragging = true;
      
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
      
      this.startX = clientX - this.offsetX;
      this.startY = clientY - this.offsetY;
    },
    
    onDrag(event: MouseEvent | TouchEvent) {
      if (!this.isDragging) return;
      
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
      
      this.currentX = clientX;
      this.currentY = clientY;
      
      this.offsetX = this.currentX - this.startX;
      this.offsetY = this.currentY - this.startY;
    },
    
    stopDrag() {
      if (!this.isDragging) return;
      
      this.isDragging = false;
      
      const swipeThreshold = 100;
      
      if (Math.abs(this.offsetX) > swipeThreshold) {
        // Complete the swipe
        if (this.offsetX > 0) {
          this.swipeRight();
        } else {
          this.swipeLeft();
        }
      } else {
        // Return to center
        this.offsetX = 0;
        this.offsetY = 0;
      }
    },
    
    swipeLeft() {
      // Animate card off screen
      this.offsetX = -1000;
      setTimeout(() => {
        this.handleDislike();
        this.resetCard();
      }, 300);
    },
    
    swipeRight() {
      // Animate card off screen
      this.offsetX = 1000;
      setTimeout(() => {
        this.handleLike();
        this.resetCard();
      }, 300);
    },
    
    resetCard() {
      this.offsetX = 0;
      this.offsetY = 0;
      this.isDragging = false;
      
      // Remove the top card
      if (this.cards.length > 0) {
        this.cards.pop();
      }
      
      // Check if we're done
      if (this.cards.length === 0) {
        // Navigate to results page with preferences
        this.$router.push({
          name: 'RESULTS',
          params: {
            preferences: this.preferences,
          },
        });
      }
    },
    
    handleDislike() {
      const currentCard = this.cards[this.cards.length - 1];
      if (currentCard) {
        this.dislikedCards.push(currentCard);
        console.log('Disliked:', currentCard.name);
      }
    },
    
    handleLike() {
      const currentCard = this.cards[this.cards.length - 1];
      if (currentCard) {
        this.likedCards.push(currentCard);
        this.preferences.push(currentCard.genre);
        console.log('Liked:', currentCard.name, '- Genre:', currentCard.genre);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.page.swipe-game {
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
    position: relative;
    padding: 0 20px;
  }

  .card-stack {
    position: relative;
    width: 75%;
    height: 80%;
  }

  .artist-card {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 75px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    background: #f0f0f0;
    user-select: none;
    
    &.top-card {
      cursor: grab;
      touch-action: none;

      &:active {
        cursor: grabbing;
      }
    }

    .artist-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }

    .card-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 70px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
      color: white;
    }

    .artist-name {
      font-size: 64px;
      font-weight: 900;
      margin: 0 0 8px 0;
      line-height: 1.1;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .artist-genre {
      font-size: 32px;
      font-weight: 400;
      margin: 0;
      opacity: 0.95;
    }

    .side-actions {
      position: absolute;
      right: 50px;
      bottom: 75px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .action-btn {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      border: none;
      background: rgba(100, 100, 100, 0.6);
      backdrop-filter: blur(10px);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(100, 100, 100, 0.8);
        transform: scale(1.1);
      }
    }
  }

  .swipe-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    z-index: 999;

    &.dislike-btn {
      left: -60px;
      background: linear-gradient(180deg, #b99dd4 0%, #a88bc4 100%);

      &:hover {
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 12px 25px rgba(185, 157, 212, 0.4);
      }

      &:active {
        transform: translateY(-50%) scale(1);
      }
    }

    &.like-btn {
      right: -60px;
      background: linear-gradient(180deg, #b99dd4 0%, #a88bc4 100%);

      &:hover {
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 12px 25px rgba(185, 157, 212, 0.4);
      }

      &:active {
        transform: translateY(-50%) scale(1);
      }
    }
  }

  // Responsive design
  @media (max-width: 768px) {
    .card-stack {
      max-width: 400px;
      height: 70%;
    }

    .artist-card {
      .artist-name {
        font-size: 36px;
      }

      .artist-genre {
        font-size: 16px;
      }

      .side-actions {
        bottom: 120px;
        right: 15px;
      }

      .action-btn {
        width: 45px;
        height: 45px;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .swipe-btn {
      width: 70px;
      height: 70px;

      &.dislike-btn {
        left: 10px;
      }

      &.like-btn {
        right: 10px;
      }

      svg {
        width: 36px;
        height: 36px;
      }
    }
  }
}
</style>

