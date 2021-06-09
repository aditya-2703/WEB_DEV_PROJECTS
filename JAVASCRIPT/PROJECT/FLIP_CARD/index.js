// TO SUFFLE THE CARD BY IT'S INDEXES
function shuffle() {
    var array=[];
    for(let i=0;i<52;i++){
        array.push(i);
    }
    array.sort(() => Math.random() - 0.5);
    return array;
}


//  FOR CHANGING LOGO IMAGE ALTERNATIVE 
function automate(){
    var change_img=document.getElementById("header_logo");
    var flag=true;
    var path1="/PNG/back_cards-07.png";
    var path0="/PNG/honor_heart-14.png";
    var interval=setInterval(()=>{
        if(flag===true){
            change_img.src=path1;
            flag=false;
        }
        else{
            change_img.src=path0;
            flag=true;
        }
    },2000)
}
automate()

//  WHEN HIT START IT COVERS ALL THE CARDS 
function cover(){
    let list=document.getElementsByClassName("card");
    let cover_path="/PNG/green_back.png";
    let time=1000;
    for(let i=0;i<52;i++){
        setTimeout(()=>{list[i].src=cover_path;},time);
        time+=100;
    }
}


// Globaly declared values
var counter=0;
var array_of_picked_cards=[];
var close="/PNG/red_back.png";
var card_list_with_pos=create_object();
var start_flag=false;
var player_one_score=0;
var player_two_score=0;
var player_score=document.getElementById("player_score");
var opp_score=document.getElementById("opp_score");
var winning_msg;
var visited=create_visited_list();


// THIS FUNCTION CREATES VISITED LIST FOR CARD WHO VISITED OR CLICKED CARD
function create_visited_list(){
    arr=[];
    for(let i=0;i<52;i++){
        arr.push(false);
    }
    return arr;
}

// Here card object is ready where it has position of card and no of card
function create_object(){
    let list_card=["/PNG/AD.png","/PNG/AC.png","/PNG/AH.png","/PNG/AS.png",
                "/PNG/2D.png","/PNG/2C.png","/PNG/2H.png","/PNG/2S.png",
                "/PNG/3D.png","/PNG/3C.png","/PNG/3H.png","/PNG/3S.png",
                "/PNG/4D.png","/PNG/4C.png","/PNG/4H.png","/PNG/4S.png",
                "/PNG/5D.png","/PNG/5C.png","/PNG/5H.png","/PNG/5S.png",
                "/PNG/6D.png","/PNG/6C.png","/PNG/6H.png","/PNG/6S.png",
                "/PNG/7D.png","/PNG/7C.png","/PNG/7H.png","/PNG/7S.png",
                "/PNG/8D.png","/PNG/8C.png","/PNG/8H.png","/PNG/8S.png",
                "/PNG/9D.png","/PNG/9C.png","/PNG/9H.png","/PNG/9S.png",
                "/PNG/10D.png","/PNG/10C.png","/PNG/10H.png","/PNG/10S.png",
                "/PNG/JD.png","/PNG/JC.png","/PNG/JH.png","/PNG/JS.png",
                "/PNG/QD.png","/PNG/QC.png","/PNG/QH.png","/PNG/QS.png",
                "/PNG/KD.png","/PNG/KC.png","/PNG/KH.png","/PNG/KS.png"]
    let group={0:0,1:0,2:0,3:0,
        4:1,5:1,6:1,7:1,
        8:2,9:2,10:2,11:2,
        12:3,13:3,14:3,15:3,
        16:4,17:4,18:4,19:4,
        20:5,21:5,22:5,23:5,
        24:6,25:6,26:6,27:6,
        28:7,29:7,30:7,31:7,
        32:8,33:8,34:8,35:8,
        36:9,37:9,38:9,39:9,
        40:10,41:10,42:10,43:10,
        44:11,45:11,46:11,47:11,
        48:12,49:12,50:12,51:12}
    let random_index=shuffle(); 
    let position=[];
    for(let i=0;i<52;i++){
        position.push(i);
    }
    card_detail={};
    for(let i=0;i<52;i++){
        card_detail[i]=[list_card[random_index[i]],group[random_index[i]]];
    }
    return card_detail;
}

// IT TELLS WHOSE TURN IS NOW 
function player_turn(counter){
    if(counter%2===0){
        return true;
    }
    return false;
}



// WHEN WE CLICK THE CARD THEN IT RUNS
function clicked_card(arg){ 

    if(visited[Number(arg.id)]===false){
        visited[Number(arg.id)]=true;

        if(array_of_picked_cards.length===51){
            game_end_function();
        }
        else{
            let player=player_turn(counter);
            flip_card(arg,card_list_with_pos);
            if(array_of_picked_cards.length<1){
                array_of_picked_cards.push(arg);
            }
            else{
                let currentcard_id=card_detail[Number(arg.id)];
                calculate_score(player,arg,currentcard_id,array_of_picked_cards)
            }
    }
    counter++;
    }
}

