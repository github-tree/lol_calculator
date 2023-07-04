//统计增长公式
//等级增加，基础属性增加公式
//有八种基础统计数据可以通过成长而增加：攻击力、攻击速度、护甲、魔法抗性、生命值、生命再生、法力和法力再生。
//statistic=奖金+基础+g x (n-1) x (0.7025+0.0175 x (n-1))}
//
// 奖金 = 来自物品、符文、能力或增益的奖金统计数据
// 基数 = 初始统计值
// g = 生长统计量
// n = 等级
// (n - 1) = 升级总量
export function statisticsGrowthFormula (bonus:number,base:number,g:number,n:number){
    return (bonus + base + g * (n - 1) * (0.7025+0.0175 * (n-1)))
}

//j + b * ap
export function plan1 (j:number,b:number,p:number){
    return j + b * p
}
