<template>
  <div class="page results">
    <div class="header-section">
      <Header />
    </div>
    
    <div class="main-section">
      <div class="content">
        <div class="result-card">
          <img 
            :src="matchedGroup.image" 
            :alt="matchedGroup.name" 
            class="group-image"
          />
          
          <div class="card-overlay">
            <h1 class="group-name">{{ matchedGroup.name }}</h1>
            <p class="members">{{ matchedGroup.members }}</p>
            <p class="description">{{ matchedGroup.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'ResultsView',
  components: {
    Header,
  },
  data() {
    return {
      matchedGroup: {
        name: 'LE SSERAFIM',
        members: 'CHAEWON, SAKURA, YUNJIN, KAZUHA, EUNCHAE',
        description: 'LE SSERAFIM is een krachtige en stijlvolle K-pop girlgroup die bekendstaat om hun boodschap van zelfvertrouwen en doorzettingsvermogen. De vijf leden combineren elegante visuals met sterke choreografieën en moderne pop- en R&B-sounds. Met nummers als "ANTIFRAGILE" en "EASY" laten ze zien dat kwetsbaarheid juist kracht kan zijn.',
        image: 'https://thebiaslist.com/wp-content/uploads/2025/06/le-sserafim-different.jpg',
        genres: ['K-pop', 'Pop', 'R&B', 'Dance'],
      },
      kpopGroups: [
        {
          name: 'LE SSERAFIM',
          members: 'CHAEWON, SAKURA, YUNJIN, KAZUHA, EUNCHAE',
          description: 'LE SSERAFIM is een krachtige en stijlvolle K-pop girlgroup die bekendstaat om hun boodschap van zelfvertrouwen en doorzettingsvermogen. De vijf leden combineren elegante visuals met sterke choreografieën en moderne pop- en R&B-sounds. Met nummers als "ANTIFRAGILE" en "EASY" laten ze zien dat kwetsbaarheid juist kracht kan zijn.',
          image: 'https://thebiaslist.com/wp-content/uploads/2025/06/le-sserafim-different.jpg',
          genres: ['K-pop', 'Pop', 'R&B', 'Dance'],
        },
        {
          name: 'NewJeans',
          members: 'MINJI, HANNI, DANIELLE, HAERIN, HYEIN',
          description: 'NewJeans brengt een frisse wind door K-pop met hun Y2K-geïnspireerde sound en aesthetic. Deze jonge girlgroup combineert nostalgische vibes met moderne producties, resulterend in catchy nummers zoals "Attention" en "Hype Boy". Hun natuurlijke charme en innovatieve muziekstijl maken hen uniek.',
          image: 'https://m.media-amazon.com/images/M/MV5BN2I1YTFlY2UtMjQ1MS00ZTZiLWJiNjMtNDhjZGEzODY1NmQxXkEyXkFqcGc@._V1_.jpg',
          genres: ['K-pop', 'Pop', 'R&B', 'Y2K'],
        },
        {
          name: 'SEVENTEEN',
          members: 'S.COUPS, JEONGHAN, JOSHUA, JUN, HOSHI, WONWOO, WOOZI, DK, MINGYU, THE8, SEUNGKWAN, VERNON, DINO',
          description: 'SEVENTEEN is een 13-koppige boyband bekend om hun self-producing vaardigheden. Ze zijn verdeeld in drie units (Hip-hop, Vocal, Performance) en leveren dynamische performances. Met hun synchrone choreografieën en diverse muziekstijlen van energieke dance tracks tot emotionele ballads zijn ze een kracht in K-pop.',
          image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/3/2024/09/26123523/seventeen-always-yours-promo-landscape-credit-pledis-entertainment-1.jpeg',
          genres: ['K-pop', 'Hip-hop', 'Pop', 'Dance', 'Ballad'],
        },
        {
          name: 'IVE',
          members: 'YUJIN, GAEUL, REI, WONYOUNG, LIZ, LEESEO',
          description: 'IVE straalt zelfvertrouwen uit met hun "I HAVE IT" concept. Deze zeskoppige girlgroup combineert glamoureuze visuals met sterke vocalen en trendy pop-sounds. Nummers als "LOVE DIVE" en "After LIKE" tonen hun vermogen om addictieve hooks te creëren en een statement te maken.',
          image: 'https://kpopofficial.com/wp-content/uploads/2025/09/1-IVE-Members-Group-Photo.webp',
          genres: ['K-pop', 'Pop', 'Dance-pop'],
        },
        {
          name: 'TOMORROW X TOGETHER',
          members: 'YEONJUN, SOOBIN, BEOMGYU, TAEHYUN, HUENINGKAI',
          description: 'TOMORROW X TOGETHER (TXT) vertelt verhalen over de ervaringen en emoties van jongvolwassenen. Met een mix van pop, rock, en EDM-elementen creëren ze een unieke sound. Hun conceptuele albums en energieke performances maken hen een innovatieve kracht in de vierde generatie K-pop.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tomorrow_X_Together_at_a_Dior_event%2C_April_18%2C_2025.png',
          genres: ['K-pop', 'Pop', 'Rock', 'EDM'],
        },
        {
          name: '(G)I-DLE',
          members: 'MIYEON, MINNIE, SOYEON, YUQI, SHUHUA',
          description: '(G)I-DLE staat bekend om hun artistieke vrijheid en unieke concepten. Leader Soyeon schrijft en produceert veel van hun muziek. Van de krachtige "TOMBOY" tot het experimentele "Queencard", ze zijn niet bang om grenzen te verleggen en hun eigen identiteit te definiëren.',
          image: 'https://nolae.eu/cdn/shop/articles/gi-dle-beginnt-2024-mit-dem-zweiten-studio-album-2-889229.jpg?v=1704927358&width=3874',
          genres: ['K-pop', 'Hip-hop', 'EDM', 'Experimental'],
        },
      ],
    };
  },
  methods: {
    calculateMatch(preferences: string[]) {
      // If no preferences, return random group
      if (!preferences || preferences.length === 0) {
        const randomIndex = Math.floor(Math.random() * this.kpopGroups.length);
        return this.kpopGroups[randomIndex];
      }

      // Extract all genres from preferences (they're in format "K-pop, EDM, Hip-hop")
      const likedGenres = preferences
        .flatMap(pref => pref.split(',').map(g => g.trim().toLowerCase()))
        .filter(g => g.length > 0);

      // Count genre occurrences to find most liked genres
      const genreCount: { [key: string]: number } = {};
      likedGenres.forEach(genre => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });

      console.log('Liked genres:', genreCount);

      // Calculate match score for each group
      const groupScores = this.kpopGroups.map(group => {
        let score = 0;
        
        // Check how many of the group's genres match the user's preferences
        group.genres.forEach(groupGenre => {
          const normalizedGroupGenre = groupGenre.toLowerCase();
          
          // Check if this genre matches any of the user's liked genres
          Object.keys(genreCount).forEach(likedGenre => {
            if (normalizedGroupGenre.includes(likedGenre) || likedGenre.includes(normalizedGroupGenre)) {
              // Weight by how many times the user liked this genre
              score += genreCount[likedGenre];
            }
          });
        });

        console.log(`${group.name}: ${score} points`);
        return { group, score };
      });

      // Sort by score (highest first)
      groupScores.sort((a, b) => b.score - a.score);

      // Get groups with the highest score
      const maxScore = groupScores[0].score;
      const topGroups = groupScores.filter(g => g.score === maxScore);

      // If multiple groups have the same score, pick randomly from them
      const selectedGroup = topGroups[Math.floor(Math.random() * topGroups.length)];
      
      console.log('Selected group:', selectedGroup.group.name, 'with score:', selectedGroup.score);
      
      return selectedGroup.group;
    },
  },
  mounted() {
    // Get preferences from router params or localStorage
    const preferences = this.$route.params.preferences as string[] || [];
    
    console.log('User preferences:', preferences);
    
    // Calculate best match based on preferences
    this.matchedGroup = this.calculateMatch(preferences);
  },
});
</script>

<style lang="scss" scoped>
.page.results {
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
    justify-content: flex-end;
  }

  .result-card {
    position: relative;
    width: 90%;
    height: 100%;
    border-radius: 75px 75px  0 0;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);

    .group-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%);
      padding: 80px 60px;
      color: white;
    }

    .group-name {
      font-size: 72px;
      font-weight: 900;
      margin: 0 0 24px 0;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: white;
    }

    .members {
      font-size: 32px;
      font-weight: 600;
      margin: 0 0 75px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.95;
    }

    .description {
      font-size: 26px;
      font-weight: 400;
      line-height: 2;
      margin: 0;
      opacity: 0.9;
    }
  }


}
</style>

