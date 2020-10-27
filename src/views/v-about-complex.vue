<template>
  <div class="content-wrapper">
    <aside class="content-aside">
      <ul>
        <li v-for="(section, index) of sections" :key="section.id">
          <a
            :class="{ active: index_active_section == index }"
            @click="setIndexActiveSection(index)"
            :data-title="section.title"
          >
            {{ section.title }}
          </a>
        </li>
      </ul>
    </aside>
    <section class="content-body">
      <div class="content-body__left">
        <div class="content-body__text">
          <transition
            :name="
              index_prev_section > index_active_section ? 'text-revers' : 'text'
            "
            mode="out-in"
          >
            <div :key="getActiveSection.id">
              <h3>{{ getActiveSection.title }}</h3>
              <p>
                <span>{{ getActiveSection.content }} </span>
                <router-link
                  :to="base_url"
                  class="ellipsis"
                  :class="
                    this.getActiveSection.content.length > letter_limit
                      ? 'ellipsis_display'
                      : ''
                  "
                  >...
                </router-link>
              </p>
            </div>
          </transition>
          <span class="content-body__pagination">
            {{ index_active_section + 1 }} / {{ sections.length }}
          </span>
        </div>
      </div>
      <div class="content-body__right">
        <transition
          :name="
            index_prev_section > index_active_section ? 'image-revers' : 'image'
          "
        >
          <div
            :style="{ background: `url(${getActiveImageRequire})` }"
            :key="getActiveSection.id"
          ></div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ImportSections from "@/sections.json";

export default {
  name: "AboutComplex",
  data() {
    return {
      index_active_section: 1,
      index_prev_section: 1,
      sections: "",
    };
  },
  created() {
    this.sections = ImportSections;
  },
  mounted() {
    this.TRIM_STRING_TO_LIMIT(this.getActiveSection.content);
    this.getActiveSection.content = this.trimmed_string;
  },
  computed: {
    ...mapState(["base_url", "letter_limit", "trimmed_string"]),
    getActiveSection() {
      return this.sections[this.index_active_section];
    },
    getActiveImageRequire() {
      return require("@/assets/images/illustrations/" + this.getActiveSection.img);
    },
  },
  methods: {
    ...mapMutations(["TRIM_STRING_TO_LIMIT"]),
    setIndexActiveSection(n) {
      this.index_prev_section = this.index_active_section;
      this.index_active_section = n;
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

.content-aside {
  display: flex;
  flex-direction: column;

  ul li {
    margin-bottom: 27px;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.56px;
      color: #505050;
      background-repeat: no-repeat;
      background-image: linear-gradient(
        to bottom,
        transparent 20%,
        #ebd8cc 21%
      );
      background-size: 0 9px;
      background-position: 0 5px;
      transition: 0.25s;
      padding: 0 2px;
      cursor: pointer;
      position: relative;

      &:hover {
        font-weight: bold;
        color: #262525;
        background-size: 100% 9px;
      }

      &.active {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        background-size: 100% 9px;
        color: transparent;
      }

      &.active:before {
        content: attr(data-title);
        position: absolute;
        animation: transparent-color 0.25s forwards;
        color: rgba(38, 37, 37, 0);
      }

      @keyframes transparent-color {
        to {
          color: rgba(38, 37, 37, 1);
        }
      }
    }
  }
}

.content-body {
  width: 84.25%;
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
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    h3 {
      font-family: Gilroy;
      font-size: 44px;
      font-weight: bold;
      line-height: 53px;
      margin-top: 0;
      margin-bottom: 41px;
      letter-spacing: -0.02px;
      text-transform: uppercase;
      color: #262525;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.2px;
      color: #262525;
    }

    .ellipsis {
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

    .ellipsis.ellipsis_display {
      display: inline-block;
    }
  }

  &__pagination {
    position: absolute;
    left: 1%;
    bottom: 19%;
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
