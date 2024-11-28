// code your solution here
function saturdayFun(str= 'roller-skate'){
    return `This Saturday, I want to ${str}!` 

}
console.log(saturdayFun("continue working like no ones business"));
console.log(saturdayFun());

function mondayWork(str2='go to the office'){

    return `This Monday, I will ${str2}.`;
}
console.log(mondayWork("work extra hard"));
console.log(mondayWork());


function wrapAdjective(msg1="*"){
    return function(message= "special"){
        return `You are ${msg1}${message}${msg1}!`;

    }
}
console.log(wrapAdjective()('a hard worker'));
console.log(wrapAdjective("||")('a dedicated programmer'));