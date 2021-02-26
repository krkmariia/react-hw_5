import React from 'react';
import Section from "./Section";
import Weather from "./Weather";

export default function App() {
   return (
   <Section name="weather in Ukraine">
       <Weather cityName="Lviv" degrees={9} imageLink="https://www.creativefabrica.com/wp-content/uploads/2019/02/Sunny-Icon-by-Kanggraphic-11.jpg"/>
       <Weather cityName="Kharkiv" degrees={4} imageLink="https://cdn1.iconfinder.com/data/icons/weather-bright-flat-design/128/rainy-cloud-rain-weather-512.png"/>
       <Weather cityName="Zaporizhzhia" degrees={-8} imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZAlU2J7taDh0QDNyPdgv6w_qdEvAzB4Ytw&usqp=CAU"/>
   </Section>
)};