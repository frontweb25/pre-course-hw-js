let passport = {
    name: "Petr",
    surname: "Petrov",
}

let clone = {}

for (let key in passport) {
    clone[key] = passport[key]
}

console.log(passport.name)
console.log(clone.name = 'Ivan')