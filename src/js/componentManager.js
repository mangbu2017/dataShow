import Component from './baseComponents.js';
import barComponent from './bar.js';
import polylineComponent from './polyline.js';
import pieComponent from './pie.js';
let Manager = {
    init(name){
        this.container = $('<div/>').addClass(name);
        this.container.appendTo('body').hide();
        return this;
    },
    load(){
        this.container.show();
        $('.wrapper').fullpage({
            sectionsColor: ['orange', 'green', 'deeppink'],
            onLeave(index, nextIndex, direction){
                console.log(index, nextIndex, direction);
                $('.section').eq(index - 1).trigger('onLeave');
            },
            afterLoad(achorLink, index){
                console.log(achorLink, index);
                $('.section').eq(index - 1).trigger('afterLoad');
            }
        
        })
        $('.section').on('onLeave' ,function(){
            $(this).find('.component').trigger('out');
        })
        
        $('.section').on('afterLoad' ,function(){
            $(this).find('.component').trigger('in');
        })

        $('.section').eq(0).trigger('afterLoad');
        return this;
    },
    addPage(name){
        this.page = name ? $('<div/>').addClass('section').addClass(name) : $('<div/>').addClass('section'); 
        this.page.appendTo(this.container);
        return this;
    },
    addComponent(options){
        let component = null;
        switch(options.type){
            case 'poly':
                component = polylineComponent(options)
                break;
            case 'bar':
                component = barComponent(options)
                break;
            case 'pie':
                component = pieComponent(options)
                break;
            case 'base':
                component = Component(options)
                break;
            default:
                component = Component(options)
                break; 

        }

        this.page.append(component);
        return this;
    }
}

export default Manager;