// THIS FUNCTION FLIP'S THE CARD WHICH WE CLICK
function flip_card(arg,card_list_with_pos){
    if(start_flag===true){
        arg.src=card_list_with_pos[Number(arg.id)][0];
    }
}

// THIS FUNCTION COVER OR WRAP THE CARD WHILE MATCHING FOUND
function cover_card(card1,card2){
    card1.src=close;
    card2.src=close;

}

// THIS FUNCTION IS ONLY FOR STYLING LIKE WHEN THERE IS TURN OF FIRST PLAYER THE SHADOW GLOWS 
function glow(onplayer,offplayer){
    onplayer.style.textShadow="0px 3px 10px green";
    offplayer.style.textShadow="none";
}

// THIS FUNCTION CHECKS THAT WHETHER THE CARD IS NOT IN LIST 
function isinlist(card1,list){
    for(let i=0;i<list.length;i++){
        if(card1===list[i]){
            return false;
        }
    }
    return true;
}

// THIS FUNCTION COUNTS THAT HOW MANY CARDS THERE BECAUSE OF FLIP 
function count_the_card(card,list){
    let count=0;
    console.log(list);
    let cardname=card.id;
    for(let i=0;i<list.length;i++){
        if(card_list_with_pos[Number(cardname)][1]===card_list_with_pos[Number(list[i].id)][1]){
            count+=1;
        }
    }
    return count;
}

// calculate the score based on some parameters
function calculate_score(player_turn,img_tag,current_card_id,array_of_picked_cards){
    let mygroupid=current_card_id[1];


    // for player1
    if(!player_turn){
        glow(player_score,opp_score);
        if(array_of_picked_cards.length>1){
            if(isinlist(img_tag,array_of_picked_cards)){
                for(let i=0;i<array_of_picked_cards.length;i++){
                    if(mygroupid===card_list_with_pos[Number(array_of_picked_cards[i].id)][1]){
                        let count=count_the_card(img_tag,array_of_picked_cards);
                        if(count%2!==0){
                            player_one_score++;
                            cover_card(array_of_picked_cards[i],img_tag);
                        }
                        // console.log("there is ",count,"number of cards in list");
                    }

                }
                
            }
        }
    }
    // for player2
    else{
        glow(opp_score,player_score);
        if(array_of_picked_cards.length>1){
            if(isinlist(img_tag,array_of_picked_cards)){

                for(let i=0;i<array_of_picked_cards.length;i++){
                    if(mygroupid===card_list_with_pos[Number(array_of_picked_cards[i].id)][1]){
                        let count=count_the_card(img_tag,array_of_picked_cards);
                        if (count%2!==0){
                            player_two_score++;
                            cover_card(array_of_picked_cards[i],img_tag);
                        }
                        console.log("there is ",count,"number of cards in list");
                    }
                }
            }
        }
    }
    show_score(player_one_score,player_two_score);
    array_of_picked_cards.push(img_tag);
}


// IT SHOWS SCORE WHEN WE HIT START BUTTON
function show_score(first_player_score,second_player_score){
    player_score.innerHTML=`FIRST PLAYER SCORE : ${first_player_score}`;
    opp_score.innerHTML=`SECOND PLAYER SCORE : ${second_player_score}`;
}

// THIS FUNCTION PRINT APPORPIRATE MESSAGE THAT WHO IS WIN THE GAME OR WHO LOSES 
function result_msg(){
    if(player_one_score===player_two_score){
        winning_msg="GAME TIED!!"
    }
    else if(player_one_score>player_two_score){
        winning_msg="PLAYER ONE WIN THE GAME";
    }
    else{
        winning_msg="PLAYER TWO WIN THE GAME";
    }
    return winning_msg;
}

// game ends and this function runs
function game_end_function(){
    let winning=result_msg();
    var bg=document.getElementById("party_background");
    var box=document.getElementById("box_cont");
    box.style.display="none";
    bg.innerHTML='<iframe src="/PNG/party.gif" class="party"></iframe>';
    
    var h1=document.createElement("h1");
    h1.innerHTML=winning;
    h1.setAttribute("id","winner_msg");
    bg.appendChild(h1);
    var btn_start=document.getElementById("start_btn");
    btn_start.style.display="none";
    
    var btn=document.createElement("button");
    btn.setAttribute("onclick","reset_game()");
    btn.setAttribute("id","reset_btn");
    btn.innerHTML="reset";
    bg.appendChild(btn);
}
// reset the game
function reset_game(){
    location.reload();
    start_flag=false;
}

// MAIN FUNCTION 
function start(){
    cover();
    start_flag=true;

}


