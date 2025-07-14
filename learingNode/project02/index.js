
import express from 'express';



 import router from './routes/urlRoute.js';
 
 
 const app = express();
 const PORT = 5001;

 app.use(express.json());

//import routes

app.use( '/url', router)

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});


