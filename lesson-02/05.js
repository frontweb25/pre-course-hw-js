let passport = {
    name: "Petr",
    surname: "Petrov",
}

let clone = {... passport}

console.log(passport.name)
console.log(clone.name = 'Ivan')