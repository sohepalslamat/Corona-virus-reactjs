import React, { useEffect } from "react"

function Check() {
    useEffect(() => {
        document.title = `Check Yourself`
        return function cleanup() {}
    }, [])

    return (
        <div>
            <div style={{ height: "500px", fontSize: "30px" }} className="mt-5">
                Soon
            </div>
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
