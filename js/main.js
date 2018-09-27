$(document).ready(function(){
    $("#industrialElectronic").click(function(){
        $("#imageContent").attr("src", "https://www.mokor.net/wp-content/uploads/2015/03/desktop.png");
        fixedCSS($(this));
    });
    $("#networking").click(function(){
        $("#imageContent").attr("src", "https://assets.porttechnology.org/images/made/images/uploads/news/BlockchainiStock-666853446_592_437_84_c1.jpg").fadeIn();
        fixedCSS($(this));
    });
    $("#optoelectronics").click(function(){
        $("#imageContent").attr("src", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/cat-toys-depressed-cat.jpg").fadeIn();
        fixedCSS($(this));
    });
    $("#automotiveElectronics").click(function(){
        $("#imageContent").attr("src", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/active-depressed-cat.jpg").fadeIn();
        fixedCSS($(this));
    });
    $("#laptopIndustry").click(function(){
        $("#imageContent").attr("src", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/friend-depressed-cat.jpg").fadeIn();
        fixedCSS($(this));
    });
    $("#consumerElectronics").click(function(){
        $("#imageContent").attr("src", "https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.0-1/p480x480/25398791_188509515061340_8612082952798921299_n.jpg?_nc_cat=1&oh=9a87b3fb220d0c7f48cdeb47f1502894&oe=5C1F8168").fadeIn();
        fixedCSS($(this));
    });
});


function fixedCSS(obj) {
    var list = [$("#industrialElectronic"),$("#networking"),$("#optoelectronics"),$("#automotiveElectronics"),
    $("#laptopIndustry"),$("#consumerElectronics")];
    list.forEach(element => {
        if (element.attr('id')==obj.attr('id')) {
            obj.addClass('item-name-onClick');
            obj.removeClass('item-name');
        } else {
            if (element.hasClass( 'item-name-onClick' )) {
                element.removeClass('item-name-onClick');
                element.addClass('item-name');
            };
        };
    });
};


var svgElement = document.querySelector('svg');
var maskedElement = document.querySelector('#mask-circle');
var circleFeedback = document.querySelector('#circle-shadow');
var svgPoint = svgElement.createSVGPoint();

function cursorPoint(e, svg) {
    svgPoint.x = e.clientX;
    svgPoint.y = e.clientY;
    return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
}

function update(svgCoords) {
    maskedElement.setAttribute('cx', svgCoords.x);
    maskedElement.setAttribute('cy', svgCoords.y);
    circleFeedback.setAttribute('cx', svgCoords.x);
    circleFeedback.setAttribute('cy', svgCoords.y);
}

window.addEventListener('mousemove', function(e) {
  update(cursorPoint(e, svgElement));
}, false);

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
        update(cursorPoint(touch, svgElement));
    }
}, false);
