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
    imageUrl:
      'https://static.wtable.co.kr/image/production/service/recipe/31/a7239b91-c29b-491b-bddd-7202f252338a.jpg?size=500x500',
    description: '속풀이 해장용으로 좋은 국물요리',
  },
  {
    id: 2,
    name: '오이참치샌드위치',
    imageUrl:
      'https://static.wtable.co.kr/image/production/service/recipe/2787/3421dff1-e9ce-427c-a732-578d4aebeed3.jpg?size=500x500',
    description: '아삭한 오이와 고소한 참치마요의 조합',
  },
  {
    id: 3,
    name: '닭고기 대파덮밥',
    imageUrl:
      'https://static.wtable.co.kr/image/production/service/recipe/2786/7f7338d6-2dff-4dd7-9034-bb11eb2c440f.jpg?size=500x500',
    description: '대파의 풍미와 부드러운 닭고기 덮밥',
  },
  {
    id: 4,
    name: '야키도리',
    imageUrl:
      'https://static.wtable.co.kr/image/production/service/recipe/32/0bbeb615-d79d-461a-84ff-bc8ada30f6e0.jpg?size=500x500',
    description: '온 가족이 함께 즐기는 꼬치구이',
  },
]

const recipe = ref(null)

onMounted(() => {
  recipe.value = allRecipes.find(r => r.id === recipeId)
})
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
      <div class="RecipeDetailstyle__Summary-q7sykd-5 iObVZL">
            <div class="RecipeDetailstyle__Level-q7sykd-6 jZXUqi">
                <p>난이도</p>
            </div>
            <div class="RecipeDetailstyle__Level-q7sykd-6 RecipeDetailstyle__Time-q7sykd-7 cEiCHw">
                <p>소요시간</p><p>25분</p>
            </div>
        </div>
    </section>
    <div>
        <p class="ingredient_title">재료</p>
        <div class="ingredient">
            <li>
                <div class="igroups_title">
                    <p>기본 재료 </p>
                </div>
                <ul>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>닭다리살(또는 닭가슴살)</div>
                    <div>1팩(300g)</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>대파</div>
                    <div>1~2대</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>밥</div>
                    <div>2공기</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>소금, 후춧가루</div>
                    <div>약간씩씩</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>식용유</div>
                    <div>약간</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>통깨</div>
                    <div>약간</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>간장</div>
                    <div>3큰술</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>맛술</div>
                    <div>2큰술</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>설탕</div>
                    <div>1큰술</div>
                   </div> 
                </li>
                <li>
                   <div class="Text__Description02-sc-1qy6bx2-0 fCbbYE">
                    <div>물</div>
                    <div>2큰술</div>
                   </div> 
                </li>
            </ul>
            </li>
        </div>
    </div>
    <div>
        <p class="steps_title">레시피</p>
        <div class="steps"><div class="token__Step-sc-1o2h3sm-1 ihCzrN"><div><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/f93ace24-3f4b-4749-836f-ec00fcc88b1c.jpg?size=800x800" alt="닭고기는 한 입 크기로 썰고 밑간 재료를 넣어 밑간을 해주세요."><ul><li id="step1"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/f93ace24-3f4b-4749-836f-ec00fcc88b1c.jpg?size=200x200" alt="Step 1 Step 1"></li><li id="step2"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/9f224963-2ad2-43a9-9748-04c16e1ae4f4.jpg?size=200x200" alt="Step 1 Step 2"></li></ul></div><div><div class="step_title"><p>Step 1</p></div><p class="Text__Pre01-sc-1qy6bx2-2 enJPxd" color="#757575">닭고기는 한 입 크기로 썰고 밑간 재료를 넣어 밑간을 해주세요.</p></div></div><div class="token__Step-sc-1o2h3sm-1 ihCzrN"><div><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/59e2bb5a-3972-4a2c-9e19-3ee262bfc598.jpg?size=800x800" alt="대파는 3~4cm 길이로 썰어주세요. 볼에 양념 재료를 넣고 섞어주세요. "><ul><li id="step1"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/59e2bb5a-3972-4a2c-9e19-3ee262bfc598.jpg?size=200x200" alt="Step 2 Step 1"></li><li id="step2"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/8cebf048-81be-4e82-ab39-2b1c0b73d1ca.jpg?size=200x200" alt="Step 2 Step 2"></li><li id="step3"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/83012c7a-87c7-49f3-840a-503b133c7eca.jpg?size=200x200" alt="Step 2 Step 3"></li><li id="step4"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/2bfc45cc-a689-4dc0-9c30-8603048576f7.jpg?size=200x200" alt="Step 2 Step 4"></li></ul></div><div><div class="step_title"><p>Step 2</p></div><p class="Text__Pre01-sc-1qy6bx2-2 enJPxd" color="#757575">대파는 3~4cm 길이로 썰어주세요. 볼에 양념 재료를 넣고 섞어주세요. </p></div></div><div class="token__Step-sc-1o2h3sm-1 ihCzrN"><div><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/6f72ca84-027f-4d5c-bbf7-c757608caaf0.jpg?size=800x800" alt="팬에 기름을 두르고 중약불에서 대파를 구워주세요."></div><div><div class="step_title"><p>Step 3</p></div><p class="Text__Pre01-sc-1qy6bx2-2 enJPxd" color="#757575">팬에 기름을 두르고 중약불에서 대파를 구워주세요.</p></div></div><div class="token__Step-sc-1o2h3sm-1 ihCzrN"><div><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/c0e264d0-df16-498d-b5e0-340b7aa21422.jpg?size=800x800" alt="대파를 팬의 한쪽으로 밀어두고, 닭고기를 넣어 앞뒤로 노릇하게 익혀주세요."><ul><li id="step1"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/c0e264d0-df16-498d-b5e0-340b7aa21422.jpg?size=200x200" alt="Step 4 Step 1"></li><li id="step2"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/b7de797a-4157-42e7-81c0-aca3a3602de2.jpg?size=200x200" alt="Step 4 Step 2"></li><li id="step3"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/81d465f7-4e5e-496b-b4fe-76348008282e.jpg?size=200x200" alt="Step 4 Step 3"></li></ul></div><div><div class="step_title"><p>Step 4</p></div><p class="Text__Pre01-sc-1qy6bx2-2 enJPxd" color="#757575">대파를 팬의 한쪽으로 밀어두고, 닭고기를 넣어 앞뒤로 노릇하게 익혀주세요.</p></div></div><div class="token__Step-sc-1o2h3sm-1 ihCzrN"><div><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/a323ae3e-2885-4036-b62d-7301b1a8a111.jpg?size=800x800" alt="닭고기가 익으면 양념 재료를 붓고 졸이듯이 익혀주세요."><ul><li id="step1"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/a323ae3e-2885-4036-b62d-7301b1a8a111.jpg?size=200x200" alt="Step 5 Step 1"></li><li id="step2"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/26f46c58-d69c-487a-aa0e-dc81233ef735.jpg?size=200x200" alt="Step 5 Step 2"></li><li id="step3"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/50e0ecc9-8810-45d1-a0d7-db5822d22ed4.jpg?size=200x200" alt="Step 5 Step 3"></li></ul></div><div><div class="step_title"><p>Step 5</p></div><p class="Text__Pre01-sc-1qy6bx2-2 enJPxd" color="#757575">닭고기가 익으면 양념 재료를 붓고 졸이듯이 익혀주세요.</p></div></div><div class="token__Step-sc-1o2h3sm-1 ihCzrN"><div><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/c0b6897d-bc41-49d2-83f5-4600a06402eb.jpg?size=800x800" alt="그릇에 밥을 담고, 닭고기와 대파를 올린 후 남은 소스와 통깨를 뿌려 완성해주세요.
