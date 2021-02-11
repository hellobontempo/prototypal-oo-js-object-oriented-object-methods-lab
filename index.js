function BoardMember(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
}

const veto = function(){
    return "No, I must disagree"
}

const approve = function (){
    return "You can do that!"
}

const doCharity = function (){
    return "I like to help people."
}

const releasePressStatement = function (){
    return `You will see great things from Scuber.`
}

const sayHi = function (){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}

BoardMember.prototype = {
    veto,
    approve,
    doCharity,
    releasePressStatement,
    sayHi
}