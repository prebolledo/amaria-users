const users = []
users.push({
    id:1,
    name:"Pablo",
    email:"pablo.rebolledo@amaris.com",
    active:true,
    friends:[2,5]
})

users.push({
    id:2,
    name:"Pedro",
    email:"pedro.rebolledo@amaris.com",
    active:true,
    friends:[1]
})

users.push({
    id:3,
    name:"Juan",
    email:"juan.rebolledo@amaris.com",
    active:false,
    friends:[2]
})

users.push({
    id:4,
    name:"Diego",
    email:"diego.rebolledo@amaris.com",
    active:true,
    friends:[]
})

users.push({
    id:5,
    name:"Rafael",
    email:"rafael.rebolledo@amaris.com",
    active:false,
    friends:[4]
})

export default users