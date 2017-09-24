var sections = new Array(4);
sections[0] = "perfil";
sections[1] = "proyectos";
sections[2] = "skills";
sections[3] = "contacto";

function colorNav(i){
  var ele = i + 1;
  var item = $('.nav__item:nth-child('+ele+')');
  item.css({'background-color':'#ff5252'});
  item.siblings('li').css({'background-color':'#ff8a80'});
}

function displaySection(nav){
  var slider = sections;
  var search;
  var show;
  for(var i = 0; i < 4; i++){
    search = $('#'+slider[i]);
    show = search.css('display');
    if(show == "block"){
      search.css({'display':'none'});
      if(nav == "next"){
        i++;
        if(i > 3) i = 0;
      }
      if(nav == "prev"){
        i--;
        if(i < 0) i = 3;
      }
      search = $('#'+slider[i]);
      search.css({'display':'block'});
      colorNav(i);
      break;
    }
  }
}

function navSection(nav){
  var menu = sections;
  for(var i = 0; i < 4; i++){
    search = document.getElementById(menu[i]);
    search.style.display = "none";
    if(menu[i] == nav){
      search.style.display = "block";
      colorNav(i);
    }
  }
}

$('footer').mouseenter(()=>{
  $('footer img').css({'transform':'rotate(90deg)'});
})
$('footer').mouseleave(()=>{
  $('footer img').css({'transform':'rotate(-90deg)'});
})
