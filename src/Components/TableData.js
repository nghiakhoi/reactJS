import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = function(idUser){
        this.props.deleteButtonClick(idUser);
    }

    mappingDataUser = function () {
        return (
            this.props.dataUserProps.map((value, key) => (

                <TableDataRow
                    deleteButtonClick={this.deleteButtonClick.bind(this)}
                    changeEditUserStatus={this.props.changeEditUserStatus.bind(this)} editFunClick={function (user) { this.props.editFun(value) }.bind(this)} dataUser={value} key={key} stt={key} />
            ))
        );

    }

    render() {


        return (

            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.mappingDataUser()}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;