const express =require('express')
const {PORT,mongodbURL} =require('./config')
const {mongoose}=require('mongoose')
const bookRoutes=require('./routes/bookRoutes')
const cors=require('cors')

const app=express()
app.use(cors())
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELTE'],
//     allowedHeaders:['Content-Type'],

// }))

app.use(express.json())
app.get('/',(req,res)=>{
    return res.status(234).send("This is a bookStore router")
    
})
app.use('/books',bookRoutes)


mongoose.connect(mongodbURL)
.then(()=>{
    console.log('connected to database');
    app.listen(PORT,()=>{
        console.log('app is runnning'+PORT);
        })


})
.catch(()=>{
    console.log('error');
}
)