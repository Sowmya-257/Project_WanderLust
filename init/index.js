const mongoose = require ("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const Mongo_URL = "mongodb://127.0.0.1:27017/WanderLust";

main()
.then(()=>{
    console.log("Connected to database");
})
.catch(err =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(Mongo_URL);
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner :"67245add140c87749010dabc"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initilized");
};

initDB();