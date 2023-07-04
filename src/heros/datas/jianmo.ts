import type {HeroData, HeroModel} from "@/heros/dataInterface";
import {plan1} from "@/heros/plan";

const d = [
  {
    lv:1,
    ad:60,
    ap:0,
    ar:38,
    mr:32,
    crit:0,
    critD:175,
    as:0.651,
    attackWindup:0.19737,
    haste:0,
    speed:345,
    mPen:0,
    mPenPercentage:0,
    lethality:0,
    hp5:3,
    mp5:0,
    hp:650,
    mp:0,
    attackRange:175,
  },

] as HeroData[]

const up = {
  up_ad:5,
  up_hp:114,
  up_hp5:1,
  up_ar:4.45,
  up_mr:2.05,
}

const q = {
  t:1,//j + b * ap
  dt:2,
  j:[0,80,125,170,215,260],
  b:[0,0.8,0.8,0.8,0.8,0.8]
}

const Timo: HeroModel = {
  data: {} as HeroData,
  name: "剑魔",
  lv:1,
  image:"",
  q() {
    if (this.data.qL === 0){
      return 0;
    }

    switch (q.t){
      case 1:
        let a = plan1(q.j[this.data.qL],q.j[this.data.qL],this.data.ap)
        console.log(a)
        return a
      default:
        return 0;
    }
  },
  w() {
    console.log(`Method 2 called by ${this.name}`);
  },
  e() {
    console.log(`Method 3 called by ${this.name}`);
  },
  r() {
    console.log(`Method 4 called by ${this.name}`);
  },
  setLv(lv){
    let data : HeroData = d[0]
    
    this.data = d[lv]
  },
};

export default Timo;
