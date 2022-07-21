import React, { useEffect, useState } from 'react'

export const Datafatch = () => {

    const [todos, settodos] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    settodos(data);
                    console.log(todos)
                })
        },1000)    },[]) ;





    return (
        <div>Datafatch</div>
    )
}
