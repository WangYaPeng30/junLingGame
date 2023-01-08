
// let ran = Math.random()*100
// let blood = 0
// let spell = 0
// let talentMul = 0
// let attack = 0
// let sunres = 0
// let wingres = 0
// let spiritres = 0
// let clan = 0
// let name = 0
// let initStar = 0
// let id = 0
// const randomData = []
// for(let i = 0 ; i < 10 ; i++){
//     if(ran<8){
//         blood = Math.floor(Math.random()*100+400)
//     }else if(ran>95){
//         blood = Math.floor(Math.random()*100+800)
//     }else{
//         blood = Math.floor(Math.random()*300+500)
//     }
//     ran = Math.random()*100
//     randomData.push({'blood':blood})
// }

// for(let i = 0 ; i < 10 ; i++){
//     if(ran<8){
//         attack = Math.floor(Math.random()*5+10)
//     }else if(ran>95){
//         attack = Math.floor(Math.random()*5+45)
//     }else{
//         attack = Math.floor(Math.random()*25+15)
//     }
//     ran = Math.random()*100
//     randomData[i].attack = attack
// }
// for(let i = 0 ; i < 10 ; i++){
//     if(ran<8){
//         spell = Math.floor(Math.random()*20+100)
//     }else if(ran>95){
//         spell = Math.floor(Math.random()*10+290)
//     }else{
//         spell = Math.floor(Math.random()*100+150)
//     }
//     ran = Math.random()*100
//     randomData[i].spell = spell
// }
// for(let i = 0 ; i < 10 ; i++){
//     if(ran<8){
//         talentMul = Math.floor(Math.random()*5+3)
//     }else if(ran>95){
//         talentMul = Math.floor(Math.random()*4+22)
//     }else{
//         talentMul = Math.floor(Math.random()*8+10)
//     }
//     ran = Math.random()*100
//     randomData[i].talentMul = talentMul
// }
// for(let i = 0 ; i < 10 ; i++){
//     if(ran<8){
//         sunres = Math.floor(Math.random()*5+30)
//     }else if(ran>95){
//         sunres = Math.floor(Math.random()*6+90)
//     }else{
//         sunres = Math.floor(Math.random()*25+50)
//     }
//     ran = Math.random()*100
//     randomData[i].sunres = sunres
// }
// for(let i = 0 ; i < 10 ; i++){
//     if(ran<8){
//         wingres = Math.floor(Math.random()*5+30)
//     }else if(ran>95){
//         wingres = Math.floor(Math.random()*6+90)
//     }else{
//         wingres = Math.floor(Math.random()*25+50)
//     }
//     ran = Math.random()*100
//     randomData[i].wingres = wingres
// }
// for(let i = 0 ; i < 10 ; i++){
//     if(ran<8){
//         spiritres = Math.floor(Math.random()*5+30)
//     }else if(ran>95){
//         spiritres = Math.floor(Math.random()*6+90)
//     }else{
//         spiritres = Math.floor(Math.random()*25+50)
//     }
//     ran = Math.random()*100
//     randomData[i].spiritres = spiritres
// }
// for(let i = 0 ; i < 10 ; i++){
//     clan = Math.floor(Math.random()*6+1)
//     randomData[i].clan = clan
// }
// for(let i = 0 ; i < 10 ; i++){
//     id = i + 5
//     if( id >= 10){
//         id = '0'+id
//     }else{
//         id = '00'+id
//     }
//     randomData[i].id = id
//     randomData[i].name = id
//     randomData[i].initStar = 3
// }
// console.log(JSON.stringify(randomData))