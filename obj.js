// simple oop
const dog = {
    name: 'Beddy',
    age: 12,
    bow(){
        console.log('Bow! ' + this.name)
    }
}

dog.bow()

const names = ['abc;', "cda\n"]
console.log(names.map(name => 
    name + ".....!!!"
))

//rest, spread
const copy = names.slice()
const copy1 = [...names]
console.log(copy1, copy)

const copiedDog = {...dog}
console.log(copiedDog)

const toArray = (...args) => {
    return args
}
console.log(toArray(1,2,3,4,5))

//destructing
const putsName = ({name}) =>{
    console.log(name)
}
putsName(dog)

const {name, age} = dog
console.log(name, age)
const [n1, n2] = names
console.log(n1, n2)
