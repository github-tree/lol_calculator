export interface HeroData {
    lv:number;
    ad:number;
    ap:number;
    ar:number;
    mr:number;
    crit:number;    //暴击
    critD:number;    //暴击伤害
    as:number;      //攻速
    attackWindup:number;//攻速收益
    haste:number;   //技能急速
    speed:number;
    mPen:number;
    mPenPercentage:number;
    lethality:number;
    hp:number;
    mp:number;
    hp5:number;
    mp5:number;
    attackRange:number;
    up_ad:number;
    up_hp:number;
    up_hp5:number;
    up_ar:number;
    up_mr:number;
}


export interface HeroModel {
    data:HeroData
    name: string;
    image:string;
    lv:number;
    q(): void;
    w(): void;
    e(): void;
    r(): void;
    setLv(lv:number):void;
}
