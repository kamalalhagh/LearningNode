const sayHi = (name) => {
    console.log(`Hi ${name}!`)
}

function sayHello(name) {
    console.log(`Hello ${name}!`)
}

const sayHey = function (name) {
    console.log(`Hey ${name}!`)
}

module.exports = { sayHello, sayHi, sayHey }
