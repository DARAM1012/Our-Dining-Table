<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

// 현재 URL에서 :id 가져오기
const route = useRoute()
const recipeId = parseInt(route.params.id)

const recipe = ref(null)
const ingredients = ref([])
const steps = ref([])

onMounted(() => {
  // ✅ MOCK 응답 사용 (API 없이 테스트용)
  const response = {
    result: {
      recipeId: 1063,
      recipeName: "자두 라떼",
      ingredients: "자두(200g), 우유(250g), 꿀(10g), 물(15g)",
      thumbnailUrl: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_01128_1.png",
      viewCount: 12,
      recipeType: "후식",
      recipeStep: [
        {
          stepNumber: 1,
          description: "1. 자두를 깨끗이 씻어 얼린다.",
          imageUrl: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01128_1.JPG"
        },
        {
          stepNumber: 2,
          description: "2. 얼린 자두와 꿀, 물을 믹서에 넣고 간다.",
          imageUrl: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01128_2.JPG"
        },
        {
          stepNumber: 3,
          description: "3. 믹서에 간 자두의 일부를 얼음틀에 넣고 얼린다.",
          imageUrl: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01128_3.JPG"
        },
        {
          stepNumber: 4,
          description: "4. 믹서에 간 자두를 컵에 담는다.",
          imageUrl: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01128_4.JPG"
        },
        {
          stepNumber: 5,
          description: "5. 3번을 컵에 담는다.",
          imageUrl: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01128_5.JPG"
        },
        {
          stepNumber: 6,
          description: "6. 우유를 붓는다.",
          imageUrl: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01128_6.jpg"
        }
      ]
    }
  }

  // 👇 기존 로직 유지
  recipe.value = {
    id: response.result.recipeId,
    name: response.result.recipeName,
    description: `${response.result.recipeType} · ${response.result.viewCount}회 조회`,
    imageUrl: response.result.thumbnailUrl,
  }

  ingredients.value = response.result.ingredients
    .split(',')
    .map(i => {
      const [name, amount] = i.split('(')
      return {
        name: name.trim(),
        amount: amount ? amount.replace(')', '').trim() : ''
      }
    })

  steps.value = response.result.recipeStep
})

// 2단 재료 표 분할
const half = computed(() => Math.ceil(ingredients.value.length / 2))
const left = computed(() => ingredients.value.slice(0, half.value))
const right = computed(() => ingredients.value.slice(half.value))
</script>




<template>
  <div class="token__Component-sc-1o2h3sm-0 jjTxDH">
    <img v-if="recipe" :src="recipe.imageUrl" :alt="recipe.name" />
    <section class="RecipeDetailstyle__Meta-q7sykd-0 ihKBAT">
      <div class="RecipeDetailstyle__MetaHeader-q7sykd-1 jyPkMJ">
        <div>
          <h3 v-if="recipe">{{ recipe.description }}</h3>
          <h2 v-if="recipe">{{ recipe.name }}</h2>
          <div v-else>
            <p>레시피를 찾을 수 없습니다 😢</p>
          </div>
        </div>
        <div class="RecipeDetailstyle__ActionIcons-q7sykd-2 kgiNry">
            <div class="PageSharePopupstyle__ShareBtn-sc-1bnq4am-6 hsDzVq share_btn">
                <button class="ShareIconstyle__Layout-sc-17vc8tg-0 kSiTNF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 18 18"><circle cx="4.781" cy="9" r="1.386" stroke="#000"></circle><circle cx="13.219" cy="4.136" r="1.386" stroke="#000"></circle><path stroke="#000" d="M12.142 4.811 6.057 8.324"></path><circle r="1.386" stroke="#000" transform="matrix(1 0 0 -1 13.219 13.864)"></circle><path stroke="#000" d="M12.142 13.189 6.057 9.676"></path></svg><span>공유</span></button>
                <div title="닭고기 대파덮밥" class="PageSharePopupstyle__Popup-sc-1bnq4am-2 zQxLb"></div>
            </div>
            <div title="닭고기 대파덮밥" class="PageSharePopupstyle__Popup-sc-1bnq4am-2 zQxLb"></div>
        </div>
      </div>
    </section>
    <div class="ingredient_box">
  <p class="ingredient_title">재료</p>
  <div class="igroups_title">
    <p>기본 재료</p>
  </div>
  <div class="ingredient_table">
    <ul>
      <li v-for="(item, index) in left" :key="item.name" class="row">
        <span>{{ item.name }}</span>
        <span>{{ item.amount }}</span>
        <span v-if="right[index]">{{ right[index].name }}</span>
        <span v-if="right[index]">{{ right[index].amount }}</span>
      </li>
    </ul>
  </div>
</div>

