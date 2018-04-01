import './jqUI.js';
import './jqFP.js'; 
import '../less/index.less'; 
import Manager from './componentManager';
import Component from './baseComponents.js';

let option2_1 = {
    text: '掌握技能',   
    css: {
        top: 10,
        width: '250px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '20px',
        position: 'absolute',
        color: '#fff',
        opacity: 0,
        left: -250
    },
    animateIn: {
        left: 0,
        right: '10%',
        opacity: 1
    },
    animateOut: {
        top: 0,
        left: -250,
        opacity: 0
    },
    classname: 'title',
    delay: 500
}

let option2_2 = {
    text: '柱状分布图',
    type: 'base',
    css: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: 0,
        opacity: 0,
        lineHight: 30,
        fontWeight: 900,
        fontSize: 17,
        textAlign: 'center',
        color: 'orange',
        left: '50%',
        marginLeft: -150
    },
    animateIn: {
        top: 180,
        opacity: 1
    },
    animateOut: {
        top: 0,
        opacity: 0
    },
    delay: 1000
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
        ['javascrpit', 0.6, 'green'],
        ['html', 0.7, 'red'],
        ['css', 0.6, 'purple'],
        ['jQuery', 0.5, 'blue'],
        ['react', .4, 'pink']
    ],
    delay: 1500
}

let myinfo_1 = {
    text: '刘宇航 23岁',   
    css: {
        width: '250px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '20px',
        position: 'absolute',
        fontSize: '30px',
        left: '20%',
        transform: 'rotate(15deg)',
        opacity: 0,
        top: -300
    },
    animateIn: {
        top: 100,
        opacity: 1
    },
    animateOut: {
        top: -300,
        opacity: 0
    },
    delay: 0
}

let myinfo_0 = {
    text: '个人信息',   
    css: {
        top: 10,
        width: '250px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '20px',
        position: 'absolute',
        color: '#fff',
        opacity: 0,
        left: -250
    },
    animateIn: {
        left: 0,
        right: '10%',
        opacity: 1
    },
    animateOut: {
        top: 0,
        left: -250,
        opacity: 0
    },
    classname: 'title',
    delay: 500
}

let myinfo_2 = {
    text: '黑龙江大学',   
    css: {
        top: 0,
        width: '250px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '20px',
        position: 'absolute',
        fontSize: '30px',
        transform: 'rotate(-20deg)',
        opacity: 0,
        right: -250
    },
    animateIn: {
        top: 300,
        right: '10%',
        opacity: 1
    },
    animateOut: {
        top: 0,
        right: -250,
        opacity: 0
    },
    delay: 500
}

let myinfo_3 = {
    text: '软件工程 : 2015 ~ 2019',   
    css: {
        top: 0,
        width: '250px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '20px',
        position: 'absolute',
        fontSize: '30px',
        marginRight: '-125px',
        transform: 'rotate(20deg)',
        left: -250,
        opacity: 0,
    },
    animateIn: {
        left: '10%',
        top: 550,
        opacity: 1
    },
    animateOut: {
        top: 0,
        left: -250,
        opacity: 0
    },
    delay: 1000
}

let myinfo_4 = {
    css: {
        top: 180    ,
        width: '150px',
        position: 'absolute',
        transform: 'rotate(80deg)',
        left: -150,
        opacity: 0,
    },
    animateIn: {
        left: 0,
        opacity: 1
    },
    animateOut: {
        left: -150,
        opacity: 0
    },
    classname: 'me1',
    delay: 1500
}

let myinfo_5 = {
    css: {
        top: 350,
        width: '150px',
        height: '150px',
        position: 'absolute',
        transform: 'rotate(90deg)',
        borderRadius: 75,
        right: -150,
        opacity: 0,
    },
    animateIn: {
        right: '10%',
        opacity: 1
    },
    animateOut: {
        right: -150,
        opacity: 0
    },
    classname: 'me',
    delay: 2000
}

let option4_1 = {
    text: '技能掌握',   
    css: {
        top: 10,
        width: '250px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '20px',
        position: 'absolute',
        color: '#fff',
        opacity: 0,
        left: -250
    },
    animateIn: {
        left: 0,
        right: '10%',
        opacity: 1
    },
    animateOut: {
        top: 0,
        left: -250,
        opacity: 0
    },
    classname: 'title',
    delay: 500
}

let option4_2 = {
    text: '扇形分布图',
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
        width: 300,
        height: 300,
        position: 'absolute',
        left: '50%',
        marginLeft: '-150px',
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
        ['javascrpit', 0.3, '#FFFFCC'],
        ['html', 0.1, '#CCFFFF'],
        ['css', 0.1, '#FFCCCC'],
        ['jQuery', 0.2, '#99CCCC'],
        ['react', .3, '#FFCC99']
    ],
    delay: 1600
}

let option3_1 = {
    text: '技能掌握',   
    css: {
        top: 10,
        width: '250px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '20px',
        position: 'absolute',
        color: '#fff',
        opacity: 0,
        left: -250
    },
    animateIn: {
        left: 0,
        right: '10%',
        opacity: 1
    },
    animateOut: {
        top: 0,
        left: -250,
        opacity: 0
    },
    classname: 'title',
    delay: 500
}

let option3_2 = {
    text: '技能掌握程度折线图',
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
    delay: 1000
}

let option3_3 = {
    type: 'poly',
    css: {
        width:  300,
        height: 300,
        position: 'absolute',
        left: '50%',
        marginLeft: '-150px',
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
        ['javascrpit', 0.7, 'green'],
        ['html', 0.6, 'red'],
        ['css', 0.7, 'purple'],
        ['jQuery', 0.6, 'blue'],
        ['react', .4, 'pink']
    ],
    delay: 1500
}

Manager.init('wrapper')
.addPage()
.addComponent(myinfo_0)
.addComponent(myinfo_1)
.addComponent(myinfo_2)
.addComponent(myinfo_3)
.addComponent(myinfo_4)
.addComponent(myinfo_5)  
.addPage()
.addComponent(option2_1)
.addComponent(option2_2)
.addComponent(option2_3)
.addPage()
.addComponent(option3_1)
.addComponent(option3_2)
.addComponent(option3_3)
.addPage()
.addComponent(option4_1)
.addComponent(option4_2)
.addComponent(option4_3)
.load();
       




