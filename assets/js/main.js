const headerEl=document.querySelector('header');
//    console.log(headerEl);
    const ulEl=document.createElement('ul');
    ulEl.id='dropdown'
    ulEl.className='font-400 text-Darkgrayishblue bg-Verydarkblue sm:hidden px-4 py-2  sm:hidden';
    const menuNames=['Home','New','Popular','Trending','Categories'];
    menuNames.forEach(val => {
        ulEl.innerHTML+=`<li class="hover:text-Softorange cursor-pointer">${val}</li> <div class="h-0.5 bg-Darkgrayishblue my-2"></div>`;
    });
    headerEl.after(ulEl);

    const dropdownEl=document.getElementById('dropdown');
    console.log(dropdownEl);



const menuBtnEl=document.querySelector('#menuIcon');


console.log(menuBtnEl);

menuBtnEl.addEventListener('click',()=>{
  
    if(menuBtnEl.classList.contains('open')){
        menuBtnEl.classList.remove('open');
        menuBtnEl.innerHTML='<img src="./assets/images/icon-menu-close.svg" alt="menu"></img>';    
        menuBtnEl.classList.add('close');
        dropdownEl.classList.remove('hidden');
    }else{
        menuBtnEl.classList.remove('close');
        menuBtnEl.innerHTML='<img src="./assets/images/icon-menu.svg" alt="menu">';    
        menuBtnEl.classList.add('open');
        dropdownEl.classList.add('hidden');
    }

    

   
})

