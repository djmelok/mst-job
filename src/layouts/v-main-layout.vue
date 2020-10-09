<template>
  <div class="wrapper">
    <header>
      <span class="header-logo">Первомайская</span>
      <nav>
        <router-link to="/">О комплексе</router-link>
        <router-link to="/features">Особенности</router-link>
        <router-link to="/penthouses">Пентхаусы</router-link>
        <router-link to="/choose-apartment">Выбрать квартиру</router-link>
      </nav>
      <span class="header-number">8 888 888 88 88</span>
    </header>
    <main>
      <div class="square square-left"></div>
      <div class="square square-right">
        <img src="@/assets/images/icon-burger.svg" />
      </div>
      <transition name="router" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer>
      <p>Разработано в MST <span>|</span> 2018</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1800px;
  margin: 0 auto;
}

header {
  display: flex;

  span {
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    color: #262525;
    text-transform: uppercase;
    margin-top: 22px;
  }

  .header-logo {
    margin-left: 117px;
  }

  .header-number {
    margin-right: 117px;
  }
}

nav {
  text-align: center;
  margin: 20px auto;

  &:hover,
  &:focus {
    background-size: 100% 4px;
    transition-delay: 0s;
  }

  a {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #262525;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.8px;
    margin: 0 28px;
    padding-bottom: 7px;
    white-space: nowrap;
    background-image: linear-gradient(to bottom, transparent 20%, #d88f5e 21%);
    background-repeat: no-repeat;
    transition: all 0.2s;
    background-size: 0% 4px;
    background-position: 0 bottom;

    &:first-child {
      margin-left: 7px;
    }

    &:last-child {
      margin-right: 7px;
    }

    &:hover,
    &:focus,
    &.router-link-exact-active {
      background-size: 100% 4px;
      transition-delay: 0s;
    }
  }
}

main {
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

footer {
  margin: 22px 0;

  p {
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.175729px;
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
