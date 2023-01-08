skillClass = ['光', '翼' , '普' , '灵']
// blood,attack,spell,talentMul,sunres,wingres,spiritres
clanList = [
    {id:'000'},
    {id:'001', name:'1', sun:1, wing:2, ord:4, spirit:9},
    {id:'002', name:'2', sun:3, wing:4, ord:8, spirit:7},
    {id:'003', name:'3', sun:5, wing:9, ord:9, spirit:5},
    {id:'004', name:'4', sun:2, wing:3, ord:10, spirit:8},
    {id:'005', name:'5', sun:3, wing:4, ord:4, spirit:6},
    {id:'006', name:'6', sun:4, wing:8, ord:6, spirit:7},
]

const junLingList = [
    {"blood":510,"attack":25,"spell":170,"talentMul":20,"sunres":65,"wingres":65,"spiritres":65,"clan":1,"id":"001","name":"迪亚洛","initStar":3},
    {"blood":550,"attack":19,"spell":180,"talentMul":19,"sunres":70,"wingres":60,"spiritres":60,"clan":4,"id":"002","name":"蒂希","initStar":3},
    {"blood":650,"attack":29,"spell":200,"talentMul":10,"sunres":70,"wingres":50,"spiritres":80,"clan":4,"id":"003","name":"奇奥力","initStar":3},
    {"blood":657,"attack":23,"spell":171,"talentMul":14,"sunres":58,"wingres":76,"spiritres":85,"clan":3,"id":"004","name":"库奇亚斯","initStar":3},
    {"blood":449,"attack":28,"spell":179,"talentMul":14,"sunres":56,"wingres":63,"spiritres":56,"clan":3,"id":"005","name":"林斯德","initStar":3},
    {"blood":793,"attack":18,"spell":243,"talentMul":15,"sunres":66,"wingres":55,"spiritres":58,"clan":5,"id":"006","name":"艾丘","initStar":3},
    {"blood":773,"attack":23,"spell":164,"talentMul":13,"sunres":61,"wingres":57,"spiritres":91,"clan":5,"id":"007","name":"翼真","initStar":3},
    {"blood":619,"attack":11,"spell":236,"talentMul":11,"sunres":50,"wingres":67,"spiritres":57,"clan":4,"id":"008","name":"库玛奇亚","initStar":3},
    {"blood":503,"attack":21,"spell":160,"talentMul":17,"sunres":53,"wingres":70,"spiritres":53,"clan":6,"id":"009","name":"阿尔瓦多","initStar":3},
    {"blood":796,"attack":27,"spell":188,"talentMul":17,"sunres":55,"wingres":53,"spiritres":66,"clan":5,"id":"010","name":"布洛奇","initStar":3},
    {"blood":746,"attack":29,"spell":228,"talentMul":10,"sunres":51,"wingres":69,"spiritres":54,"clan":5,"id":"011","name":"零","initStar":3},
    {"blood":701,"attack":35,"spell":248,"talentMul":6,"sunres":33,"wingres":70,"spiritres":33,"clan":5,"id":"012","name":"坎路法尔亚","initStar":3},
    {"blood":510,"attack":21,"spell":234,"talentMul":11,"sunres":68,"wingres":61,"spiritres":30,"clan":3,"id":"013","name":"埃尔德","initStar":3},
    {"blood":765,"attack":37,"spell":236,"talentMul":10,"sunres":66,"wingres":67,"spiritres":51,"clan":1,"id":"014","name":"瓦斯琪","initStar":3},
    {"blood":754,"attack":38,"spell":291,"talentMul":12,"sunres":66,"wingres":62,"spiritres":34,"clan":3,"id":"015","name":"利拉异奇","initStar":3},
    {"blood":749,"attack":10,"spell":150,"talentMul":12,"sunres":51,"wingres":50,"spiritres":33,"clan":3,"id":"016","name":"大力神","initStar":3},
    {"blood":646,"attack":24,"spell":294,"talentMul":17,"sunres":68,"wingres":94,"spiritres":34,"clan":6,"id":"017","name":"小模","initStar":3},
    {"blood":729,"attack":23,"spell":192,"talentMul":17,"sunres":70,"wingres":57,"spiritres":67,"clan":1,"id":"018","name":"德法尔","initStar":3},
    {"blood":715,"attack":19,"spell":155,"talentMul":13,"sunres":64,"wingres":60,"spiritres":56,"clan":3,"id":"019","name":"德坎诺奇斯","initStar":3},
    {"blood":462,"attack":32,"spell":190,"talentMul":15,"sunres":54,"wingres":63,"spiritres":31,"clan":6,"id":"020","name":"战","initStar":3},
    {"blood":764,"attack":24,"spell":221,"talentMul":17,"sunres":72,"wingres":70,"spiritres":61,"clan":4,"id":"021","name":"34号卫兵","initStar":3},
    {"blood":623,"attack":29,"spell":162,"talentMul":16,"sunres":34,"wingres":61,"spiritres":55,"clan":5,"id":"022","name":"里奇","initStar":3},
    {"blood":465,"attack":31,"spell":171,"talentMul":13,"sunres":94,"wingres":53,"spiritres":90,"clan":3,"id":"023","name":"斯摩德亚","initStar":3},
    {"blood":677,"attack":35,"spell":207,"talentMul":16,"sunres":50,"wingres":72,"spiritres":63,"clan":6,"id":"024","name":"贝尔莫德","initStar":3},
    {"blood":864,"attack":39,"spell":243,"talentMul":13,"sunres":61,"wingres":72,"spiritres":52,"clan":6,"id":"025","name":"弗西里斯","initStar":3},
    {"blood":714,"attack":38,"spell":173,"talentMul":13,"sunres":58,"wingres":60,"spiritres":74,"clan":2,"id":"026","name":"烈","initStar":3},
    {"blood":513,"attack":30,"spell":204,"talentMul":16,"sunres":68,"wingres":61,"spiritres":51,"clan":5,"id":"027","name":"柯卡洛","initStar":3},
    {"blood":673,"attack":24,"spell":186,"talentMul":17,"sunres":64,"wingres":56,"spiritres":90,"clan":5,"id":"028","name":"棘","initStar":3},
    {"blood":692,"attack":25,"spell":156,"talentMul":4,"sunres":55,"wingres":69,"spiritres":91,"clan":6,"id":"029","name":"森","initStar":3},
    {"blood":747,"attack":35,"spell":244,"talentMul":13,"sunres":54,"wingres":33,"spiritres":50,"clan":6,"id":"030","name":"凯尔","initStar":3},
    {"blood":515,"attack":35,"spell":221,"talentMul":11,"sunres":71,"wingres":73,"spiritres":65,"clan":2,"id":"031","name":"洛卡奇夫","initStar":3},
    {"blood":774,"attack":27,"spell":231,"talentMul":15,"sunres":56,"wingres":53,"spiritres":65,"clan":6,"id":"032","name":"布尔泽","initStar":3},
    {"blood":732,"attack":30,"spell":244,"talentMul":14,"sunres":57,"wingres":60,"spiritres":69,"clan":2,"id":"033","name":"鲁拉","initStar":3},
    {"blood":539,"attack":38,"spell":235,"talentMul":14,"sunres":71,"wingres":34,"spiritres":57,"clan":1,"id":"034","name":"异","initStar":3}
]


