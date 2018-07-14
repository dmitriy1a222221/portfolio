
//...........education responsive...............
function autoHeight() {
    let listItemDescription2 = document.querySelectorAll('.list-item__description ')[3];
    let height = listItemDescription2.getBoundingClientRect().height;
    let blockInfo = document.querySelectorAll('.block-info')[2];
    let heightBlockInfo = blockInfo.getBoundingClientRect().height;
    let styleElem = document.body.appendChild(document.createElement("style"));
    let sumH = height + 125;
    let sumMT = height + 95;
    let marginDistanse;

    if (heightBlockInfo > 59){
        marginDistanse = sumMT -= 37;
    } else {
        marginDistanse = sumMT
    }

    styleElem.innerHTML =
        `.block-border-point:after {height:${sumH}px !important;}
         .block-border-point {margin: 0 20px ${sumH - 4}px !important;}
         .margin-top {margin-top: ${marginDistanse}px}
         `;
}
(function(){
    let time;
    window.onresize = function(e){
        if (time)
        clearTimeout(time);
        time = setTimeout(function(){
            autoHeight(e);
        },10);
    }
})();
//...........end education responsive...............

//................skill bar...............
function skillBar() {
    let element = document.querySelectorAll('.skills-block__list_internal li');
    element.forEach(item => {
        let barLine = item.querySelectorAll('.bar-line')[0];
        let procent = item.querySelectorAll('.procent')[0];
        let left = procent.dataset.left;
        let width = barLine.dataset.width;
        let edge = barLine.dataset.edge;

        let id = setInterval(frame, 10);

        function frame() {
            if(width >= edge) {
                clearInterval(id);
            } else {
                width++;
                left++;
                barLine.style.width = width + '%';
                procent.style.left = left + '%';
                procent.innerHTML = width + '%';
            }
        }
    });
}
(function scroll() {
    let flag = true;
    window.onscroll = function() {
        let target = document.querySelectorAll('.wrapp__skills-block')[0];
        let targetPos = target.getBoundingClientRect().top;
        let winHeight = window.pageYOffset;
        if(targetPos < 217 && flag){
            skillBar();
            flag = false
        }
    };
})();
//.............end skill bar..............
//..............portfolio works............
(function addedBackgroundPhoto() {
    let portfolioList = document.querySelectorAll('.portfolio__list li');
    let counter = 0;
    portfolioList.forEach(item => {
        counter++;
        item.style.cssText = `background-image: url('../img/work-item${counter}.png');`;
    })
})();
//...........end portfolio works...........