<div>
  <p class="steps_title">레시피</p>
  <div class="steps">
    <div
      v-for="step in steps"
      :key="step.stepNumber"
      class="token__Step-sc-1o2h3sm-1 ihCzrN"
    >
      <div>
        <img :src="step.imageUrl" :alt="step.description" />
      </div>
      <div>
        <div class="step_title"><p>Step {{ step.stepNumber }}</p></div>
        <p class="Text__Pre01-sc-1qy6bx2-2 enJPxd">{{ step.description }}</p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<style>
.AHWGF h3{
    margin-bottom: 8px;
    color: rgb(0, 0, 0);
    font-weight: normal;
    font-family: "Noto Serif KR", serif, Helvetica, "Helvetica Neue", Arial;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0px;
}

.jyPkMJ h2{
    width: 5.9vh;
    font-family: "Noto Serif KR", serif, Helvetica, "Helvetica Neue", Arial;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
    font-weight: bold;
    color: rgb(0, 0, 0);
}

/* 레시피 재료  */
.ingredient_box {
  margin-top: 40px;
}

.ingredient_title {
  font-weight: bold;
  font-size: 18px;
  border-bottom: 2px solid #937062;
  padding-bottom: 8px;
  margin-bottom: 16px;
}

.igroups_title p {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
}

.ingredient_table ul {
  list-style: none;
  padding: 0;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  padding: 4px 0;
  font-size: 14px;
}

.row span:nth-child(odd) {
  color: #000;
}

.row span:nth-child(even) {
  color: #777;
}

/* 레시피를 찾을 수 없습니다다 */

.jjTxDH {
    max-width: 652px;
    margin: 80px auto;
}
.jjTxDH video, .jjTxDH img {
    width: 100%;
    max-width: 652px;
}
.ihKBAT {
    position: relative;
    margin: 40px 0px;
}
.jyPkMJ {
    display: flex
;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.kgiNry {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 48px;
}
.eEAHdy {
    position: relative;
}
.hsDzVq {
    position: relative;
    z-index: 9;
}
.kSiTNF {
    display: flex
;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    cursor: pointer;
}
button {
    border: 0px;
    padding: 0px;
    background: none;
    color: inherit;
}
svg:not(:root) {
    overflow-clip-margin: content-box;
    overflow: hidden;
}
.kSiTNF span {
    font-family: "Noto Sans KR", Helvetica, "Helvetica Neue", Arial, "sans-serif";
    font-size: 10px;
    line-height: 14px;
    letter-spacing: -0.4px;
    font-weight: 500;
    color: rgb(147, 112, 98);
}
.zQxLb {
    position: absolute;
    top: -83px;
    right: 8px;
    z-index: 9;
}

.jjTxDH .igroups_title p, .jjTxDH .step_title p {
    font-family: "Noto Serif KR", serif, Helvetica, "Helvetica Neue", Arial;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: start;
    font-weight: bold;
}

@media (min-width: 1024px) {
    .jjTxDH .ingredient {
        padding: 40px 0px;
        display: grid
;
        grid-template-areas:
        "image text"
        ". text"
        ". banner";
        grid-template-columns: 300px 1fr;
        column-gap: 21px;
    }
}

/* 레시피 */
.jjTxDH .steps_title, .jjTxDH .ingredient_title {
    font-family: "Noto Serif KR", serif, Helvetica, "Helvetica Neue", Arial;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
    margin-top: 40px;
    padding-bottom: 8px;
    border-bottom: 2px solid rgb(147, 112, 98);
    text-align: start;
    font-weight: bold;
}

.jjTxDH .steps {
    width: 100%;
    display: grid
;
    grid-template-columns: 1fr;
    row-gap: 64px;
    padding-top: 24px;
    margin-bottom: 40px;
}

.jjTxDH video, .jjTxDH img {
    width: 100%;
    max-width: 652px;
}

.ihCzrN ul {
    display: grid
;
    width: 100%;
    max-width: 100%;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 8px;
    padding-top: 8px;
}
.ihCzrN ul li:nth-of-type(1) img {
    filter: brightness(100%);
}
.ihCzrN ul li {
    position: relative;
    cursor: pointer;
}

ihCzrN ul li:nth-of-type(1) img {
    filter: brightness(100%);
}
.ihCzrN ul li img {
    filter: brightness(50%);
}
.jjTxDH video, .jjTxDH img {
    width: 100%;
    max-width: 652px;
}
img, video {
    display: block;
}
.ihCzrN ul li img {
    filter: brightness(50%);
}
.jjTxDH video, .jjTxDH img {
    width: 100%;
    max-width: 652px;
}
@media (min-width: 1024px) {
    .ihCzrN {
        display: grid
;
        grid-template-columns: 300px auto;
        column-gap: 20px;
    }
}
</style>