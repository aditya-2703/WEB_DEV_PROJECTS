function clickme(){
    let yr_year=prompt("ENTER YOUR BORN YEAR PLEASE");
    let year=new Date();   
    let curr_year=year.getFullYear();
        let result=(curr_year-yr_year)*365;
        document.querySelector(".result").innerHTML=`${result} Days Old 🎉`;
    
}
function reset(){
    document.querySelector(".result").innerHTML="";
}