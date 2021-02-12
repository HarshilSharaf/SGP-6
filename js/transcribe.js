
var i;
function apply(){
    var s1=document.getElementById("s1").value;
var s2=document.getElementById("s2").value;
var s3=document.getElementById("s3").value;
var s4=document.getElementById("s4").value;
var s5=document.getElementById("s5").value;
    if( [s1,s2,s3,s4,s5].includes(undefined) || [s1,s2,s3,s4,s5].includes(null) || [s1,s2,s3,s4,s5].includes(""))
    {
        document.getElementById("sp1").innerHTML="Speaker-1";
    
        document.getElementById("sp2").innerHTML="Speaker-2";
        document.getElementById("sp3").innerHTML="Speaker-3";
        document.getElementById("sp4").innerHTML="Speaker-4";
        document.getElementById("sp5").innerHTML="Speaker-5";

    }


    else{
    document.getElementById("sp1").innerHTML=s1;
    
    document.getElementById("sp2").innerHTML=s2;
    document.getElementById("sp3").innerHTML=s3;
    document.getElementById("sp4").innerHTML=s4;
    document.getElementById("sp5").innerHTML=s5;

    }
}