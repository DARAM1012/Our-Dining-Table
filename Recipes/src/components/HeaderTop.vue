<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="header">
    <div class="header_top">
      <!-- 로고 -->
      <a href="/" class="logo"
        ><img alt="Vue logo" class="logo" src="@/assets/logo.svg"
      /></a>

      <div class="menu">
        <!-- 검색 아이콘 -->
        <a href="/search" class="search-icon">
          <FontAwesomeIcon :icon="faMagnifyingGlass" />
        </a>

        <!-- 로그인 -->
        <span class="login">
          <a href="/login"
            ><FontAwesomeIcon :icon="faUser" class="icon" /> 로그인</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  max-width: 1280px; /* 큰 화면에서 중앙 정렬 */
  margin: 0 auto; /* 가운데 정렬 */
}
.logo {
  display: block;
  margin: 0; /* 여백 제거 */
  text-align: left;
}

.menu {
  display: flex; /* 검색과 로그인을 나란히 정렬 */
  align-items: center;
}

.search-icon {
  font-size: 24px;
  margin-right: 15px;
  color: #616161;
  text-decoration: none;
}

.login {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  color: #616161;
}

.login a {
  margin-left: 5px; /* 텍스트와 아이콘 간격 */
}

.login .icon {
  margin-right: 10px;
  font-size: 24px;
}

@media (min-width: 768px) {
  .header_top {
    padding: 15px 30px; /* 더 큰 화면에서는 여백을 확장 */
  }

  .menu {
    gap: 20px; /* 큰 화면에서는 검색과 로그인 간격을 넓게 */
  }
}

@media (min-width: 1280px) {
  .header_top {
    padding: 20px 130px;
  }
}
</style>
