let icon = {
    chek:'<svg width="18" height="18" '+
    'viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" '+
    'stroke="#067c02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    
    dontCheck:'<svg width="18" height="18"'+
    ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"'+
    'stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
}

let $ = (element)=> document.querySelector(element);
let $all = (element)=> document.querySelectorAll(element);

let progressBar = {
    container: $('.progress-bar'),
    background: $('.progress-bar div'),
    txt: $('.progress-bar h4')
}

let spans = $all('.icon');
let labels = $all('li label');
let checkBoxs = $all('label input');

function SetProgres(){
/*
    formula
    cantidad de checkeds true * 100 / total de chekbox
*/
    let total = checkBoxs.length
    let actual = ver();
    let progress = (actual * 100 / total).toFixed(0)
    
    progressBar.txt.innerHTML = `Completado: ${progress}%`
    progressBar.background.style.width = `${progress}%`

    if(progress <= 20) progressBar.background.style.background = '#c30808'
    if(progress >= 40) progressBar.background.style.background = '#c35e08'
    if(progress >= 60) progressBar.background.style.background = '#c3b508'
    if(progress >= 80) progressBar.background.style.background = '#a6c308'
    if(progress == 100) progressBar.background.style.background = '#08c316'
}

function revisar(slc){
    if(checkBoxs[slc].checked == false){
        spans[slc].innerHTML = icon.dontCheck
    } else{
        spans[slc].innerHTML = icon.chek
    }

    SetProgres()
    
}

function ver(){
    let mm = 0
    checkBoxs.forEach(element => {
        if(element.checked == true){
            mm++
        }
    });
    return mm
}

spans.forEach(element => {
    element.innerHTML = icon.dontCheck
});
