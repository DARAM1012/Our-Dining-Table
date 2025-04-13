<script setup>
import { RouterView } from 'vue-router'
import HeaderTop from './components/HeaderTop.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderTop />
    </div>
  </header>

  <main>
    <RouterView />
  </main>
  <footer>
    <FooterPage />
  </footer>
</template>

<style scoped>
header {
  position: sticky; /* 스크롤 시 상단에 고정 */
  top: 0;
  z-index: 1000;
  background-color: #fff;
  width: 100%; /* 화면 전체 너비 사용 */
  border-bottom: 1px solid #e0e0e0; /* 헤더 하단 경계선 */
}

.wrapper {
  display: flex;
  flex-direction: column;
}

/* 메인 콘텐츠 스타일 */
main {
  margin-top: 10px; /* 헤더와 약간의 간격 */
  padding: 20px 0;
  background-color: #ffffff;
  min-height: calc(
    100vh - 60px
  ); /* 화면 전체를 채우도록 설정 (헤더 높이 제외) */
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
