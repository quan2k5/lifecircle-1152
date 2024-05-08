import React, { Component } from 'react'

interface Company {
    company: string
}

export default class B3 extends Component<any, Company> {
    constructor(props: any) {
        super(props)
        this.state = {
            company: "Rikkei Academy"
        }
    }
    handleChange = () => {
        this.setState({
            company: "RikkeiSoft"
        })
    }
  render() {
    return (
      <div>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.handleChange}>Change State</button>
      </div>
    )
  }
}