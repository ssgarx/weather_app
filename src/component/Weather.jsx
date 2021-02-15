import React, { useEffect, useState } from 'react'
import axios from "axios";

function Weather(props) {

    const [datax, setDatax] = useState("");
    const [nation, setNation] = useState("");
    const [isFetching, setIsFetching] = useState(true)
    const [isError, setIsError] = useState(false)



    var apiUrl = "http://api.weatherstack.com/current?access_key=55650747f0639e2b5a33f491d102a4ff&query=" + props.inputCity;


    // fetch(apiUrl).then(res => res.json()).then(data => console.log(data))
    useEffect(() => {
        axios.get(apiUrl)
            .then(function (response) {
                setIsFetching(false);
                setDatax(response.data.current.temperature);
                setNation(response.data.location.country);
            })
            .catch(function (error) {
                setIsFetching(true);
                setIsError(true);
                console.log(error);
            })


    });

    return <>
        {!isFetching && <div className="border mt-2">
            <h2>The temperature in {props.inputCity} is {datax}<span>&#176;</span> Celsius.</h2>
            <i>Country: {nation}</i>
        </div>}
        {isError && <div className="border mt-2">
            <h3 style={{ color: "red" }}> "{props.inputCity}" is not a valid city.</h3>
        </div>}
    </>

}

export default Weather
