import React, { Component } from 'react'

interface Slogan {
    slogan: string
}

export default class B4 extends Component<any, Slogan> {
    constructor (props: any) {
        super(props)
        this.state = {
            slogan: "Hoc code de di lam"
        }
    }

    shouldComponentUpdate(): boolean {
        return false
    }
    handleChange = () => {
        this.setState({
            slogan: "code như cc"
        })
    }
  render() {
    return (
      <div>
        <h2>Slogan: {this.state.slogan}</h2>
        <button onClick={this.handleChange}>Change State</button>
      </div>
    )
  }
}