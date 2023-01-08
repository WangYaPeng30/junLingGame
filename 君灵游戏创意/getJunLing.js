let getBtn = document.getElementsByClassName('getJunling')[0]
let getCon = document.getElementsByClassName('getContainer')[0]
let itemOne = document.getElementsByClassName('itemOne')
let itemTwo = document.getElementsByClassName('itemTwo')
let getJunlingOne = document.getElementsByClassName('getJunlingOne')[0]
let delJunlingOne = document.getElementsByClassName('delJunlingOne')[0]
let getJunlingTwo = document.getElementsByClassName('getJunlingTwo')[0]
let delJunlingTwo = document.getElementsByClassName('delJunlingTwo')[0]
let delItem = document.getElementsByClassName('delItem')
let delItemTwo = document.getElementsByClassName('delItemTwo')
let isActiveOne = false
let isActiveTwo = false
getJunlingOne.onclick = function(){
    getCon.innerText = ''
    let ranGet = Math.floor(Math.random()*(junLingList.length) + 1)
    let a = new Junling(junLingList[ranGet - 1])
    getCon.innerText += `
    标准属性：

    `
    a.showJunLing(getCon)
    getCon.innerText += (` 战力：${a.skillCal()}
    `)
    a.initProporty()
    for(let i = 0 ; i < itemOne.length ; i++){
        if(itemOne[i].innerText == ''){
            itemOne[i].innerHTML = `      <h3 style="text-align: center;">${i+1}.${a.name}</h3>
            <p >星级:${a.star} 天赋影响力:${a.talentMul}</p>
            <p>血量:${a.blood} 战力：${a.skillCal()}</p>
            <p>攻击:${a.attack} 光抗:${a.sunres} <br>翼抗:${a.wingres} 灵抗:${a.wingres}</p>`
            //介绍框
            getCon.innerText += `
            你所获得：
        
            `
            a.showJunLing(getCon)
            getCon.innerText += (' 战力：'+a.skillCal())
            break
        }
    }
}


delJunlingOne.onclick = function(){
    if(!isActiveOne){
        delJunlingOne.innerText = '取消'
        for(let i = 0 ; i < delItem.length ; i++){
            delItem[i].className += ' delActive'
        }
    }else{
        delJunlingOne.innerText = '删除'
        for(let i = 0 ; i < delItem.length ; i++){
            delItem[i].className = delItem[i].className.replace(' delActive','')
        }
    }
    isActiveOne = !isActiveOne
    for(let i = 0 ; i < delItem.length ; i++){
        delItem[i].onclick = function(){
            if(itemOne[i].innerText == ''){
                alert('该位置无君临!!')
            }else{
                itemOne[i].innerHTML = ''
            }
        }
    }
}


getJunlingTwo.onclick = function(){
    getCon.innerText = ''
    let ranGet = Math.floor(Math.random()*(junLingList.length) + 1)
    let a = new Junling(junLingList[ranGet - 1])
    getCon.innerText += `
    标准属性：

    `
    a.showJunLing(getCon)
    getCon.innerText += (` 战力：${a.skillCal()}
    `)
    a.initProporty()
    for(let i = 0 ; i < itemOne.length ; i++){
        if(itemTwo[i].innerText == ''){
            itemTwo[i].innerHTML = `      <h3 style="text-align: center;">${i+1}.${a.name}</h3>
            <p >星级:${a.star} 天赋影响力:${a.talentMul}</p>
            <p>血量:${a.blood} 战力：${a.skillCal()}</p>
            <p>攻击:${a.attack} 光抗:${a.sunres} <br>翼抗:${a.wingres} 灵抗:${a.wingres}</p>`
            //介绍框
            getCon.innerText += `
            你所获得：
        
            `
            a.showJunLing(getCon)
            getCon.innerText += (' 战力：'+a.skillCal())
            break
        }
    }
}


delJunlingTwo.onclick = function(){
    if(!isActiveTwo){
        delJunlingTwo.innerText = '取消'
        for(let i = 0 ; i < delItem.length ; i++){
            delItemTwo[i].className += ' delActive'
        }
    }else{
        delJunlingTwo.innerText = '删除'
        for(let i = 0 ; i < delItem.length ; i++){
            delItemTwo[i].className = delItemTwo[i].className.replace(' delActive','')
        }
    }
    isActiveTwo = !isActiveTwo
    for(let i = 0 ; i < delItemTwo.length ; i++){
        delItemTwo[i].onclick = function(){
            if(itemTwo[i].innerText == ''){
                alert('该位置无君临！！')
            }else{
                itemTwo[i].innerHTML = ''
            }
        }
    }
}