<script setup>
import { ref, computed } from 'vue'

const allRecipes = ref([
  {
    id: 1,
    name: '백합탕',
    category: '한식',
    imageUrl: 'https://...',
  },
  { id: 2, name: '한라봉잼', category: '간식', imageUrl: 'https://...' },
])

const selectedCategory = ref('모두보기')
const currentPage = ref(1)
const pageSize = 12

const filteredRecipes = computed(() => {
  return selectedCategory.value === '모두보기'
    ? allRecipes.value
    : allRecipes.value.filter(r => r.category === selectedCategory.value)
})

const pagedRecipes = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredRecipes.value.slice(start, start + pageSize)
})

const totalPages = computed(() => {
  return Math.ceil(filteredRecipes.value.length / pageSize)
})

const goToPage = page => {
  currentPage.value = page
}

// const selectCategory = cat => {
//   selectedCategory.value = cat
//   currentPage.value = 1
// }
</script>

<template>
  <div>
    <div class="RecipeListstyle__Layout-sc-1s9b4ly-0 eAeFJR">
      <section class="RecipeListstyle__Section-sc-1s9b4ly-1 gIeeQD">
        <div class="Title">
          <h1>RECIPES FOR YOU</h1>
          <h2>맞춤추천 레시피를 둘러보세요.</h2>
        </div>
        <div class="RecipeListstyle__CardList-sc-1s9b4ly-2 bNkAnv">
          <div class="RecipeListstyle__Card-sc-1s9b4ly-5 bHqDkK">
            <a href="/recipes/9maZeYYVnjj6HGwHFpZTvTfG?location=recipe_home">
              <img
                src="https://static.wtable.co.kr/image/production/service/recipe/958/b80937b8-0975-407a-aa69-818153ef03e9.jpg?size=800x800"
                alt="매생이전"
                class="RecipeListstyle__CardImage-sc-1s9b4ly-14 iNbIQd"
                style="width: 500px; height: 500px"
              />
              <div
                class="RecipeListstyle__CardGredient-sc-1s9b4ly-3 hUapsG"
              >
              <div class="RecipeListstyle__CardMeta-sc-1s9b4ly-6 iFMKeY">
                <p class="RecipeListstyle__CardSubTitle-sc-1s9b4ly-7 hwxlrw">
                  바다의 맛 그대로!
                </p>
                <p class="RecipeListstyle__CardTitle-sc-1s9b4ly-12 eMHKwY">
                  매생이전
                </p>
              </div></div>

            </a>
          </div>
          <div class="RecipeListstyle__CardSm-sc-1s9b4ly-9 bSdIJY">
            <a href="/recipes/fG5hRdq4ezTw344RRXGMfp7o?location=recipe_home">
              <img
                src="https://static.wtable.co.kr/image/production/service/recipe/147/168379ac-ae6a-488a-9fb0-eaf83671ead7.jpg?size=500x500"
                alt="한라봉잼"
                class="RecipeListstyle__CardImage-sc-1s9b4ly-14 RecipeListstyle__CardMdImage-sc-1s9b4ly-15 gZeRDV"
                style="width: 240px; height: 240px"
              />
              <div
                class="RecipeListstyle__CardSmGredient-sc-1s9b4ly-4 eDwCCr gredient"
              >
              <div class="RecipeListstyle__CardSmMeta-sc-1s9b4ly-10 dHZATN">
                <p class="RecipeListstyle__CardSmSubTitle-sc-1s9b4ly-11 cgGeDp">
                  향긋한 과즙이 가득
                </p>
                <p class="RecipeListstyle__CardSmTitle-sc-1s9b4ly-13 kHjRDb">
                  한라봉잼
                </p>
              </div>
            </div>

            </a>
          </div>
          <div class="RecipeListstyle__CardSm-sc-1s9b4ly-9 bSdIJY">
            <a href="/recipes/uhMZkrCGwHwek4RtM5bcwKYb?location=recipe_home"
              ><img
                src="https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=500x500"
                alt="우엉김밥"
                class="RecipeListstyle__CardImage-sc-1s9b4ly-14 RecipeListstyle__CardMdImage-sc-1s9b4ly-15 gZeRDV"
                style="width: 240px; height: 240px"
              />
              <div
                class="RecipeListstyle__CardSmGredient-sc-1s9b4ly-4 eDwCCr1 gredient"
              >              <div class="RecipeListstyle__CardSmMeta-sc-1s9b4ly-10 dHZATN1">
                <p
                  class="RecipeListstyle__CardSmSubTitle-sc-1s9b4ly-11 cgGeDp1"
                >
                  자꾸만 손이 가는 맛
                </p>
                <p class="RecipeListstyle__CardSmTitle-sc-1s9b4ly-13 kHjRDb1">
                  우엉김밥
                </p>
              </div>
            </div>

            </a>
          </div>
          <div class="RecipeListstyle__Card-sc-1s9b4ly-5 bHqDkK">
            <a href="/recipes/RfLdFYKkMW3KCQB4JmGGHSK3?location=recipe_home">
              <img
                src="https://static.wtable.co.kr/image/production/service/recipe/973/619e3d2f-dd53-45c4-a0c9-a2f3bd9f3b37.jpg?size=800x800"
                alt="치즈달걀토스트"
                class="RecipeListstyle__CardImage-sc-1s9b4ly-14 RecipeListstyle__CardMdImage-sc-1s9b4ly-15 gZeRDV"
                style="width: 500px; height: 240px"
              />
              <div
                class="RecipeListstyle__CardSmGredient-sc-1s9b4ly-4 eDwCCr2 gredient"
              >
              <div class="RecipeListstyle__CardSmMeta-sc-1s9b4ly-10 dHZATN2">
                <p
                  class="RecipeListstyle__CardSmSubTitle-sc-1s9b4ly-11 cgGeDp2"
                >
                  겉바속촉 달걀 레시피
                </p>
                <p class="RecipeListstyle__CardSmTitle-sc-1s9b4ly-13 kHjRDb2">
                  치즈달걀토스트
                </p>
              </div>
            </div>

            </a>
          </div>
        </div>
      </section>
      <section class="RecipeListstyle__Section-sc-1s9b4ly-1 gIeeQD curation">
        <div class="Title">
          <h1>CURATION LIST</h1>
          <h2>
            우리의식탁만의 큐레이션으로<br />고민없이 맛있는 식탁을 차려보세요.
          </h2>
        </div>
        <div class="RecipeListstyle__CurationListLink-sc-1s9b4ly-23 leyCJR">
          <a href="#">
            더 많은 큐레이션 보러가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 19 18"
            >
              <path
                stroke="#000"
                d="m14.953 6.469-5.07 5.062L4.828 6.47"
              ></path>
            </svg>
          </a>
        </div>
        <div class="RecipeListstyle__CurationList-sc-1s9b4ly-21 eciBNj">
          <a href="#">
            <div
              class="CurationCard__CurationCardStyle-sc-1q4qf6g-1 ieaggu curation_card"
            >
              <div>
                <div class="image">
                  <img
                    src="https://static.wtable.co.kr/image/production/service/curation/8/46a5908f-ec35-4cf6-a571-eae9317962c7.jpg?size=800x1066.6666666666667"
                  />
                </div>
                <div class="desc">
                  <p>지금까지 이런 맛은 없었다이것은 한식인가 양식인가 02</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div
              class="CurationCard__CurationCardStyle-sc-1q4qf6g-1 ieaggu curation_card"
            >
              <div>
                <div class="video">
                  <video
                    poster="https://static.wtable.co.kr/image/production/service/curation/1139/4545391b-75e6-4c41-a0e4-60df47f791c3.jpg"
                    src="https://video.wtable.co.kr/video/production/service/curation/1139/1981f31f-6ed6-4f43-8a39-bfc0608ffca1.mp4"
                    autoplay=""
                    loop=""
                    playsinline=""
                  >
                    <source
                      src="https://video.wtable.co.kr/video/production/service/curation/1139/1981f31f-6ed6-4f43-8a39-bfc0608ffca1.mp4"
                      type="video/mp4"
                      autoplay
                      loop
                      playsinline
                    />
                    <source
                      src="https://video.wtable.co.kr/video/production/service/curation/1139/1981f31f-6ed6-4f43-8a39-bfc0608ffca1.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="desc">
                    <p>쉬우면서도 근사한 솥밥 황금 레시피 대공개!</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div
              class="CurationCard__CurationCardStyle-sc-1q4qf6g-1 ieaggu curation_card"
            >
              <div>
                <div class="image">
                  <img
                    src="https://static.wtable.co.kr/image/production/service/curation/874/858c3db3-608b-442c-9ba2-425edf45d812.jpg?size=800x1066.6666666666667"
                  />
                </div>
                <div class="desc">
                  <p>비린내 없이 깔끔하게 맛있는 고등어 요리 4가지</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section
        class="RecipeListstyle__Section-sc-1s9b4ly-1 gIeeQD"
        style="padding-bottom: 0"
      >
        <div class="Title">
          <h1>OUR RECIPES</h1>
          <h2>우리의식탁과 맛있는 음식을 만들어 보세요.</h2>
        </div>
        <ul
          class="RecipeListstyle__Categories-sc-1s9b4ly-16 fjqwFa"
          style="padding-left: 0px"
        >
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 erDeOn">
            모두보기
          </li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">
            메인요리
          </li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">밑반찬</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">간식</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">
            간단요리
          </li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">
            초대요리
          </li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">채식</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">한식</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">양식</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">일식</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">중식</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">퓨전</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">분식</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">안주</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">베이킹</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">
            다이어트
          </li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">도시락</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">키토</li>
          <li class="RecipeListstyle__Category-sc-1s9b4ly-17 eRsThs">
            오븐 요리
          </li>
        </ul>
        <div class="RecipeListstyle__Dropdown-sc-1s9b4ly-18 iZVfOF">
          <div class="styles__Sorting-sc-1ui0xdi-5 ilJiIZ">
            <select>
              <option value="publish_desc">최신순</option>
              <option value="recommend_desc">조회순</option>
              <option value="level_asc">난이도순</option>
              <option value="time_asc">조리시간 순</option>
            </select>
          </div>
        </div>
      </section>
      <section class="RecipeListstyle__RecipeListSection-sc-1s9b4ly-19 fUGTTI">
        <div class="infinite-scroll-component__outerdiv">
          <div
            class="infinite-scroll-component"
            style="height: auto; overflow: auto"
          >
          <div class="RecipeListstyle__RecipeList-sc-1s9b4ly-20 eKgfiL">
  <router-link :to="`/recipes/3`">
    <div class="RecipeItemstyle__Layout-sc-1gt7vz8-0 erZvWP">
      <img
        src="https://static.wtable.co.kr/image/production/service/recipe/2786/7f7338d6-2dff-4dd7-9034-bb11eb2c440f.jpg?size=500x500"
        class="RecipeItemstyle__ImageStyle-sc-1gt7vz8-1 duQJWI"
      />
      <p class="RecipeItemstyle__SubTitle-sc-1gt7vz8-2 LxJcT">
        대파의 풍미와 촉촉한 닭고기의 만남
      </p>
      <p class="RecipeItemstyle__Title-sc-1gt7vz8-3 hpYiJK">
        닭고기 대파덮밥
      </p>

    </div>
  </router-link>

  <router-link :to="`/recipes/2`">
    <div class="RecipeItemstyle__Layout-sc-1gt7vz8-0 erZvWP">
      <img
        src="https://static.wtable.co.kr/image/production/service/recipe/2787/3421dff1-e9ce-427c-a732-578d4aebeed3.jpg?size=500x500"
        class="RecipeItemstyle__ImageStyle-sc-1gt7vz8-1 duQJWI"
      />
      <p class="RecipeItemstyle__SubTitle-sc-1gt7vz8-2 LxJcT">
        아삭한 오이와 고소한 참치마요의 만남
      </p>
      <p class="RecipeItemstyle__Title-sc-1gt7vz8-3 hpYiJK">
        오이참치샌드위치
      </p>
    </div>
  </router-link>

  <router-link :to="`/recipes/1`">
    <div class="RecipeItemstyle__Layout-sc-1gt7vz8-0 erZvWP">
      <img
        src="https://static.wtable.co.kr/image/production/service/recipe/31/a7239b91-c29b-491b-bddd-7202f252338a.jpg?size=500x500"
        class="RecipeItemstyle__ImageStyle-sc-1gt7vz8-1 duQJWI"
      />
      <p class="RecipeItemstyle__SubTitle-sc-1gt7vz8-2 LxJcT">
        속풀이 해장용으로 좋은
      </p>
      <p class="RecipeItemstyle__Title-sc-1gt7vz8-3 hpYiJK">
        백합탕
      </p>
    </div>
  </router-link>

  <router-link :to="`/recipes/4`">
    <div class="RecipeItemstyle__Layout-sc-1gt7vz8-0 erZvWP">
      <img
        src="https://static.wtable.co.kr/image/production/service/recipe/32/0bbeb615-d79d-461a-84ff-bc8ada30f6e0.jpg?size=500x500"
        class="RecipeItemstyle__ImageStyle-sc-1gt7vz8-1 duQJWI"
      />
      <p class="RecipeItemstyle__SubTitle-sc-1gt7vz8-2 LxJcT">
        온 가족이 함께 즐기는 꼬치구이
      </p>
      <p class="RecipeItemstyle__Title-sc-1gt7vz8-3 hpYiJK">
        야키토리
      </p>
    </div>
  </router-link>
