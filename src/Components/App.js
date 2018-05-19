import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      dataUser: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }


  componentWillMount() {
    //kiem tra
    console.log(localStorage.getItem('userData'));
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        dataUser: temp
      });
    }
  }


  deleteButtonClick = function (idUser) {
    var tempData = this.state.dataUser.filter(item => item.id !== idUser);
    this.setState({
      dataUser: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  getUserEditInfoApp = function (info) {
    console.log('thông tin là: ' + info.name);
    this.state.dataUser.forEach(function (value, key) {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem('userData', JSON.stringify(this.state.dataUser));
  }

  changeEditUserStatus = function () {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUser = function (user) {
    console.log('Đã kết nối');
    this.setState({
      userEditObject: user
    });
  }

  getNewUserData = function (name, tel, permission) {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser: items
    });
    localStorage.setItem('userData', JSON.stringify(items));
  }

  getTextSearch = function (dl) {
    this.setState({
      searchText: dl
    });
  }

  doiTrangThai = function () {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  render() {
    var ketqua = [];
    this.state.dataUser.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    console.log(this.state.searchText);
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={this.getUserEditInfoApp.bind(this)}
                userEditObject={this.state.userEditObject}
                changeEditUserStatus={this.changeEditUserStatus.bind(this)} editUserStatus={this.state.editUserStatus} clickNutDongForm={() => this.doiTrangThai()} hienThiNut={this.state.displayForm} checkConnect={this.getTextSearch.bind(this)} />
              <TableData deleteButtonClick={this.deleteButtonClick.bind(this)} changeEditUserStatus={this.changeEditUserStatus.bind(this)} editFun={this.editUser.bind(this)} dataUserProps={ketqua} />
              <AddUser hienThiForm={this.state.displayForm} add={this.getNewUserData.bind(this)} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
