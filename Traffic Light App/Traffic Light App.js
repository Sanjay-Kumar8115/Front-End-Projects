function TrafficLights(st)
{   if (st==="red"){
    alert("You have to Stop...");
}
else if (st==="yellow"){
    alert("You have to wait...");
}
else if (st==="red"){
    alert("You can go...");
}
else{
    alert("Please Enter only RED/GREEN or YELLOW");
    
}

}

let status=String(prompt("Enter  RED or GREEN or Yellow : ")).toLowerCase();
TrafficLights(status);