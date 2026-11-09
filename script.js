const menu = [
  {n:"Матча латте",c:"hot",p:300,v:"300 мл"},{n:"Какао",c:"hot",p:200,v:"300 мл"},
  {n:"Сливочный орех",c:"hot",p:400,v:"500 мл",d:"Эспрессо, грецкий орех, молоко, тапиока"},
  {n:"Черничный",c:"hot",p:400,v:"500 мл",d:"Эспрессо, черника, молоко, тапиока"},
  {n:"БМБ тыква",c:"hot",p:400,v:"400 мл",d:"Эспрессо, пюре тыквы, молоко, тапиока"},
  {n:"Кедровый раф",c:"hot",p:400,v:"400 мл",d:"Эспрессо, кедровый орех, молоко"},
  {n:"Лимонка",c:"hot",p:400,v:"500 мл",d:"Чай, крем-брюле, лимон, молоко, карамель, тапиока, кем-чиз"},
  {n:"Малинкис",c:"hot",p:400,v:"500 мл",d:"Чай, малина, молоко, тапиока, крем-чиз"},
  {n:"Пряный апельсин",c:"hot",p:400,v:"500 мл",d:"Чай, пряный апельсин, молоко, тапиока, крем-чиз"},
  {n:"Лова-Лова таро",c:"hot",p:400,v:"500 мл",d:"Таро, лаванда, молоко, тапиока"},
  {n:"Баунти",c:"hot",p:300,v:"500 мл",d:"Какао, кокос, ваниль, молоко, крем-чиз"},
  {n:"Банан Нутелла",c:"hot",p:300,v:"500 мл",d:"Какао, банан, нутелла, молоко, крем-чиз"},
  {n:"Горячий бамбл кофе",c:"hot",p:300,v:"300 мл",d:"Эспрессо, сок красный апельсин, корица"},
  ...["Лимонный","Ореховый","Черничный","Вишневый"].map(x=>({n:x+" капучино",c:"hot",p:300,v:"300 мл"})),
  {n:"Горячий шоколад",c:"hot",p:350,v:"300 мл"},
  {n:"Кофейный вайб",c:"drinks",p:400,v:"500 мл",d:"Эспрессо, карамель, молоко, тапиока. Можно тёплым или холодным"},
  {n:"Карамельная любовь",c:"drinks",p:400,v:"500 мл",d:"Чай, карамель, молоко, тапиока, крем-чиз. Можно горячим или холодным"},
  {n:"Звёздный таро",c:"drinks",p:400,v:"500 мл",d:"Таро, молоко, тапиока. Можно горячим или холодным"},
  {n:"Ча-ча матча",c:"drinks",p:300,v:"500 мл",d:"Матча, жасминовый чай, тростниковый сироп"},
  {n:"Ичиго матча",c:"drinks",p:350,v:"500 мл",d:"Матча, клубника"},{n:"Грин лемонграсс",c:"drinks",p:350,v:"500 мл",d:"Матча, лемонграсс"},
  {n:"Манго стар",c:"drinks",p:350,v:"500 мл",d:"Чай, манго, тапиока, джусболлы или кокосовое желе на выбор"},
  {n:"Умами юдзу",c:"drinks",p:400,v:"500 мл",d:"Чай, черника, личи, юдзу, ежевика, лайм; тапиока, джусболлы или кокосовое желе на выбор"},
  {n:"Волга в августе",c:"drinks",p:350,v:"500 мл",d:"Чай, киви, юдзу; тапиока, джусболлы или кокосовое желе на выбор"},
  {n:"Барби кор",c:"drinks",p:350,v:"500 мл",d:"Чай, клубника, бабл-гам; тапиока, джусболлы или кокосовое желе на выбор"},
  {n:"Лунный графит",c:"drinks",p:350,v:"500 мл",d:"Чай, каламанси, киви, блю кюрасао; тапиока, джусболлы или кокосовое желе на выбор"},
  {n:"Оранжери",c:"drinks",p:350,v:"500 мл",d:"Чай, апельсин, юдзу; тапиока, джусболлы или кокосовое желе на выбор"},
  {n:"Орео краш",c:"drinks",p:370,v:"500 мл",d:"Шоколад, молоко, Oreo. Можно горячим или холодным"},
  {n:"Киндер кантри",c:"drinks",p:370,v:"500 мл",d:"Крем-брюле, молоко, шоколад, воздушные хлопья. Можно горячим или холодным"},
  {n:"Манго матча",c:"drinks",p:400,v:"500 мл",d:"Матча, манго"},
  {n:"Хот-дог классический",c:"food",p:350,v:"200 г",d:"Булочка, куриная сосиска, соус релиш, кетчуп, жареный лук"},
  {n:"Хот-дог песто",c:"food",p:350,v:"200 г",d:"Булочка, куриная сосиска, соус песто, моцарелла, жареный лук"},
  {n:"Хот-дог трюфельный",c:"food",p:370,v:"1 шт.",d:"Булочка, трюфельный соус, релиш, сосиска, соус барбекю, жареный лук"},
  {n:"Картофель по-деревенски с моцареллой",c:"food",p:270,v:"1 шт.",d:"Подаётся с соусом"},{n:"Тирамису",c:"food",p:330,v:"1 шт."},
  {n:"Капучино",c:"coffee",p:230,v:"300 мл"},{n:"Латте",c:"coffee",p:230,v:"300 мл"},{n:"Американо",c:"coffee",p:160,v:"300 мл"}
];
const titles={hot:"Горячие напитки",drinks:"Безалкогольные напитки",food:"Еда и десерты",coffee:"Кофе"};
const list=document.querySelector("#menu-list");
const filters=document.querySelectorAll("[data-filter]");
function renderMenu(filter="all"){
  list.replaceChildren();
  const groups=filter==="all"?Object.keys(titles):[filter];
  groups.forEach(category=>{
    const items=menu.filter(item=>item.c===category);
    if(!items.length)return;
    const heading=document.createElement("h3");heading.className="menu-category";heading.textContent=titles[category];list.append(heading);
    items.forEach(item=>{
      const card=document.createElement("article");card.className="menu-item";
      const name=document.createElement("h3");name.textContent=item.n;card.append(name);
      if(item.d){const desc=document.createElement("p");desc.textContent=item.d;card.append(desc)}
      const meta=document.createElement("div");meta.className="menu-meta";
      const volume=document.createElement("span");volume.textContent=item.v;
      const price=document.createElement("strong");price.textContent=item.p+" ₽";
      meta.append(volume,price);card.append(meta);list.append(card);
    });
  });
}
filters.forEach(button=>button.addEventListener("click",()=>{
  filters.forEach(item=>{const active=item===button;item.classList.toggle("is-active",active);item.setAttribute("aria-pressed",String(active))});
  renderMenu(button.dataset.filter);
}));
renderMenu();

const menuSection=document.querySelector("#menu");
const backdropImages=[...document.querySelectorAll(".menu-backdrop-image")];
let scrollFramePending=false;
function updateMenuBackdrop(){
  const bounds=menuSection.getBoundingClientRect();
  const scrollRange=Math.max(1,bounds.height-window.innerHeight);
  const progress=Math.min(1,Math.max(0,-bounds.top/scrollRange));
  const activeIndex=Math.min(backdropImages.length-1,Math.floor(progress*backdropImages.length));
  backdropImages.forEach((image,index)=>image.classList.toggle("is-visible",index===activeIndex));
  scrollFramePending=false;
}
function requestMenuBackdropUpdate(){
  if(scrollFramePending)return;
  scrollFramePending=true;
  window.requestAnimationFrame(updateMenuBackdrop);
}
window.addEventListener("scroll",requestMenuBackdropUpdate,{passive:true});
window.addEventListener("resize",requestMenuBackdropUpdate);
updateMenuBackdrop();
