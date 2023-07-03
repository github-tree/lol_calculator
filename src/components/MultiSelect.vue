<template>
  <div class="buff-modal">
    <div class="buff-list">
      <div v-for="buff in buffs" :key="buff.id" class="buff-item">
        <input type="checkbox" :id="buff.id" :value="buff" v-model="selectedBuffs">
        <label :for="buff.id">
          <img :src="buff.image" :alt="buff.name" class="buff-image">
          <span>{{ buff.name }}</span>
        </label>
      </div>
    </div>
    <button @click="confirmSelection">Confirm</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  name: 'BuffModal',
  props: {
    buffs: {
      type: Array as PropType<any[]>,
      required: true,
    },
    maxBuffCount: {
      type: Number,
      default: Infinity,
    },
  },
  emits: ['select-buffs'],
  data() {
    return {
      selectedBuffs: [] as any[],
    };
  },
  methods: {
    confirmSelection() {
      // 确认选择的 buffs
      this.$emit('select-buffs', this.selectedBuffs);
    },
  },
});
</script>

<style scoped>
.buff-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buff-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.buff-item {
  display: flex;
  align-items: center;
  margin: 10px;
}

.buff-image {
  width: 50px;
  height: 50px;
  margin-right: 5px;
}
</style>
