import React, { Component } from 'react';
export default class B2 extends Component {
  componentWillMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <p>Bài 2:</p>
        Notification
        
      </div>
    );
  }
}