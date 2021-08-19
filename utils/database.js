/* const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db ;
const mongoConnect = callback =>{
    MongoClient.connect('mongodb+srv://malek_01:kisstherain@cluster0.wpkim.mongodb.net/shop?retryWrites=true&w=majority'
)
    .then(client => {
        console.log('connected !');
        _db = client.db() ; //for connecting : storing the connection to the database, it will keep on running
        callback();
    }
    )
    .catch(err => {
        console.log(err);
        throw(err);
    }
    );
};
const getdb = ()=>{
    if(_db){
        return _db ;
    } throw 'mafamech database aaa malek fyk ala wadh3ek';
} //return access to that connected database if it exists, elli hiya el connection hedhy stored fel private variable _db 
exports.mongoConnect = mongoConnect ;
exports.getdb = getdb ; */