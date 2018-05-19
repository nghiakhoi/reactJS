import React, { Component } from 'react';

class TableDataRow extends Component {
    editClick = function () {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }.bind(this);

    deleteButtonClick = function (idUser) {
        this.props.deleteButtonClick(idUser);
    }

    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.dataUser.name}</td>
                <td>{this.props.dataUser.tel}</td>
                <td>{this.props.dataUser.permission === 1 || this.props.dataUser.permission === "1" ? "Admin" : this.props.dataUser.permission === 2 || this.props.dataUser.permission === "2" ? "Mod" : "Normal"}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={this.editClick}>
                            <i className="fa fa-edit" />Sửa</div>
                        <div className="btn btn-danger xoa" onClick={function () { this.deleteButtonClick(this.props.dataUser.id) }.bind(this)}>
                            <i className="fa fa-trash" />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;