</div>

          </div>
          <div
            class="pagination"
            style="
              display: flex;
              justify-content: center;
              margin-top: 20px;
              gap: 8px;
            "
          >
            <button
              v-for="n in totalPages"
              :key="n"
              @click="goToPage(n)"
              :style="{
                padding: '6px 12px',
                background: currentPage === n ? '#937062' : '#eee',
                color: currentPage === n ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }"
            >
              {{ n }}
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
h1 {
  font-family: 'Noto Serif KR', serif, Helvetica, 'Helvetica Neue', Arial;
  font-size: 23.4px;
  line-height: 2.8rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 5.85px;
  font-weight: bold;
}

h1::before {
  margin-right: 20px;
}

h1::after {
  margin-left: 20px;
}

h1::before,
h1::after {
  display: inline-block;
  width: 1px;
  height: 13px;
  content: '';
  background-color: rgb(0, 0, 0);
}

h2 {
  font-weight: normal;
  font-family: 'Noto Serif KR', serif, Helvetica, 'Helvetica Neue', Arial;
  font-size: 18.2px;
  line-height: 2rem;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 16px;
  white-space: pre-line;
}

.gZeRDV.gZeRDV.gZeRDV {
  /* width: 100%; */
  /* height: 100%; */
  object-fit: cover;
  position: absolute;
}

