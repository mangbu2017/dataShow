import '../less/component.less';

let Component = (options) => {
    let component = $('<div/>').addClass('component');
    let id = new Date().getTime() + '_com';
    component.attr('id', id);
    options.text && component.text(options.text);
    options.css && component.css(options.css);
    options.classname && component.addClass(options.classname);

    component.on('in', function(){
        setTimeout(function(){
            component.removeClass('leaveComponent');
            component.addClass('loadComponent');
            options.animateIn && component.animate(options.animateIn);
        }, options.delay || 0);
    })

    component.on('out', function(){
        component.removeClass('loadComponent');
        component.addClass('leaveComponent');
        options.animateOut && component.animate(options.animateOut);
    })
    return component;
}

export default Component;