import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MillApi = () =>  {
    const [useMills, setMills] = useState([]);

    const mills = 'http://ms00015080d:7050/api/userpreferences/mill/${userID}';
    const loadedMills = [];

    useEffect(() => {
        axios.get(mills)
        .then(resData => {

            for (const key in resData.data.mills) {
                loadedMills.push({
                    id: resData.data.mills[key].millId,
                })
            }

            setMills(loadedMills)
        })
    }, []);

    return (
        <div >
            {useMills.length  <= 0 ? "loading..." : "" }
        </div>
    )
}

export default MillApi;