.bNkAnv {
  margin: 0 auto;
  display: grid;
  width: 100%;
  max-width: 1024px;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'big small1 small2'
    'big wide wide';
  gap: 20px;
  padding-top: 80px;
}

/* 매생이전 블랙커버 */
.hUapsG {
  position: absolute;
  top: 27.8%;
  left: 29.9%;
  width: 39.3vh;
  height: calc(40%);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

/* 매생이전 큰 div */
.iFMKeY {
  position: absolute;
  left: 9%;
  top: 83%;
  color: rgb(255, 255, 255);
}

/* 매생이전 큰제목 */
.eMHKwY {
  font-family: 'Noto Serif KR', serif, Helvetica, 'Helvetica Neue', Arial;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0px;
  font-weight: bold;
}

/* 매생이전 꾸며주는 제목 */
.hwxlrw {
  margin-bottom: 2px;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

/* 한라봉 큰 div */
.dHZATN {
  position: absolute;
  top: 65%;
  left: 10%;
  bottom: 0px;
  color: rgb(255, 255, 255);
  text-align: left;
}

/* 한라봉 블랙 커버 */
.eDwCCr {
  position: absolute;
  bottom: 52.7%;
  left: 50.3%;
  width: 19vh;
  height: calc(15%);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

/* 한라봉잼 큰제목 */
.kHjRDb {
  font-family: 'Noto Serif KR', serif, Helvetica, 'Helvetica Neue', Arial;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

/* 한라봉잼 꾸며주는 제목 */
.cgGeDp {
  margin-bottom: 2px;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

/* 우엉김밥 큰 div */
.dHZATN1 {
  position: absolute;
  top: 65%;
  left: 10%;
  bottom: 0px;
  color: rgb(255, 255, 255);
  text-align: left;
}

/* 우엉김밥 블랙 커버 */
.eDwCCr1 {
  position: absolute;
  bottom: 52.7%;
  left: 60.6%;
  width: 19vh;
  height: calc(15%);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

/* 우엉김밥 큰제목 */
.kHjRDb1 {
  font-family: 'Noto Serif KR', serif, Helvetica, 'Helvetica Neue', Arial;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

/* 우엉김밥 꾸며주는 제목 */
.cgGeDp1 {
  margin-bottom: 2px;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

/* 치즈달걀토스트 블랙 커버 */
.eDwCCr2 {
  position: absolute;
  top: 50.5%;
  left: 50.3%;
  width: 39.4vh;
  height: calc(17.3%);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

/* 치즈달걀토스트 큰 div */
.dHZATN2 {
  position: absolute;
  top: 68%;
  left: 3.8%;
  bottom: 0px;
  color: rgb(255, 255, 255);
  text-align: left;
}

/* 치즈달걀토스트 큰제목 */
.kHjRDb2 {
  font-family: 'Noto Serif KR', serif, Helvetica, 'Helvetica Neue', Arial;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

/* 치즈달걀토스트 꾸며주는 제목 */
.cgGeDp2 {
  margin-bottom: 2px;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

.bNkAnv > div:nth-of-type(1) {
  grid-area: big;
}

.bNkAnv > div:nth-of-type(2) {
  grid-area: small1;
}

.bNkAnv > div:nth-of-type(3) {
  grid-area: small2;
}

.bNkAnv > div:nth-of-type(4) {
  grid-area: wide;
}

.bNkAnv img {
  border: 1px solid #937062; /* 갈색 테두리 */
}

.eAeFJR .curation {
  background-color: rgb(244, 240, 239);
  border-bottom: 1px solid rgb(224, 224, 224);
}

.gIeeQD {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 80px 18px;
}

.leyCJR {
  margin: 40px 0px 16px;
  width: 100%;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  cursor: pointer;
  max-width: 1024px;
  min-width: 988px;
  font-weight: normal;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0px;
}

.leyCJR a {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: inherit;
}

.leyCJR svg {
  margin-left: 4px;
  transform: rotate(270deg);
}

.eciBNj {
  display: grid;
  grid-template-columns: repeat(3, minmax(316px, 1fr));
  align-items: flex-start;
  gap: 56px 20px;
  margin: 0px;
}

.ieaggu {
  display: block;
  filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 6px 12px);
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.ieaggu > div {
  border-radius: 4px;
}

.ieaggu img {
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4px;
}

.ieaggu .desc {
  height: 80px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 4px 8px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: rgba(147, 112, 98, 0.9);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transform: translate3d(0px, 0px, 0px);
}

.ieaggu .desc p {
  font-weight: normal;
  font-family: 'Noto Serif KR', serif, Helvetica, 'Helvetica Neue', Arial;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  color: rgb(255, 255, 255);
}

.ieaggu video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 4px;
}

img,
video {
  display: block;
}

:root {
  --category-bg: white;
  --category-bg-hover: #bf917e;
}

.fjqwFa {
  width: 100%;
  max-width: 650px;
  margin: 80px 0px 40px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border-top: 1px solid rgb(147, 112, 98);
  border-left: 1px solid rgb(147, 112, 98);
}

.erDeOn {
  box-sizing: border-box;
  padding: 12px 8px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  border-right: 1px solid rgb(147, 112, 98);
  border-bottom: 1px solid rgb(147, 112, 98);
  cursor: pointer;
  font-weight: normal;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.5px;
  color: rgb(255, 255, 255);
  background: rgb(117, 87, 75);
}

.eRsThs {
  box-sizing: border-box;
  padding: 12px 8px;
  background-color: var(--category-bg);
  color: black;
  transition: all 0.3s ease;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  border-right: 1px solid rgb(147, 112, 98);
  border-bottom: 1px solid rgb(147, 112, 98);
  cursor: pointer;
  font-weight: normal;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.5px;
}

.eRsThs:hover {
  background-color: var(--category-bg-hover);
}

.iZVfOF {
  border-top: 1px solid rgb(224, 224, 224);
  width: 100%;
}

.ilJiIZ {
  margin: 16px 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  color: rgb(0, 0, 0);
  font-weight: normal;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.5px;
}

.ilJiIZ select {
  appearance: none;
  -webkit-appearance: none; /* Safari */
  -moz-appearance: none; /* Firefox */

  padding: 3px 28px;
  line-height: 18px;
  text-align-last: center;
  cursor: pointer;

  background: url(https://storage.wcuisine.net/web-assets/icons/ic-chev-down.svg)
    100% 50% no-repeat;
  color: rgb(0, 0, 0);
  border: none;
}

select:not(:-internal-list-box):not([multiple]) option {
  min-inline-size: 24px;
  min-block-size: max(24px, 1lh);
  font-weight: -internal-auto-base(normal, inherit);
  padding-block-end: -internal-auto-base(1px, 0);
  display: -internal-auto-base(block, flex);
  align-items: center;
  padding-inline: -internal-auto-base(2px, 0.5em);
  gap: 0.5em;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

.fUGTTI {
  width: 100%;
  position: relative;
  overflow-x: hidden;
  margin: 0 auto;
}

.eKgfiL {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  gap: 56px 20px;
  overflow-x: initial;
}

.duQJWI {
  width: 100%;
  height: auto;
  border: 1px solid rgba(147, 112, 98, 0.6);
}

.erZvWP img,
video {
  display: block;
}

.LxJcT {
  width: 100%;
  margin-top: 8px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: rgb(97, 97, 97);
  font-weight: normal;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
}

.hpYiJK {
  width: 100%;
  margin-top: 2px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-weight: 500;
}

.XtlHh {
  width: 100%;
  margin-top: 8px;
  display: inline-grid;
  -webkit-box-pack: center;
  justify-content: center;
  column-gap: 12px;
  grid-template-columns: auto auto;
}

.gvzBms {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.kKXboO {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.kKXboO svg circle,
.kKXboO svg path {
  stroke: rgb(158, 158, 158);
}

.MiXMV {
  margin-left: 5px;
  color: rgb(158, 158, 158);
  font-weight: normal;
  font-family: 'Noto Sans KR', Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
}
@media (min-width: 1024px) {
  .eKgfiL {
    max-width: 1024px;
    min-width: 988px;
    .duQJWI {
      width: 100%;
      height: auto;
      border: 1px solid rgba(147, 112, 98, 0.6);
    }
    margin: 0px auto 18px;
  }
}

@media (min-width: 1024px) {
  .fUGTTI {
    max-width: 1024px;
    min-width: 988px;
  }
}

@media (min-width: 1024px) {
  .iZVfOF {
    max-width: 1024px;
  }
}

@media (min-width: 1024px) {
  .eciBNj {
    max-width: 1024px;
    min-width: 988px;
    margin: 0px auto 18px;
  }
}

@media (min-width: 1024px) {
  .eDwCCr {
    position: absolute;
    top: 61.5vh;
    left: 110.5vh;
    width: 15.9%;
    height: 25%;
  }
}

@media (max-width: 1023px) {
  .bNkAnv {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'big'
      'small1'
      'small2'
      'wide';
  }
}
</style>