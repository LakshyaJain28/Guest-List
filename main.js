name_guest=[];
function submit(){
var name1= document.getElementById("name_1").value;
var name2= document.getElementById("name_2").value;
var name3= document.getElementById("name_3").value;
var name4= document.getElementById("name_4").value;

name_guest.push(name1);
name_guest.push(name2);
name_guest.push(name3);
name_guest.push(name4);
console.log(name_guest);
document.getElementById("display_name").innerHTML=name_guest;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline";
}
function sorting(){
    name_guest.sort();
    console.log(name_guest);
    document.getElementById("display_name").innerHTML=name_guest;
}
function searching(){
    var s=document.getElementById("s").value;
    var found=0;
    var j;
    for(j=0; j<name_guest.length; j++)
    {
        if(s==name_guest[j]){
            found=found+1;
        }
    }

document.getElementById("display_search").innerHTML="name found" +found+"time/s";
console.log("found name" +found+"time/s");
}