<script setup lang="ts">
import SelectHero from './SelectHero.vue';
</script>

<template>
  <div class="app">
    <h2>计算器</h2>

    <div>
      <span>己方英雄</span>
      <div class="select-hero-button" @click="openSelectHeroA">
        <div v-if="heroA.name">
          <img :src="heroA.image" :alt="heroA.name" />
        </div>
      </div>
      <div>{{ heroA.name }}</div>

      <SelectHero v-if="selectHeroAShow" :items="heroes" @select="selcetHeroA"/>

      <div>
        <span>等级：</span>
        <input type="number"  v-model="heroA.lv" @input="changeLv(heroA)"/>
      </div>

    </div>

    <div>
      <span>敌方英雄</span>
      <div class="select-hero-button" @click="openSelectHeroB">
        <div v-if="heroB.name">
          <img :src="heroB.image" :alt="heroB.name" />
        </div>
      </div>
      <div>{{ heroB.name }}</div>

      <SelectHero v-if="selectHeroBShow" :items="heroes" @select="selcetHeroB"/>

      <div>
        <span>等级：</span>
        <input type="number" v-model="heroB.lv"  @input="changeLv(heroB)"/>
      </div>

    </div>

    <button @click="calculateDamage">计算</button>

    <div>
      <span>普通攻击伤害：</span>
      <span>{{ damageData.a }}</span>
    </div>

    <div>
      <span>Q 技能伤害：</span>
      <span>{{ damageData.q }}</span>
    </div>

    <div>
      <span>W 技能伤害：</span>
      <span>{{ damageData.w }}</span>
    </div>

    <div>
      <span>E 技能伤害：</span>
      <span>{{ damageData.e }}</span>
    </div>

    <div>
      <span>R 技能伤害：</span>
      <span>{{ damageData.r }}</span>
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
  width: 100%;
}

.select-hero-button{
  border:1px #ffffff solid;
  width: 82px;
  height: 82px;
}

.select-hero-button img{
  width: 80px;
}
</style>
