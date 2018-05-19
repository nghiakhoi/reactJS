import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }


    isChange = function (event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    saveButton = function () {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card text-white bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Sửa Thông Tin User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <label >Tên User</label>
                                <input onChange={this.isChange.bind(this)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label >Điện thoại</label>
                                <input onChange={this.isChange.bind(this)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label>Chọn Quyền</label>
                                <select onChange={this.isChange.bind(this)} defaultValue={this.props.userEditObject.permission} name="permission" className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                                    <option value={0}>Chọn quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Mod</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" onClick={this.saveButton.bind(this)} value="Lưu" className="btn btn-block btn-primary" />

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;