const express = require('express'); 
const chalk = require('chalk'); 
const path = require ('path'); 
const cors = require('cors');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute')(nav);
const signupRouter = require('./src/routes/signuproute')(nav);
const homeRouter = require('./src/routes/homeroute')(nav);
const booksRouter = require('./src/routes/booksroute')(nav);
const authorsRouter = require('./src/routes/authorsroute')(nav);

const app = express();
//express();

app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(express.urlencoded({extended:true}));//express.urlencoded
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");//3000 to 5000
});