class Junling{
    constructor(obj){
        this.name = obj.name
        this.star = obj.initStar
        this.blood = obj.blood
        this.spell = obj.spell
        this.clan = obj.clan
        this.talentMul = obj.talentMul
        this.attack = obj.attack
        this.sunres = obj.sunres
        this.wingres = obj.wingres
        this.spiritres = obj.spiritres
        this.ord = 60
        this.id = obj.id
    }

    showJunLing(obj){
        obj.innerText += `姓名:${this.name}  星级:${this.star}  血量:${this.blood}  法力:${this.spell}  天赋影响力:${this.talentMul}  攻击：${this.attack}  光抗：${this.sunres}  翼抗：${this.wingres}  灵抗:${this.spiritres}`
    }
    
    skillCal(){
        let allTo = 0
        allTo += Math.floor(this.blood*1/10) 
        allTo += Math.floor(this.attack*2.5) 
        allTo += Math.floor(this.spell*1/16) 
        allTo += Math.floor(this.talentMul*1.5) 
        allTo += Math.floor((this.sunres+this.spiritres+this.wingres)*1/3)
        return allTo
    }

    initProporty(){
        let ranInit = Math.floor(Math.random()*200)
        let num = Math.floor(Math.random()*80-50)
        if(ranInit < 10){
            this.blood += (50+ranInit) 
        }else{
            this.blood += num
        }
        ranInit = Math.floor(Math.random()*200)
        num = Math.floor(Math.random()*15-10)
        if(ranInit < 10){
            this.attack += (10+ranInit)
        }else{
            this.attack += num
        }
        ranInit = Math.floor(Math.random()*200)
        num = Math.floor(Math.random()*70-40)
        if(ranInit < 10){
            this.spell += (50+ranInit)
        }else{
            this.spell += num
        }
        ranInit = Math.floor(Math.random()*200)
        num = Math.floor(Math.random()*30-20)
        if(ranInit < 10){
            this.sunres += (20+ranInit)
        }else{
            this.sunres += num
        }
        ranInit = Math.floor(Math.random()*200)
        num = Math.floor(Math.random()*30-20)
        if(ranInit < 10){
            this.wingres += (20+ranInit)
        }else{
            this.wingres += num
        }
        ranInit = Math.floor(Math.random()*200)
        num = Math.floor(Math.random()*30-20)
        if(ranInit < 10){
            this.spiritres += (20+ranInit)
        }else{
            this.spiritres += num
        }
    }
}










