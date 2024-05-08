import React, { Component } from 'react'

interface Time {
    time: string
}

export default class B9 extends Component<any, Time> {
    timer: number = 0;
    constructor(props: any) {
        super(props);
        this.state = {
          time: new Date().toLocaleTimeString()
        };
    }
    
    componentDidMount() {
        this.timer = setInterval(
          () => this.setState({
            time: new Date().toLocaleTimeString()
          }),
          1000
        );
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {
      return (
        <div>
          <h2>Thời gian hiện tại: {this.state.time}</h2>
        </div>
      );
    }
}