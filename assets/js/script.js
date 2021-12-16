function openMenu(){
    let menu = document.getElementById('menu-opener');

    if (menu.style.width == '200px'){
        
        menu.style.width = '0px';
    } else {
        menu.style.width = '200px';
    }
}