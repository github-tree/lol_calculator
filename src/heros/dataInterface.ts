export interface HeroData {
    lv:number;
    qL:number;
    wL:number;
    eL:number;
    rL:number;
    ad:number;
    ap:number;
    ar:number;
    mr:number;
    crit:number;    //攻速
    as:number;      //暴击
    haste:number;   //技能急速
    speed:number;
    mPen:number;
    mPenPercentage:number;
    lethality:number;
    hp:number;
    mp:number;
    hp5:number;
    mp5:number;
}

export interface HeroModel {
    data:HeroData
    name: string;
    q(): void;
    w(): void;
    e(): void;
    r(): void;
    setLv(lv:number):void;
}
