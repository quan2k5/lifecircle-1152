import React, { Component } from 'react'

export default class B7 extends Component {
    componentDidMount() {
        document.title = "Quân le";
    }
    /*
       Khi componentDidMount được gọi, DOM đã được tạo ra và thành phần đã được gắn kết với nó. 
       Điều này cho phép bạn thực hiện các tác vụ như thao tác trên DOM,
        yêu cầu dữ liệu từ API hoặc thiết lập các lắng nghe sự kiện.
    */
    
    render() {
        return (
          <div>
            <h3>Nhìn lên tiêu đề tab</h3>
          </div>
        );
    }
}