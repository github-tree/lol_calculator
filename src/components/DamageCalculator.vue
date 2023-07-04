<script setup lang="ts">
import MultiSelect from './MultiSelect.vue';
</script>

<template>
  <div class="app">
    <h2>伤害计算器</h2>

    <div>
      <h3>己方英雄</h3>
      <button @click="openDialog">选择英雄</button>
      <div v-if="selectedHero">
        <img :src="selectedHero.image" :alt="selectedHero.name" />
        <span>{{ selectedHero.name }}</span>
      </div>

      <div v-if="showDialog" class="dialog">
        <div class="dialog-content">
          <input type="text" v-model="searchQuery" placeholder="搜索英雄" />
          <ul>
            <li v-for="hero in filteredHeroes" :key="hero.id" @click="selectHero(hero);">
              <img :src="hero.image" :alt="hero.name" />
              <span>{{ hero.name }}</span>
            </li>
          </ul>
        </div>
        <button @click="closeDialog">关闭</button>
      </div>

      <h3>等级</h3>
      <input type="number" v-model="level"/>

      <h3>装备</h3>
      <button @click="selectItems">选择装备</button>
      <div v-for="item in selectedItems" :key="item.id">
        <img :src="item.image" :alt="item.name" />
        <span>{{ item.name }}</span>
      </div>

<!--      <h3>Buff</h3>-->
<!--      <div>-->
<!--        <label v-for="buffOption in buffOptions" :key="buffOption">-->
<!--          <input type="checkbox" :value="buffOption" v-model="selectedBuffs" />-->
<!--          {{ buffOption }}-->
<!--        </label>-->
<!--      </div>-->
      <h2>Select Your Buffs</h2>
      <button @click="openBuffModal">Choose Buffs</button>
      <MultiSelect :buffs="buffOptions" @select-buffs="handleSelectedBuffs"></MultiSelect>
      <div v-if="selectedBuffs.length > 0">
        Selected Buffs:
        <ul>
          <li v-for="buff in selectedBuffs" :key="buff.id">
            {{ buff.name }}
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h3>敌方英雄</h3>
      <button @click="openOpponentHeroDialog">选择敌方英雄</button>
      <div v-if="selectedOpponentHero">
        <img :src="selectedOpponentHero.image" :alt="selectedOpponentHero.name" />
        <span>{{ selectedOpponentHero.name }}</span>
      </div>

      <div v-if="showOpponentHeroDialog" class="dialog">
        <div class="dialog-content">
          <input type="text" v-model="searchOpponentHeroesQuery" placeholder="搜索英雄" />
          <ul>
            <li v-for="hero in filteredHeroes" :key="hero.id" @click="selectOpponentHero(hero)">
              <img :src="hero.image" :alt="hero.name" />
              <span>{{ hero.name }}</span>
            </li>
          </ul>
        </div>
        <button @click="closeOpponentHeroDialog">关闭</button>
      </div>

      <h3>等级</h3>
      <input type="number" v-model="opponentLevel" />

      <h3>装备</h3>
      <button @click="selectOpponentItems">选择装备</button>
      <div v-for="item in selectedOpponentItems" :key="item.id">
        <img :src="item.image" :alt="item.name" />
        <span>{{ item.name }}</span>
      </div>

      <h3>Buff</h3>
      <div>
        <label v-for="buffOption in buffOptions" :key="buffOption">
          <input type="checkbox" :value="buffOption" v-model="selectedOpponentBuffs" />
          {{ buffOption }}
        </label>
      </div>

      <h2>Select Your Buffs</h2>
      <button @click="openBuffModal">Choose Buffs</button>
      <MultiSelect :buffs="buffOptions" @select-buffs="handleSelectedOpponentHeroBuffs"></MultiSelect>
      <div v-if="selectedOpponentBuffs.length > 0">
        Selected Buffs:
        <ul>
          <li v-for="buff in selectedOpponentBuffs" :key="buff.id">
            {{ buff.name }}
          </li>
        </ul>
      </div>
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
import heroesData from '../../public/heroesData.json';
import itemsData from '../../public/itemsData.json';
import buffsData from '../../public/buffsData.json';
import {getHero} from '../heros/base';
import { HeroModel , HeroData } from '../heros/dataInterface'

interface Hero {
  id: number;
  name: string;
  image: string;
}

interface Item {
  id: number;
  name: string;
  image: string;
}


interface DamageData {
  a:number;
  i:number;
  q:number;
  w:number;
  e:number;
  r:number;
}

export default defineComponent({
  name: 'DamageCalculator',
  data() {
    return {
      buffOptions: buffsData,
      selectedBuffs:[],
      selectedOpponentBuffs: [],
      calculatedDamage: 0,
      isBuffModalOpen:false,

      showDialog: false,
      heroes: heroesData as Hero[],
      searchQuery: '',

      selectedHero: null as Hero | null,
      heroData: null as HeroData | null,
      level: 1,
      selectedItems: [] as Item[],
      buff: '',

      showOpponentHeroDialog: false,
      opponentHeroes: heroesData as Hero[],
      searchOpponentHeroesQuery: '',

      selectedOpponentHero: null as Hero | null,
      opponentHeroData: null as HeroData | null,
      opponentLevel: 1,
      selectedOpponentItems: [] as Item[],
      opponentBuff: '',

      damageData: {} as DamageData,

      heroModel: {} as HeroModel,
    };
  },
  computed: {
    filteredHeroes(): Hero[] {
      const query = this.searchQuery.toLowerCase();
      return this.heroes.filter((hero) => hero.name.toLowerCase().includes(query));
    },
  },
  methods: {
    openBuffModal() {
      this.isBuffModalOpen = true;
    },
    handleSelectedBuffs(selectedBuffs) {
      // 处理选择的 buff
      this.selectedBuffs = selectedBuffs;
    },
    handleSelectedOpponentHeroBuffs(selectedBuffs) {
      // 处理选择的 buff
      this.selectedOpponentBuffs = selectedBuffs;
    },
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    selectHero(hero: Hero) {
      // 实现选择英雄弹框的逻辑
      this.selectedHero = hero;
      this.closeDialog();
    },
    selectItems() {
      // 实现选择装备弹框的逻辑

    },
    openOpponentHeroDialog() {
      this.showOpponentHeroDialog = true;
    },
    closeOpponentHeroDialog() {
      this.showOpponentHeroDialog = false;
    },
    selectOpponentHero(hero: Hero) {
      // 实现选择敌方英雄弹框的逻辑
      this.selectedOpponentHero = hero;
      this.closeOpponentHeroDialog();
    },
    selectOpponentItems() {
      // 实现选择敌方装备弹框的逻辑
    },
    calculateDamage() {
      // 实现伤害计算的逻辑
      let ar = 0
      if (ar >= 0){
        this.damageData.a = 100/(100+ar) * this.heroData?.ad
      }

      this.heroModel = getHero('timo');
      this.heroModel.setLv(1)

      console.log(this.heroModel.q())
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
