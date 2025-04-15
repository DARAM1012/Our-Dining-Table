<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 현재 URL에서 :id 가져오기
const route = useRoute()
const recipeId = parseInt(route.params.id)

// 더미 데이터 (나중에 API 연결하면 여기를 axios로 대체)
const allRecipes = [
  {
    id: 1,
    name: '백합탕',
    imageUrl: 'https://static.wtable.co.kr/image/production/service/recipe/31/a7239b91-c29b-491b-bddd-7202f252338a.jpg?size=500x500',
    description: '속풀이 해장용으로 좋은 국물요리',
  },
  {
    id: 2,
    name: '오이참치샌드위치',
    imageUrl: 'https://static.wtable.co.kr/image/production/service/recipe/2787/3421dff1-e9ce-427c-a732-578d4aebeed3.jpg?size=500x500',
    description: '아삭한 오이와 고소한 참치마요의 조합',
  },
  {
    id: 3,
    name: '닭고기 대파덮밥',
    imageUrl: 'https://static.wtable.co.kr/image/production/service/recipe/2786/7f7338d6-2dff-4dd7-9034-bb11eb2c440f.jpg?size=500x500',
    description: '대파의 풍미와 부드러운 닭고기 덮밥',
  },
  {
    id: 4,
    name: '야키도리',
    imageUrl: 'https://static.wtable.co.kr/image/production/service/recipe/32/0bbeb615-d79d-461a-84ff-bc8ada30f6e0.jpg?size=500x500',
    description: '온 가족이 함께 즐기는 꼬치구이',
  },
]

const recipe = ref(null)

onMounted(() => {
  recipe.value = allRecipes.find(r => r.id === recipeId)
})
</script>

<template>
  <div style="padding: 40px">
    <h1 v-if="recipe">{{ recipe.name }}</h1>
    <img v-if="recipe" :src="recipe.imageUrl" :alt="recipe.name" style="width: 300px" />
    <p v-if="recipe">{{ recipe.description }}</p>

    <div v-else>
      <p>레시피를 찾을 수 없습니다 😢</p>
    </div>
  </div>
</template>
