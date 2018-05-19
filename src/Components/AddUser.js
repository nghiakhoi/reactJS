import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }

    isChange = function (event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        //package to item
        // var item = {};
        // item.id=this.state.id;
        // item.name=this.state.name;
        // item.tel=this.state.tel;
        // item.permission=this.state.permission;
        // console.log(item);
    }

    kiemtrahienthiform = function () {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Thêm mới User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <label >Tên User</label>
                                <input type="text" onChange={this.isChange.bind(this)} name="name" className="form-control" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label >Điện thoại</label>
                                <input type="text" onChange={this.isChange.bind(this)} name="tel" className="form-control" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label>Chọn Quyền</label>
                                <select name="permission" onChange={this.isChange.bind(this)} defaultValue="0" className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                                    <option value={0}>Chọn quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Mod</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                            <input type="reset" value="Thêm mới" onClick={function(){this.props.add(this.state.name,this.state.tel,this.state.permission)}.bind(this)} className="btn btn-block btn-primary"/>
                             
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            );
        }
    }



    render() {
        //console.log(this.state);
        return (

            <div>
                {this.kiemtrahienthiform()}
            </div>

        );
    }
}

export default AddUser;