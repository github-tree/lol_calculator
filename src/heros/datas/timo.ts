import type {HeroData, HeroModel} from "@/heros/dataInterface";
import {plan1} from "@/heros/plan";

const d = [
  {lv:1, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:1, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:2, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:3, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:4, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:5, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:6, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:7, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:8, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:9, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:10, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:11, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:12, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:13, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:14, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:15, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:16, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:17, ad:54, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
  {lv:18, ad:154, ap:0, ar:24,mr:30, crit:0,as:0,haste:0,speed:330,mPen:0,mPenPercentage:0,lethality:0,hp5:5.5,mp5:9.6,hp:0,mp:0,},
] as HeroData[]

const q = {
  t:1,//j + b * ap
  dt:2,
  j:[0,80,125,170,215,260],
  b:[0,0.8,0.8,0.8,0.8,0.8]
}

const Timo: HeroModel = {
  data: {} as HeroData,
  name: "提莫",
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
    this.data = d[lv]
  },
};

export default Timo;
