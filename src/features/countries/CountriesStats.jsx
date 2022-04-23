import React, { useState } from "react"
import PropTypes from "prop-types"

const CountriesStats = ({ data }) => {
    const [countries] = useState(data)

    return (
        <div className="col-12 col-sm-11">
            <div>{countries ? showList(countries) : <div>Loading...</div>}</div>
        </div>
    )
}

function showList(items) {
    const newItems = []
    for (const [index, item] of items.entries()) {
        const element = (
            <tr key={item.country_name}>
                <th scope="row">{index + 1}</th>
                <td>{item.country_name}</td>
                <td>{item.cases}</td>
                <td>{item.new_cases}</td>
                <td>{item.deaths}</td>
            </tr>
        )
        newItems.push(element)
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Country Name</th>
                    <th scope="col">Cases</th>
                    <th scope="col">New Cases</th>
                    <th scope="col">Deaths</th>
                </tr>
            </thead>
            <tbody>{newItems}</tbody>
        </table>
    )
}
CountriesStats.propTypes = {
    data: PropTypes.array.isRequired,
}

export default CountriesStats
