<template>
  <div>
    <div v-for="(count, key) in tagsCount" :key="key" class="tag">
      <saber-link :to="`/tags/${key}`">
        <span :class="getWeight(count)">{{key}}</span>
      </saber-link>
    </div>
  </div>
</template>


<script>
export const attributes = {
  layout: "default"
};

export default {
  methods: {
    getWeight(count) {
      const length = this.$siteConfig.tags.length;
      let weight = "regular";
      if (count > length / 10) {
        weight = "bold";
      } else if (count < length / 30) {
        weight = "light";
      }
      return weight;
    }
  },
  computed: {
    tagsCount() {
      const frequency = {};
      this.$siteConfig.tags.forEach(tag => {
        frequency[tag] = frequency[tag] ? frequency[tag] + 1 : 1;
      });
      return frequency;
    }
  }
};
</script>