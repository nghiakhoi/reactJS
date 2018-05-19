import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }

    getUserEditInfo = function(info){
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = function () {
        if (this.props.editUserStatus === true) {
            return (<EditUser getUserEditInfo={this.getUserEditInfo.bind(this)} userEditObject={this.props.userEditObject} changeEditUserStatus={this.props.changeEditUserStatus.bind(this)} />);
        }
    }

    isChange = function (event) {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnect(this.state.tempValue);
    }

    hienThiNut = function () {
        if (this.props.hienThiNut === true) {
            return (
                <div className="btn btn-info" onClick={() => this.props.clickNutDongForm()}>Đóng form</div>
            );
        } else {
            return (
                <div className="btn btn-info" onClick={() => this.props.clickNutDongForm()}>Thêm User</div>
            );
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" onChange={this.isChange.bind(this)} className="form-control" aria-describedby="helpId" placeholder="Nhập tên cần tìm" style={{ width: 500 }} />
                        <div className="btn btn-info" onClick={function () { this.props.checkConnect(this.state.tempValue) }.bind(this)}>Tìm</div>
                        {this.hienThiNut()}

                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;