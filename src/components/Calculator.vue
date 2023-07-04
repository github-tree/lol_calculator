<script setup lang="ts">
import SelectHero from './SelectHero.vue';
</script>

<template>
  <div class="app">
    <h2>伤害计算器</h2>

    <div>
      <span>己方英雄</span>
      <button @click="openSelectHeroA">选择英雄</button>

      <SelectHero v-if="selectHeroAShow" :items="heroes" @select="selcetHeroA"/>

      <div v-if="heroA.name">
        <img :src="heroA.image" :alt="heroA.name" />
        <span>{{ heroA.name }}</span>
      </div>

      <span>等级：</span>
      <input type="number"  v-model="heroA.lv" @input="changeLv(heroA)"/>


    </div>

    <div>
      <span>敌方英雄</span>
      <button @click="openSelectHeroB">选择英雄</button>

      <SelectHero v-if="selectHeroBShow" :items="heroes" @select="selcetHeroB"/>

      <div v-if="heroB.name">
        <img :src="heroB.image" :alt="heroB.name" />
        <span>{{ heroB.name }}</span>
      </div>

      <span>等级：</span>
      <input type="number" v-model="heroB.lv"  @input="changeLv(heroB)"/>

    </div>

    <button @click="calculateDamage">计算伤害</button>

    <div>
      <h3>普通攻击伤害</h3>
      <p>{{ damageData.a }}</p>
    </div>

    <div>
      <h3>Q 技能伤害</h3>
      <p>{{ damageData.q }}</p>
    </div>

    <div>
      <h3>W 技能伤害</h3>
      <p>{{ damageData.w }}</p>
    </div>

    <div>
      <h3>E 技能伤害</h3>
      <p>{{ damageData.e }}</p>
    </div>

    <div>
      <h3>R 技能伤害</h3>
      <p>{{ damageData.r }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import heroes from '../../public/heroJson.json';
import itemsData from '../../public/itemsData.json';
import buffsData from '../../public/buffsData.json';
import {getHero} from '../heros/base';
import { HeroModel , HeroData } from '../heros/dataInterface'

interface SelectHero {
  id: number;
  name: string;
  search_key:string;
  image: string;
}

interface Item {
  id: number;
  name: string;
  image: string;
}

interface DamageZhuangBei{
  name:string;
  image:string;
  d:number;
}

interface DamageData {
  a:number;
  i:number;
  q:number;
  w:number;
  e:number;
  r:number;
  z:DamageZhuangBei[];
}

export default defineComponent({
  name: 'DamageCalculator',
  data() {
    return {
      heroA: {} as HeroModel,
      heroB: {} as HeroModel,
      damageData: {} as DamageData,
      heros :heroes,
      //英雄选择弹框
      selectHeroAShow: false,
      selectHeroBShow: false,
    };
  },
  methods: {
    openSelectHeroA() {
      this.selectHeroAShow = true;
    },
    closeSelectHeroA() {
      this.selectHeroAShow = false;
    },

    openSelectHeroB() {
      this.selectHeroBShow = true;
    },
    closeSelectHeroB() {
      this.selectHeroBShow = false;
    },

    selcetHeroA(item:any) {
      this.heroA = getHero(item.model_key);
      this.heroA.setLv(1)
      this.heroA.image = item.image
      this.closeSelectHeroA();
    },
    selcetHeroB(item:any) {
      this.heroB = getHero(item.model_key);
      this.heroB.setLv(1)
      this.heroB.image = item.image
      this.closeSelectHeroB();
    },
    changeLv(heroModel:HeroModel){
      heroModel.setLv(heroModel.lv)
    },
    calculateDamage() {
      // 实现伤害计算的逻辑

      let ar = 0
      if (ar >= 0){
        this.damageData.a = (100/(100+this.heroB.data.ar) * this.heroA.data.ad).toFixed(2)
      }

    },
  },
});
</script>

<style scoped>
.app {
  text-align: center;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background-color: #fff;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
