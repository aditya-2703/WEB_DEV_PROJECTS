function random(n){
    var array=[]
    for(let i=0;i<n;i++){
        array.push(i);
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Global declaration
var list_of_facts;
var image_word_list;
var fileUrl = '/static/facts.txt' // provide file location
    fetch(fileUrl)
    .then( r => r.text() )
    .then( t =>  {list_of_facts=t.split(/\n/)});
fileUrl = '/static/words.txt'; // provide file location
    fetch(fileUrl)
    .then( r => r.text() )
    .then( t =>  {image_word_list=t.split(/\n/)});
    var colors=["#FC766AFF","#5B84B1FF","#5F4B8BFF","#E69A8DFF","#CDB599FF","#9CC3D5FF","#D198C5FF","#89ABE3FF"]
var query_gen_tag=false;
var about_click_tag=false;

var about_heading=document.getElementById("about_content");
about_heading.style.display="none";

function generate(){
    about_click_tag=false;
    let time=100;
    if(query_gen_tag===true){
        let ul=document.getElementById("fact_card_list");
        ul.innerHTML="";
        query_gen_tag=false;
    }
    let randomIndex=random(list_of_facts.length);
    for(let i=0;i<10;i++){
        setTimeout(function(){
            create_card(randomIndex[i],image_word_list[Math.floor(Math.random()*image_word_list.length)]);  
        },time);
        time+=150;
    }
    
    
}
function create_card(randomIndex,img){
    about_click_tag=false;
    let text=list_of_facts[randomIndex];
    let code=String.raw`<div class="card">
        <img src="https://source.unsplash.com/300x200/?${img}" style="border-radius:20px 20px 0px 0px;" class="card-img-top" alt="...">
        <div class="card-body" style="border-radius:0px 0px 20px 20px;  background:${colors[randomIndex%colors.length]};" >
          ${text}
        </div>
      </div>`;
    let li=document.createElement("li");
    li.setAttribute("id","card_li")
    let ul=document.getElementById("fact_card_list");
    ul.appendChild(li);
    li.innerHTML=code;
        
}
function create_card_by_query(randomIndex,img,list_query){
    
    about_click_tag=false;
    let text=list_query[randomIndex];
    let code=String.raw`<div class="card">
        <img src="https://source.unsplash.com/300x200/?${img}" style="border-radius:20px 20px 0px 0px;" class="card-img-top" alt="...">
        <div class="card-body" style="border-radius:0px 0px 20px 20px;  background:${colors[randomIndex%colors.length]};" >
          ${text}
        </div>
      </div>`;

    let li=document.createElement("li");
    li.setAttribute("id","card_li")
    let ul=document.getElementById("fact_card_list");
    ul.appendChild(li);
    li.innerHTML=code;
        
}
function generate_by_query(myquery){
    about_click_tag=false;
    let query=myquery.toLowerCase();
    let list_query=[];
    let time=1000;
    let count=0;
    for(let i=0;i<list_of_facts.length;i++){
        if(list_of_facts[i].includes(query)){
            list_query.push(list_of_facts[i]);
            count++;
        }
        if(count===100){
            break;
        }
    }
    for(let i=0;i<10;i++){
        let randomIndex=Math.floor(Math.random()*list_query.length);
        setTimeout(() => {
        create_card_by_query(randomIndex,image_word_list[randomIndex],list_query);  
        }, time);
        time+=150;
    }  
}
window.addEventListener("scroll",()=>{
    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
        if(query_gen_tag!==true){
            generate();
        }
    }
})
function query_gen(arg){
    about_click_tag=false;
    let button=document.getElementById("gen");
    button.style.display="block";
    let content=document.getElementById("fact_card_list");
    content.style.display="flex";
    
    let ul=document.getElementById("fact_card_list");
    ul.innerHTML="";
    query_gen_tag=true;
    let myquery=arg.id;
    generate_by_query(myquery);
}
function logo(){   
    location.reload();
}
function about(){
    let button=document.getElementById("gen");
    let content=document.getElementById("fact_card_list");
    content.style.display="none";
    button.style.display="none";
    about_heading.style.display="block";
    
    
}
function home(){
    about_click_tag=false;
    let button=document.getElementById("gen");
    button.style.display="block";
    let content=document.getElementById("fact_card_list");
    content.style.display="flex";
    
    about_heading.style.display="none";
    
}
function category(){
    about_click_tag=false;
    let button=document.getElementById("gen");
    button.style.display="block";

    about_heading.style.display="none";
}