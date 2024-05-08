import React, { Component } from 'react'
import B5Child from './B5Child';
interface Status {
    status: string,
}

export default class B5 extends Component<any, Status>{
    constructor(props: any) {
        super(props);
        this.state = {
          status: 'Open the form'
        };
      }
    
      updateData = () => {
        this.setState({
          status: 'Close the form'
        });
      }
    
      render() {
        return (
          <div>
            <B5Child status = {this.state.status}></B5Child>
            <button onClick={this.updateData}>Change State</button>
          </div>
        );
      }
}