var player_choosen;
var selected=false;
function rock(arg){
    if(selected!=true){
    player_choosen=arg;
    var rock=document.getElementById("rock");
    rock.style.boxShadow="0px 0px 10px green";
    }
    selected=true;
}
function paper(arg){
    if(selected!=true){
    var paper=document.getElementById("paper");
    paper.style.boxShadow="0px 0px 10px green";
    player_choosen=arg;}
    selected=true;
}
function scissor(arg){
    if(selected!=true){
        var scissor=document.getElementById("scissor");
        scissor.style.boxShadow="0px 0px 10px green";
        player_choosen=arg;}
        selected=true;
    }
function start(){

    var arr=["rock","paper","scissor"];
    var random=arr[Math.floor(Math.random() * arr.length)];
    
    var ul=document.getElementById("ul");
    ul.parentNode.removeChild(ul)
   
    
    var ul1=document.getElementById("ul1");
    var pimg=document.createElement('img');
    var li1=document.createElement("li");
    var ph3=document.createElement("h3");
    var pname=document.createTextNode(player_choosen.id);
    pimg.src=player_choosen.src;
    pimg.setAttribute("id","p_choosen");
    ul1.appendChild(li1);
    li1.appendChild(pimg);
    ph3.appendChild(pname);
    ph3.setAttribute("id","player_choosen_name")
    li1.appendChild(ph3);
   
    var rimg=document.createElement('img');
    var li2=document.createElement("li");
    var rh3=document.createElement("h3");
    var rname=document.createTextNode(random);
    rimg.src=`/static/${random}.png`
    rimg.setAttribute("id","r_choosen");
    ul1.appendChild(li2);
    li2.appendChild(rimg)
    rh3.appendChild(rname);
    rh3.setAttribute("id","random_choosen_name")
    li2.appendChild(rh3);

    player_move=player_choosen.id
    random_move=random
    console.log(player_move,random_move)
    if(player_move===random_move){
        var msg="Oops Tie😐";
    }
    else if(player_move==="rock" && random_move==="paper"){
        var msg="You Lose😕";
    }
    else if(player_move==="rock" && random_move==="scissor"){
        var msg="You Win🎉";
    }
    else if(player_move==="paper" && random_move==="scissor"){
        var msg="You Lose😕";
    }
    else if(player_move==="scissor" && random_move==="paper"){
         var msg="You Win🎉	"
    }
    else if(player_move==="paper" && random_move==="rock"){
        var msg="You Win🎉";
    }
    else if(player_move==="scissor" && random_move==="rock"){
        var msg="You Lose😕";
    }
    var result=document.createElement("h1");
    var li3=document.createElement("li");
    var text=document.createTextNode(msg);
    result.setAttribute("id","result");
    result.appendChild(text);
    ul1.appendChild(li3);
    li3.appendChild(result);

    var bttn=document.createElement("button");
    bttn.setAttribute("id","continue");
    var textnode=document.createTextNode("Continue");
    var li4=document.createElement("li");
    bttn.setAttribute("onclick","continues()");
    ul1.appendChild(li4);
    bttn.append(textnode);
    li4.appendChild(bttn);   
}
function continues(){
    location.reload();
}