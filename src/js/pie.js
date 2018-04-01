import Component from './baseComponents.js'
import '../less/pie.less';

let Pie = (options) => {
    let component = Component(options);
    component.addClass('pie');
    let w = parseInt(options.css.width)*2;
    let h = parseInt(options.css.height)*2;
    let canvas = $('<canvas/>').get(0);
    canvas.width = w;
    canvas.height = h;
    
    component.append(canvas);
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#eee';
    let r = w / 2;
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.fill();

    let data = options.data;
    let count = 0;
    
    data.forEach((ele, index) => {
        ctx.beginPath();
        ctx.moveTo(r, r);
        ctx.arc(r , r, r, Math.PI * 2 * (.75 + count), Math.PI * 2 * (.75 + count + ele[1]));
        let mid = ele[1] / 2;
        let middle = mid + count;
        let div = $('<div/>').text(ele[0]).addClass('text');
        
        if(middle >= 0 && middle <= 0.25){
            let cos = Math.cos(middle * Math.PI * 2) * r / 2;
            let sin = Math.sin(middle * Math.PI * 2) * r / 2;
            let x = r / 2 + sin;
            let y = r / 2 + cos;
            div.css({
                bottom: y + 'px',
                left: x + 'px'
            })
        }else if(middle > .25 && middle <= .5){
            let cos = Math.cos((middle - .25) * Math.PI * 2) * r / 2;
            let sin = Math.sin((middle - .25) * Math.PI * 2) * r / 2;
            let x = r / 2 + cos;
            let y = r / 2 + sin;
            div.css({
                top: y + 'px',
                left: x + 'px'
            })
        }else if(middle > .5 && middle <= .75){
            let cos = Math.cos((.75 - middle) * Math.PI * 2) * r / 2;
            let sin = Math.sin((.75 - middle) * Math.PI * 2) * r / 2;
            let x = r / 2 + cos;
            let y = r / 2 + sin;
            div.css({
                top: y + 'px',
                right: x + 'px'
            })
        }else if(middle > .75 && middle <= 1){
            let cos = Math.cos((1 - middle) * Math.PI * 2) * r / 2;
            let sin = Math.sin((1 - middle) * Math.PI * 2) * r / 2;
            let x = r / 2 + sin;
            let y = r / 2 + cos;
            div.css({
                bottom: y + 'px',
                right: x + 'px'
            })
        }
        div.appendTo(component);
        count += ele[1];
        ctx.fillStyle = ele[2];
        ctx.fill();
    })

    let canvas1 = $('<canvas/>').get(0);
    [canvas1.height, canvas1.width] = [h, w];
    let ctx1 = canvas1.getContext('2d');
    component.append(canvas1);

    var start = 1.5 * Math.PI;
    function draw(count1){
        ctx1.clearRect(0, 0, w, h);
        ctx1.beginPath();
        ctx1.fillStyle = 'skyblue';
        ctx1.moveTo(r, r);
        ctx1.arc(r, r, r, start, Math.PI * count1, 1);
        ctx1.fill();
    }   
    console.log(options.delay);
    // draw();
    component.on('in', function(){
        var count1 = 3.5
        setTimeout(function(){
            for(let i = 0; i < 200; i ++){
                setTimeout(function(){
                    count1 += .01;
                    draw(count1);
                }, i * 10)
            }
        }, options.delay || 200)
    })
    

    return component;
}

export default Pie;

