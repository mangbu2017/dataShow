import './jqUI.js';
import './jqFP.js'; // es6方法
import '../less/index.less'; // require非es6
import Manager from './componentManager';
import Component from './baseComponents.js';

let option1 = {
    type: 'pie',
    css: {
        width: '300px',
        height: '300px',
        position: 'absolute',
        backgroundColor: 'yellow',
        left: '50%',
        marginLeft: '-150px',
        opacity: 0
    },
    animateIn: {
        top: 100,
        opacity: 1
    },
    animateOut: {
        top: -50,
        opacity: 0
    },
    data: [
        ['javascrpit', 0.3, 'green'],
        ['html', 0.1, 'red'],
        ['css', 0.1, 'purple'],
        ['jQuery', 0.2, 'blue'],
        ['react', .3, 'pink']
    ],
    delay: 1500
}
let option2 = {
    type: 'poly',
    css: {
        width: '300px',
        height: '300px',
        position: 'absolute',
        backgroundColor: 'yellow',
        left: '50%',
        marginLeft: '-150px',
        opacity: 0
    },
    animateIn: {
        top: 100,
        opacity: 1
    },
    animateOut: {
        top: -50,
        opacity: 0
    },
    data: [
        ['javascrpit', 0.4, 'green'],
        ['html', 0.1, 'red'],
        ['css', 0.2, 'purple'],
        ['jQuery', 0.4, 'blue'],
        ['react', .6, 'pink']
    ]
    
}
let option3 = {
    type: 'bar',
    css: {
        width: '300px',
        height: '300px',
        position: 'absolute',
        backgroundColor: 'yellow',
        left: '50%',
        marginLeft: '-150px',
        opacity: 0
    },
    animateIn: {
        top: 100,
        opacity: 1
    },
    animateOut: {
        top: -50,
        opacity: 0
    },
    data: [
        ['javascrpit', 0.3, 'green'],
        ['html', 0.1, 'red'],
        ['css', 0.1, 'purple'],
        ['jQuery', 0.2, 'blue'],
        ['react', .3, 'pink']
    ]
}

let option = {
    type: 'base',
    css: {
        width: 214,
        height: 46,
        position: 'absolute',
        // 在这里我发现了一个问题 就是说我们再使用url时
        // 正常来说是使用打包好的文件
        // backgroundImage: "url('../img/logoIndex.png')",
        left: '50%',
        top: -50,
        marginLeft: -107,
        opacity: 0
    },
    animateIn: {
        top: 100,
        opacity: 1
    },
    animateOut: {
        top: -50,
        opacity: 0
    },
    classname: 'first',
    delay: 1000
}

let option_1 = {
    type: 'base',
    css: {
        width: 200,
        height: 65,
        position: 'absolute',
        left: -100,
        top: 220,
        marginLeft: -107,
        opacity: 0
    },
    animateIn: {
        left: '50%',
        opacity: 1
    },
    animateOut: {
        left: -100,
        opacity: 0
    },
    classname: 'second shake',
    delay: 1300
}

let option_2 = {
    type: 'base',
    css: {
        width: 173,
        height: 247,
        position: 'absolute',
        left: -200,
        bottom: -200,
        opacity: 0
    },
    animateIn: {
        left: 0, 
        bottom: 0,
        opacity: 1
    },
    animateOut: {
        left: -200,
        bottom: -200,
        opacity: 0
    },
    classname: 'left',
    delay: 1600
}

let option_3 = {
    type: 'base',
    css: {
        width: 162,
        height: 225,
        position: 'absolute',
        right: -200,
        bottom: -200,
        opacity: 0
    },
    animateIn: {
        right: 0, 
        bottom: 0,
        opacity: 1
    },
    animateOut: {
        right: -200,
        bottom: -200,
        opacity: 0
    },
    classname: 'right',
    delay: 1900
}

let option1_1 = {
    type: 'base',
    css: {
        width: 250,
        height: 62,
        position: 'absolute',
        top: 50,
        left: -250,
        opacity: 0
    },
    animateIn: {
        left: 0, 
        opacity: 1
    },
    animateOut: {
        left: -250,
        opacity: 0
    },
    classname: 'mind',
    delay: 1000
}

let option1_2 = {
    text: '用实力将情怀落地!',
    type: 'base',
    css: {
        width: 200,
        height: 30,
        position: 'absolute',
        top: 0,
        opacity: 0,
        lineHight: 30,
        fontWeight: 900,
        fontSize: 17,
        textAlign: 'center',
        color: 'orange',
        left: '50%',
        marginLeft: -100
    },
    animateIn: {
        top: 150,
        opacity: 1
    },
    animateOut: {
        top: 0,
        opacity: 0
    },
    delay: 1300
}

let option1_3 = {
    type: 'base',
    text: 'k开放接口辣椒看见发生较大1就离开房间撒娇方式激发看见对方会计啊会计法大家饭卡时间撒娇方式激发看见对方会计啊会计法大家饭卡时间',
    css: {
        width: 260,
        height: 168,
        position: 'absolute',
        top: 0,
        marginLeft: -145,
        left: '50%',
        opacity: 0,
        padding: '10px 15px 10px 15px',
        textAlign: 'justify',
        fontSize: 18,
        lineHeight: '25px',
        fontWeight: 900,
    },
    animateIn: {
        top: 220,
        opacity: 1
    },
    animateOut: {
        top: 0,
        opacity: 0
    },
    classname: 'dialog',
    delay: 1600
}

