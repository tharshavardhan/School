import React, { Component } from 'react'

export default class FirstPage extends Component {
    render() {
        console.log("inside first oage ", this.props)
        return (
            <div>
                FirstPage
            </div>
        )
    }
}
export  class SecondPage extends Component {
    render() {
        return (
            <div>
                2
            </div>
        )
    }
}
export  class ThirdPage extends Component {
    render() {
        return (
            <div>
                3
            </div>
        )
    }
}
export  class FourthPage extends Component {
    render() {
        return (
            <div>
                4
            </div>
        )
    }
}
