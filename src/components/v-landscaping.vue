<template>
  <div>
    <h3>Благоустройство</h3>
    <p>
      <span ref="description">
        Запроектированные большие окна, которые пропускают много солнечного
        света, наполнят Ваши квартиры теплотой и уютом
      </span>
      <router-link
        to="/"
        class="ellipsis"
        :class="desc_length > letter_limit ? 'ellipsis_display' : ''"
        >...</router-link
      >
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Landscaping",
  data() {
    return {
      desc_length: 0,
    };
  },
  computed: {
    ...mapState(["letter_limit", "trimmed_string"]),
  },
  methods: {
    ...mapMutations(["TRIM_STRING_TO_LIMIT"]),
  },
  mounted() {
    this.desc_length = this.$refs.description.innerText.length;
    this.TRIM_STRING_TO_LIMIT(this.$refs.description.innerText);
    this.$refs.description.innerText = this.trimmed_string;
  },
};
</script>