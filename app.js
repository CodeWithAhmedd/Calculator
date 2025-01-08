function btnClick(val) {
    let cal = document.getElementById("cal");
    let lsatChar = cal.value[cal.value.slice (- 1)];
    
    if (val === "C") {
        cal.value = "";
       
     }
    else if (val === "CE") {
        cal.value = cal.value.slice(0, -1);
    }

      else if (val === "=") {
        cal.value = eval(cal.value);
    }
    else{
        cal.value += val;
    }
}