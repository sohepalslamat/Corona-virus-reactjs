import React, { useState, useEffect } from "react"
import api from "../plugins/axios"

const defItems = (data) => {
    return [
        {
            color: "primary",
            title: "Total Injuries",
            value: data.total_cases,
        },
        {
            color: "secondary",
            title: "Total Deaths",
            value: data.total_deaths,
        },
        {
            color: "success",
            title: "Recovery Cases",
            value: data.total_recovered,
        },
        {
            color: "danger",
            title: "Deaths Today",
            value: data.new_deaths,
        },
    ]
}

const fetchData = async () => {
    const { data } = await api.get("worldstat.php")
    return data
}

function GlobalStats() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetchData()
            .then((data) => {
                const newData = defItems(data)
                setItems(newData)
            })
            .finally(() => {})
    }, [])

    return (
        <React.Fragment>
            {items ? (
                showCards(items)
            ) : (
                <div className="text-black">loading...</div>
            )}
        </React.Fragment>
    )
}

function card(item) {
    return (
        <div
            key={item.title}
            className={`col-10 col-sm-5 m-2 bg-${item.color} card p-2`}
        >
            <div className="card-title fs-3">{item.title}</div>
            <div className="card-title fs-3">{item.value}</div>
        </div>
    )
}
function showCards(items) {
    const newItems = []
    for (const item of items) {
        newItems.push(card(item))
    }
    return newItems
}

export default GlobalStats
