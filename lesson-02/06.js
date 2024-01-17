let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let cloneObject = JSON.parse(JSON.stringify(passportWithAddress))

console.log(passportWithAddress.address.city)
console.log(cloneObject.address.city = 'Bobryisk')
