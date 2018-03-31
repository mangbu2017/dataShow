import Component from './baseComponents.js';
import '../less/bar.less'

let Bar = (options) => {
    let component = Component(options);
    component.addClass('bar');

    let data = options.data;
    
    data.forEach((ele, index) => {
        let row = $('<div/>').addClass('row');
        // console.log(row);

        let name = $('<div/>').addClass('name');
        name.text(ele[0]);
        let outLoader = $('<div/>').addClass('outLoader');
        outLoader.css('width', ele[1] * 200);
        let inLoader = $('<div/>').addClass('inLoader');
        inLoader.css('backgroundColor', ele[2]).appendTo(outLoader);
        let per = $('<div/>').addClass('per');
        per.text(ele[1] * 100 + '%');
    

        row.append(name).append(outLoader).append(per).appendTo(component);
        // console.log(row);

    })
    // console.log(component.html());

    return component;
}

export default Bar;