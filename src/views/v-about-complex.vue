<template>
  <div class="content-wrapper">
    <aside>
      <p
        @click="setIdActiveSection(1)"
        :class="{ active: id_active_section == 1 }"
      >
        Архитектура
      </p>
      <p
        @click="setIdActiveSection(2)"
        :class="{ active: id_active_section == 2 }"
      >
        Благоустройство
      </p>
      <p
        @click="setIdActiveSection(3)"
        :class="{ active: id_active_section == 3 }"
      >
        Безопастность
      </p>
      <p
        @click="setIdActiveSection(4)"
        :class="{ active: id_active_section == 4 }"
      >
        Инженерия
      </p>
      <p
        @click="setIdActiveSection(5)"
        :class="{ active: id_active_section == 5 }"
      >
        Инфраструктура
      </p>
      <p
        @click="setIdActiveSection(6)"
        :class="{ active: id_active_section == 6 }"
      >
        Транспортная доступность
      </p>
    </aside>
    <section class="content-body">
      <div class="content-body__left">
        <div class="content-body__text">
          <transition
            :name="id_prev_section > id_active_section ? 'text-revers' : 'text'"
            mode="out-in"
          >
            <component :is="getComponentName"></component>
          </transition>
          <span class="content-body__pagination"
            >{{ id_active_section }} / 6</span
          >
        </div>
      </div>
      <div class="content-body__right">
        <transition
          :name="id_prev_section > id_active_section ? 'image-revers' : 'image'"
        >
          <div
            v-if="id_active_section == 1"
            :style="{ background: `url(${getPathImage})` }"
            key="1"
          ></div>
          <div
            v-else-if="id_active_section == 2"
            :style="{ background: `url(${getPathImage})` }"
            key="2"
          ></div>
          <div
            v-else-if="id_active_section == 3"
            :style="{ background: `url(${getPathImage})` }"
            key="3"
          ></div>
          <div
            v-else-if="id_active_section == 4"
            :style="{ background: `url(${getPathImage})` }"
            key="4"
          ></div>
          <div
            v-else-if="id_active_section == 5"
            :style="{ background: `url(${getPathImage})` }"
            key="5"
          ></div>
          <div
            v-else-if="id_active_section == 6"
            :style="{ background: `url(${getPathImage})` }"
            key="6"
          ></div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutComplex",
  data() {
    return {
      id_active_section: 1,
      id_prev_section: 1,
    };
  },
  computed: {
    getPathImage() {
      return require(`@/assets/images/illustrations/${this.id_active_section}.svg`);
    },
    getComponentName() {
      let name = "v-architecture";
      switch (this.id_active_section) {
        case 2:
          name = "v-landscaping";
          break;
        case 3:
          name = "v-safety";
          break;
        case 4:
          name = "v-engineering";
          break;
        case 5:
          name = "v-infrastructure";
          break;
        case 6:
          name = "v-transport-accessibility";
          break;
      }
      return () => import(`../components/${name}`);
    },
  },
  methods: {
    setIdActiveSection(n) {
      this.id_prev_section = this.id_active_section;
      this.id_active_section = n;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

aside {
  display: flex;
  flex-direction: column;

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.56px;
    color: #505050;
    margin-bottom: 32px;
    margin-right: auto;
    background-repeat: no-repeat;
    background-image: linear-gradient(to bottom, transparent 20%, #ebd8cc 21%);
    background-size: 100% 0;
    background-position: 0 bottom;
    transition: 0.25s;
    padding: 0 4px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover,
    &.active {
      font-weight: bold;
      color: #262525;
      background-size: 100% 9px;
    }

    &.active {
      font-size: 14px;
      text-transform: uppercase;
    }
  }
}

.content-body {
  width: 1516px;
  height: 100%;
  margin-left: auto;
  display: flex;

  > div {
    width: 50%;
    height: 100%;
  }

  &__left {
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__text {
    width: 435px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    /deep/ h3 {
      font-family: Gilroy-ExtraBold;
      font-size: 44px;
      line-height: 53px;
      letter-spacing: -0.02px;
      text-transform: uppercase;
      color: #262525;
    }

    /deep/ p {
      height: 90px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.02px;
      overflow: hidden;
      color: #262525;
    }

    /deep/ .ellipsis {
      display: none;
      width: 28px;
      height: 28px;
      position: relative;
      background: #262525;
      text-decoration: none;
      text-align: center;
      color: #fff;
      font-size: 26px;
      vertical-align: middle;
      line-height: 50%;
    }

    /deep/ .ellipsis.ellipsis_display {
      display: inline-block;
    }
  }

  /deep/ &__pagination {
    position: absolute;
    left: 0;
    bottom: 25%;
  }

  &__right {
    position: relative;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

// ####### Text animation ######

.text-enter,
.text-leave-to,
.text-revers-enter,
.text-revers-leave-to {
  opacity: 0.5;
}

.text-enter-active,
.text-revers-enter-active {
  transition: all 0.5s;
}

.text-enter-to,
.text-revers-enter-to,
.text-leave,
.text-revers-leave {
  opacity: 1;
}

.text-enter {
  transform: translateY(-40px);
}

.text-enter-to {
  transform: translateY(0);
}

.text-revers-enter {
  transform: translateY(40px);
}

.text-revers-enter-to {
  transform: translateY(0);
}

// ####### Image animation ######

.image-enter-to,
.image-revers-leave {
  height: 100%;
}

.image-enter,
.image-revers-leave-to {
  height: 0% !important;
}

.image-enter-active,
.image-revers-leave-active {
  z-index: 1;
}

.image-enter-active,
.image-leave-active,
.image-revers-enter-active,
.image-revers-leave-active {
  transition: all 0.4s;
}
</style>
