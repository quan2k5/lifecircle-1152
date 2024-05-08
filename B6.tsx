import React, { Component } from 'react';
import B6Child from './B6Child';

interface Massage {
    massage: string,
}

export default class Ex06 extends Component<any, Massage> {
    constructor(props: any) {
        super(props);
        this.state = {
          massage: 'Interface Rendering'
        };
    }
    
    updateData = () => {
        this.setState({
          massage: 'No Interface Rendering'
        });
    }
    
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<Massage>, nextContext: any): boolean {
        return false
    }
    
    render() {
        return (
          <div>
            <B6Child massage={this.state.massage}></B6Child>
            <button onClick={this.updateData}>Change props</button>
          </div>
        );
    }
}