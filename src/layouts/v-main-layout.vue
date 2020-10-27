<template>
  <div class="wrapper">
    <header class="header">
      <router-link :to="base_url" class="header-primary-link header-logo">
        Первомайская
      </router-link>
      <nav>
        <ul>
          <li>
            <router-link :to="base_url">О комплексе </router-link>
          </li>
          <li>
            <router-link :to="base_url + 'features'">Особенности</router-link>
          </li>
          <li>
            <router-link :to="base_url + 'penthouses'">Пентхаусы</router-link>
          </li>
          <li>
            <router-link :to="base_url + 'choose-apartment'">
              Выбрать квартиру
            </router-link>
          </li>
        </ul>
      </nav>
      <a :href="`tel:+${phone}`" class="header-primary-link header-number">
        {{ phone }}
      </a>
    </header>
    <main class="main">
      <div class="square square-left"></div>
      <div class="square square-right">
        <img src="@/assets/images/icon-burger.png" />
      </div>
      <transition name="router" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer class="footer">
      <p>Разработано в MST <span>|</span> 2018</p>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainLayout",
  computed: {
    ...mapState(["base_url", "phone"]),
  },
};
</script> 

<style lang="scss" scoped>
.wrapper {
  max-width: 1802px;
  margin: 0 auto;
}

.header {
  display: flex;
  position: relative;

  .header-primary-link {
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    color: #262525;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 22px;
  }

  .header-logo {
    letter-spacing: 0.3px;
    position: absolute;
    left: 58px;
  }

  .header-number {
    letter-spacing: 0.2px;
    position: absolute;
    right: 64px;
  }
}

nav {
  text-align: center;
  margin: 20px auto 21px auto;

  &:hover,
  &:focus {
    background-size: 100% 4px;
    transition-delay: 0s;
  }

  ul li {
    display: inline-block;
    margin-right: 46px;

    &:first-child {
      margin-left: 7px;
    }

    &:last-child {
      margin-right: 7px;
    }
  }

  a {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #262525;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.8px;
    padding: 0 5px 10px 5px;
    white-space: nowrap;
    background-image: linear-gradient(to bottom, transparent 20%, #d88f5e 21%);
    background-repeat: no-repeat;
    transition: all 0.2s;
    background-size: 0% 4px;
    background-position: 0 bottom;

    &:hover,
    &:focus,
    &.router-link-exact-active {
      background-size: 100% 4px;
      transition-delay: 0s;
    }
  }
}

.main {
  min-height: 840px;
  margin: 0 auto;
  position: relative;
  display: flex;

  .square {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0;
    background: #262525;
    z-index: 2;

    &-left {
      left: 0;
      transform: translate(-50%, -50%);
    }

    &-right {
      right: 0;
      transform: translate(50%, -50%);
      display: flex;

      img {
        width: 27px;
        height: 27px;
        margin: auto;
      }
    }
  }
}

.footer {
  margin: 23px 0;

  p {
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    span {
      margin: 0 16px;
    }
  }
}

// ###### Router animation ######

.router-enter,
.router-leave-to {
  opacity: 0.5;
}

.router-enter-active,
.router-leave-active {
  transition: all 0.2s;
}

.router-enter-to,
.router-leave {
  opacity: 1;
}
</style>