(tip. 기호에 따라 쪽파, 반숙 달걀등을 올려 더욱 든든하게 드셔보세요)"><ul><li id="step1"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/c0b6897d-bc41-49d2-83f5-4600a06402eb.jpg?size=200x200" alt="Step 6 Step 1"></li><li id="step2"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/f66afe4c-6e8c-4b07-a640-eb94f39c46d3.jpg?size=200x200" alt="Step 6 Step 2"></li><li id="step3"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/417d31fc-718d-4166-aaa7-2798e3839093.jpg?size=200x200" alt="Step 6 Step 3"></li><li id="step4"><img src="https://static.wtable.co.kr/image/production/service/recipe/2786/158d6070-e5f4-4d02-906a-029042cc52a7.jpg?size=200x200" alt="Step 6 Step 4"></li></ul></div><div><div class="step_title"><p>Step 6</p></div><p class="Text__Pre01-sc-1qy6bx2-2 enJPxd" color="#757575">그릇에 밥을 담고, 닭고기와 대파를 올린 후 남은 소스와 통깨를 뿌려 완성해주세요.
(tip. 기호에 따라 쪽파, 반숙 달걀등을 올려 더욱 든든하게 드셔보세요)</p></div></div></div>
    </div>
  </div>
</template>

<style>
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
    grid-template-columns: 48px 48px;
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

/* 재료 */
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

.jjTxDH .ingredient .igroups {
    grid-area: text;
}

ol, ul, li {
    list-style: none;
}

.jjTxDH .igroups_title, .jjTxDH .step_title {
    display: flex
;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid rgb(224, 224, 224);
}

.jjTxDH .igroups_title p, .jjTxDH .step_title p {
    font-family: "Noto Serif KR", serif, Helvetica, "Helvetica Neue", Arial;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: start;
    font-weight: bold;
}

.jjTxDH .igroups_title span, .jjTxDH .step_title span {
    font-weight: normal;
    font-family: "Noto Sans KR", Helvetica, "Helvetica Neue", Arial, "sans-serif";
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.5px;
}

.jjTxDH .ingredient .igroups > li ul {
    padding: 16px 0px;
    display: grid
;
    row-gap: 8px;
}

.fCbbYE {
    font-weight: normal;
    font-family: "Noto Sans KR", Helvetica, "Helvetica Neue", Arial, "sans-serif";
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.5px;
    width: 100%;
    display: inline-grid
;
    place-items: center;
    -webkit-box-align: center;
    grid-template-columns: 1fr 1fr;
    gap: 8px 59px;
}

.fCbbYE div:first-of-type {
    justify-self: start;
    color: rgb(0, 0, 0);
}

.fCbbYE div:last-of-type {
    justify-self: end;
    color: rgb(117, 117, 117);
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
