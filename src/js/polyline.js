import '../less/polyline.less';
import Component from './baseComponents.js';

let Polyline = (options) => {
    var data = options.data;
    let component = Component(options);
    component.addClass('polyline');
    

    let polylineCanvas = $('<canvas/>').get(0);
    // 通过get(0)获得原生dom
    let ctx = polylineCanvas.getContext('2d');
    let times = 2;
    polylineCanvas.width = parseInt(options.css.width) * times;
    polylineCanvas.height = parseInt(options.css.height) * times;
    component.append(polylineCanvas);
    let width = polylineCanvas.width;
    let height = polylineCanvas.height;

    let step = 10;
    let steplength = height / step;
    let types = data.length + 1;
    let typelength = width / types;
    var footer = $('<div/>').addClass('footer').css({
        'padding': '0 ' + (typelength / times/ 2) + 'px',
    });

    for(let i = 0; i < types - 1; i ++){
        let div = $('<div/>').text(data[i][0]).css({
            'width': (typelength / times) + 'px',
        }).addClass('type')
        footer.append(div);
    }
    console.log(options.delay);
    component.append(footer);

    // 通过给component注册同名的事件来触发
    component.on('in', function(){
        // console.log('触发in事件')
        setTimeout(() => {
            let s = 0;
            for (let i = 0; i < 100; i ++){
                setTimeout(function(){
                    s += 0.01;
                    draw(s);
                }, 30 * i);
            }
        }, options.delay + 500)
    })
    // debugger;
    component.on('out', function(){
        // console.log('触发out事件')
        let s = 1;
        for (let i = 0; i < 100; i ++){
            setTimeout(function(){
                s -= 0.01
                draw(s);
            }, 30 * i);
        }
    })

    function draw(per){
        polylineCanvas.width = parseInt(options.css.width) * times;
        polylineCanvas.height = parseInt(options.css.height) * times;

        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'skyblue';
        
        for(let i = 0; i < step + 1; i ++){
            ctx.moveTo(0, i * steplength);
            ctx.lineTo(width, i * steplength);
        }
    
        for(let i = 0; i < types + 1; i ++){
            ctx.moveTo(i * typelength, 0);
            ctx.lineTo(i * typelength, height);
        }

        ctx.stroke();

        data.forEach((ele, index) => {
            let x = (index + 1) * typelength;
            let y = height - (height * ele[1]) * per;
            
            ctx.moveTo(x, y);
            ctx.arc(x, y, 5, 0, Math.PI*2);
        })
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(typelength, height);
        data.forEach((ele, index) => {
            let x = (index + 1) * typelength;
            let y = height - (height * ele[1]) * per;
            ctx.lineTo(x, y);
        })
        ctx.lineTo(width - typelength, height);
        ctx.fillStyle = 'rgba(255, 0, 0, .37)';
        // ctx.closePath();
        ctx.fill();
    
        data.forEach((ele, index) => {
            let x = (index + 1) * typelength;
            let y = height - (height * ele[1]) * per;
            ctx.font = "33px Arial";
            // 该font属性 只设置font-size 无效
            ctx.fillStyle = ele[2];
            // fillStyle 设置字体颜色
            ctx.fillText(ele[1] * 100 + '%', x - 20 , y - 10);
        })
    }

    return component;   

}

export default Polyline;