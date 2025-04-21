import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();
const app =express();
const port = process.env.PORT || 3008;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


const API_weather_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_direct_URL = "http://api.openweathermap.org/geo/1.0/direct";
const apikey = process.env.API_KEY;

app.get("/",(req,res)=>
{
    //{data:response.data}
    res.render("index.ejs");
});


app.post("/get-weather",async(req,res)=>
    {
            //{data:response.data}
        try
        {
            const response=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${req.body.city}&limit=1&appid=${apikey}`);
            if(response.data.length>0)
            {
                console.log(response.data)
                const response2=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apikey}`);
                res.render("index.ejs",{data:{description:response2.data.weather[0].description, temp: (response2.data.main.temp - 273.15).toFixed(2),feels_like: (response2.data.main.feels_like- 273.15).toFixed(2), temp_min:(response2.data.main.temp_min - 273.15).toFixed(2),temp_max:(response2.data.main.temp_max - 273.15).toFixed(2)}})
            }
            else
            {
                res.render("index.ejs",{error:"We couldn’t find that location. Please check that you’ve entered the full and correct city and country names."})

            }

            
        

           
        }
        catch(error)
        {
            res.render("index.ejs",{error:"Sorry, something went wrong while fetching the weather. Please try again in a moment."})

            console.log(JSON.stringify(error.response.data));
        }
    });




















app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);

});