import React, { Component } from 'react'

interface Count {
    count: number
}

export default class B10 extends Component<any, Count> {
    constructor(props: any) {
      super(props);
      this.state = {
        count: 0
      };
    }
    timer: number = 0

    componentDidMount() {
      this.timer = setInterval(
        () => this.setState((prevState) => ({
              count: (prevState.count + 1) % 11
          })),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {
      return (
        <div>
          <h2>Giá trị đếm: {this.state.count}</h2>
        </div>
      );
    }
}