let option1_4 = {
    type: 'base',
    css: {
        width: 260,
        height: 155,
        position: 'absolute',
        bottom: -200,
        opacity: 0,
        marginLeft: -130,
        left: '50%'
    },
    animateIn: {
        bottom: 30,
        opacity: 1
    },
    animateOut: {
        bottom: -200,
        opacity: 0
    },
    classname: 'people',
    delay: 1900
}

let option2_1 = {
    type: 'base',
    css: {
        width: 250,
        height: 62,
        position: 'absolute',
        top: 50,
        left: -250,
        opacity: 0
    },
    animateIn: {
        left: 0, 
        opacity: 1
    },
    animateOut: {
        left: -250,
        opacity: 0
    },
    classname: 'bar1',
    delay: 1000
}

let option2_2 = {
    text: '课程体系柱状图',
    type: 'base',
    css: {
        width: 200,
        height: 30,
        position: 'absolute',
        top: 0,
        opacity: 0,
        lineHight: 30,
        fontWeight: 900,
        fontSize: 17,
        textAlign: 'center',
        color: 'orange',
        left: '50%',
        marginLeft: -100
    },
    animateIn: {
        top: 180,
        opacity: 1
    },
    animateOut: {
        top: 0,
        opacity: 0
    },
    delay: 1300
}

let option2_3 = {
    type: 'bar',
    css: {
        width: '250px',
        height: '300px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-125px',
        opacity: 0,
        bottom: -300
    },
    animateIn: {
        bottom: 100,
        opacity: 1
    },
    animateOut: {
        bottom: -300,
        opacity: 0
    },
    data: [
        ['javascrpit', 0.3, 'green'],
        ['html', 0.1, 'red'],
        ['css', 0.1, 'purple'],
        ['jQuery', 0.2, 'blue'],
        ['react', .3, 'pink']
    ],
    delay: 1600
}

let option3_1 = {
    type: 'base',
    css: {
        width: 250,
        height: 62,
        position: 'absolute',
        top: 50,
        left: -250,
        opacity: 0
    },
    animateIn: {
        left: 0, 
        opacity: 1
    },
    animateOut: {
        left: -250,
        opacity: 0
    },
    classname: 'polyline1',
    delay: 1000
}

let option3_2 = {
    text: '课程体系折线图',
    type: 'base',
    css: {
        width: 200,
        height: 30,
        position: 'absolute',
        top: 0,
        opacity: 0,
        lineHight: 30,
        fontWeight: 900,
        fontSize: 17,
        textAlign: 'center',
        color: 'orange',
        left: '50%',
        marginLeft: -100
    },
    animateIn: {
        top: 180,
        opacity: 1
    },
    animateOut: {
        top: 0,
        opacity: 0
    },
    delay: 1300
}

let option3_3 = {
    type: 'poly',
    css: {
        width: '250px',
        height: '300px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-125px',
        opacity: 0,
        bottom: -300
    },
    animateIn: {
        bottom: 100,
        opacity: 1
    },
    animateOut: {
        bottom: -300,
        opacity: 0
    },
    data: [
        ['javascrpit', 0.3, 'green'],
        ['html', 0.1, 'red'],
        ['css', 0.1, 'purple'],
        ['jQuery', 0.2, 'blue'],
        ['react', .3, 'pink']
    ],
    delay: 1600
}

let option4_1 = {
    type: 'base',
    css: {
        width: 250,
        height: 62,
        position: 'absolute',
        top: 50,
        left: -250,
        opacity: 0
    },
    animateIn: {
        left: 0, 
        opacity: 1
    },
    animateOut: {
        left: -250,
        opacity: 0
    },
    classname: 'pie1',
    delay: 1000
}

let option4_2 = {
    text: '课程体系扇形图',
    type: 'base',
    css: {
        width: 200,
        height: 30,
        position: 'absolute',
        top: 0,
        opacity: 0,
        lineHight: 30,
        fontWeight: 900,
        fontSize: 17,
        textAlign: 'center',
        color: 'orange',
        left: '50%',
        marginLeft: -100
    },
    animateIn: {
        top: 180,
        opacity: 1
    },
    animateOut: {
        top: 0,
        opacity: 0
    },
    delay: 1300
}

let option4_3 = {
    type: 'pie',
    css: {
        width: '250px',
        height: '300px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-125px',
        opacity: 0,
        bottom: -300
    },
    animateIn: {
        bottom: 100,
        opacity: 1
    },
    animateOut: {
        bottom: -300,
        opacity: 0
    },
    data: [
        ['javascrpit', 0.3, 'green'],
        ['html', 0.1, 'red'],
        ['css', 0.1, 'purple'],
        ['jQuery', 0.2, 'blue'],
        ['react', .3, 'pink']
    ],
    delay: 1600
}

Manager.init('wrapper')
.addPage()
.addComponent(option4_1)
.addComponent(option4_2)
.addComponent(option4_3)
.addPage()
.addComponent(option3_1)
.addComponent(option3_2)
.addComponent(option3_3)
       .addPage()
       .addComponent(option2_1)
       .addComponent(option2_2)
       .addComponent(option2_3)
       .addPage()
       .addComponent(option1_1)
       .addComponent(option1_2)
       .addComponent(option1_3)
       .addComponent(option1_4)
       .addPage('index')
       .addComponent(option)
       .addComponent(option_1)
       .addComponent(option_2)
       .addComponent(option_3)
       .addPage()
       .addComponent(option2)
       .addPage()
       .addComponent(option1)
       .addPage()
       .addComponent(option3)
       .load();
       




