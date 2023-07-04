<template>
  <div class="list">
    <div v-for="item in items" :key="item.id" @click="selectItem(item)" class="item">
      <img :src="item.image" :alt="item.name" class="img"/>
      <span class="name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface SelectHero {
  id: number;
  name: string;
  search_key:string;
  model_key:string;
  image: string;
}

export default defineComponent({
  props: {
    items: {
      type: Array as ()=>SelectHero[],
      required: true,
    },
  },
  emits: ['select'],
  methods: {
    selectItem(item) {
      this.$emit('select', item);
    },
  },
});
</script>

<style scoped>
/* 样式代码 */
.list{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
.item{
  width: 100px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.img{
  width: 80%;
  margin-bottom: 10px;
}
</style>
