var result=0
var op1=""
var op2=""

function buttonclick(val){
    document.getElementById("screen").value+=val
}

function operatorclick(val){
    if(val=='+'){
        result+=parseInt(document.getElementById('screen').value)
        console.log(result)
        operator='+'
    }
    else if(val=='-'){
        result-=parseInt(document.getElementById('screen').value)
        console.log(result)
        operator='-'
    }
    else if(val=='X'){
        result*=parseInt(document.getElementById('screen').value)
        console.log(result)
        operator='*'
    }
    else if(val=='/'){
        result/=parseInt(document.getElementById('screen').value)
        console.log(result)
        operator='/'
    }
    cleardisplay()
}

function cleardisplay(){
    document.getElementById("screen").value=""
}

// function clearbalance(){
//     result=0
// }

function equalclick(){
    if(operator=='+'){
        result+=parseInt(document.getElementById('screen').value)
    }
    else if(operator=='-'){
        result-=parseInt(document.getElementById('screen').value)
    }
    else if(operator=='*'){
        result*=parseInt(document.getElementById('screen').value)
    }
    else if(operator=='/'){
        result/=parseInt(document.getElementById('screen').value)
    }
    document.getElementById('screen').value=result
}