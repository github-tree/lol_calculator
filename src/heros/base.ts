import Kasha from "@/heros/datas/kasha";
import Timo from "@/heros/datas/timo";
import type {HeroModel} from "@/heros/dataInterface";


export const heroMap: Record<string, any> = {
    kasha: Kasha,
    timo: Timo,
};

export function getHero(optionValue: string): HeroModel {
    return heroMap[optionValue];
}
