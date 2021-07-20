var a = document.getElementById("inputs")
var result = document.getElementById("result")


function enterNum(numpad){
    var result = document.getElementById("result");
    result.value += numpad
}

function clearInp(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    a.value = result.value
    result.value = eval(result.value)
}

function _e(id){
    return document.getElementById(id);
} 


function clearAll(){
    a.value = ""
    result.value = ""
}
