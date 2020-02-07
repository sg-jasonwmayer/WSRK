import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const ApiTest = () =>  {
    const [useMills, setMills] = useState([]);
    const mills = 'http://ms00015080d:7050/api/userpreferences/fhenao';
    const loadedMills = [];

    useEffect(() => {
        axios.get(mills)
        .then(resData => {

            for (const key in resData.data.mills) {
                loadedMills.push({
                    id: resData.data.mills[key].millId,
                })
            }
            setMills(loadedMills);
            console.log(loadedMills[0]);
            console.log(useMills[1])
        })
    }, [loadedMills, useMills]);
   
    return (
        <div>
            {useMills.length  <= 0 ? "loading" : "loaded" }
        </div>
    )
}

export default ApiTest;