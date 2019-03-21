//Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
const createDoctors = (name, specialty, address) => ({
        "name": name,
        "specialty": specialty,
        "address": address
})
console.log(createDoctors)
//Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.
const bowWowKennels =[]
const pets = (name, breed) => ({
    "name": name,
    "breed": breed
})

//Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

bowWowKennels.push(pets("Lussy", "Bulldog"))
bowWowKennels.push(pets("Rocky", "Beagle"))
bowWowKennels.push(pets("Mali", "German Shepherd"))

console.log(bowWowKennels)