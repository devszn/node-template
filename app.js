// VAR
const express = require('express')
const app = express()
const path = require('path')








// EXPRESS SETTING 
app.set('view engine','ejs')
app.use(express.static('public'))
app.set('views', './src/views');
app.get('/', (req, res)=>{
    res.render('index')
})


// GETTING ROUTE









// MIDDLEWARE
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use(express.json());


// ROUTERS 









app.get('*', function(req, res){
  res.status(404).send('page not found')
});







const PORT = process.env.PORT || 5000

app.listen(PORT,()=> {
    console.log(`server started on post ${PORT}` )
})