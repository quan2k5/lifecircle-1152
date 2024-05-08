import React, { Component } from 'react';

interface Props {}

interface State {
  userName: string;
}

export default class    B1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "Quân lê",
    };
  }

  render() {
    return (
      <div>
        <p>Bài 1:</p>
        <p>{this.state.userName}</p>
      </div>
    );
  }
}