import React, { useState } from "react"
import PropTypes from "prop-types"

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

function GlobalStats({ data }) {
    const [items] = useState(defItems(data))

    return <React.Fragment>{showCards(items)}</React.Fragment>
}

function card(item) {
    return (
        <div key={item.title} className={`col-10 col-sm-5 m-2 bg-${item.color} card p-2`}>
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
GlobalStats.propTypes = {
    data: PropTypes.object.isRequired,
}

export default GlobalStats
