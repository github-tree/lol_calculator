import Kasha from "@/heros/datas/kasha";
import Jianmo from "@/heros/datas/jianmo";
import Timo from "@/heros/datas/timo";
import type {HeroModel} from "@/heros/dataInterface";


export const heroMap: Record<string, any> = {
    jianmo: Jianmo,
    kasha: Kasha,
    timo: Timo,
};

export function getHero(optionValue: string): HeroModel {
    return heroMap[optionValue];
}
