let orderList = document.getElementsByClassName('orderList')[0]
let mod = document.getElementById('orderWay')
let orderTitle = document.getElementsByClassName('orderTitle')[0]
let junLingItem = 0
let content = ''
const junLingOrder = [...junLingList]
for(let i = 0 ; i < junLingList.length ; i++){
    junLingItem = new Junling(junLingList[i])
    junLingOrder[i].skill = junLingItem.skillCal()
}
junLingOrder.sort((a,b) => b.skill - a.skill)
for(let i = 0 ; i < junLingOrder.length ; i++){
    junLingItem = new Junling(junLingOrder[i])
    content += `<li>第${i+1}位   ${junLingItem.name}的战斗力:${junLingItem.skillCal()} 序号：${junLingItem.id}</li>`
}
orderList.innerHTML = `${content}`
mod.onchange = () => {
    switch (mod.value){
        case 'skill':
            content = ''
            junLingOrder.sort((a,b) => b.skill - a.skill)
            orderTitle.innerText = '战力排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的战斗力:${junLingItem.skillCal()} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
        case 'blood':
            content = ''
            junLingOrder.sort((a,b) => b.blood - a.blood)
            orderTitle.innerText = '血量排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的血量:${junLingItem.blood} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
        case 'attack':
            content = ''
            junLingOrder.sort((a,b) => b.attack - a.attack)
            orderTitle.innerText = '攻击排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的攻击:${junLingItem.attack} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
        case 'spell':
            content = ''
            junLingOrder.sort((a,b) => b.spell - a.spell)
            orderTitle.innerText = '法术量排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的法术量:${junLingItem.spell} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
        case 'sunres':
            content = ''
            junLingOrder.sort((a,b) => b.sunres - a.sunres)
            orderTitle.innerText = '光抗排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的光抗:${junLingItem.sunres} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
        case 'spiritres':
            content = ''
            junLingOrder.sort((a,b) => b.spiritres - a.spiritres)
            orderTitle.innerText = '灵抗排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的灵抗:${junLingItem.spiritres} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
        case 'wingres':
            content = ''
            junLingOrder.sort((a,b) => b.wingres - a.wingres)
            orderTitle.innerText = '翼抗排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的翼抗:${junLingItem.wingres} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
        case 'talentMul':
            content = ''
            junLingOrder.sort((a,b) => b.talentMul - a.talentMul)
            orderTitle.innerText = '天赋影响力排序如下：'
            for(let i = 0 ; i < junLingOrder.length ; i++){
                let junLingItem = new Junling(junLingOrder[i])
                content += `<li>第${i+1}位   ${junLingItem.name}的天赋影响力:${junLingItem.talentMul} 序号：${junLingItem.id}</li>`
            }
            orderList.innerHTML = `${content}`
            break
    }
}
