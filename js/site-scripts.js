function mostraOuEscondeMenu(){
  const menu = document.getElementById("menu");
   if(getComputedStyle(menu).display == "none"){
    menu.style.display = "flex";
   }else{
    menu.style.display = "none";
   }
};
