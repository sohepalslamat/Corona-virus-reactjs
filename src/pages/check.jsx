import React, { useState, useEffect } from "react"

function Check() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("come")
        return function cleanup() {
            console.log("clean up")
        }
    }, [])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
// import React, { Component } from "react"
// class Check extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//         }
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`
//     }
//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.count} times`
//     }
//     componentWillUnmount() {
//         console.log("unmount")
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button
//                     onClick={() =>
//                         this.setState({ count: this.state.count + 1 })
//                     }
//                 >
//                     Click me
//                 </button>
//             </div>
//         )
//     }
// }

export default Check
