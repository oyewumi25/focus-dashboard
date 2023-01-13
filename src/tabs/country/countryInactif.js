import { Table, PageHeader, Tag, Button, Input, Space,Dropdown,Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import Highlighter from "react-highlight-words";
import { connect } from "react-redux";
import PaysInactif_new from "../../forms/countryInactif_new ";
import { openNotification } from "../../functions/notification";



class PaysInactif extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
    searchInput: React.createRef(null),
    data: []
  };

  
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({
      searchText: ""
    });
  };

  render() {
    const { searchInput, searchText, searchedColumn, data } = this.state;

    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              this.handleSearch(selectedKeys, confirm, dataIndex)
            }
            style={{
              marginBottom: 8,
              display: "block"
            }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() =>
                this.handleSearch(selectedKeys, confirm, dataIndex)
              }
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && this.handleReset(clearFilters)}
              size="small"
              style={{
                width:90
              }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false
                });
                this.setState({
                  searchText: selectedKeys[0],
                  searchedColumn: dataIndex
                });
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? "#1890ff" : undefined
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: "#ffc069",
              padding: 0
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ""}
          />
        ) : (
          text
        )
    });

    const columns = [
      {
        title: "Id",
        dataIndex: "_id",
        ...getColumnSearchProps("_id")
      },

      {
        title: "City",
        dataIndex: "city",
        ...getColumnSearchProps("city")
      },

      {
        title: "Compagnie Registre Picture",
        dataIndex: "compagnie registre picture",
        ...getColumnSearchProps("compagnie registre picture")
      },


      {
        title: "Withdrawed",
        dataIndex: "withdrawed",
       
      },
      {
        title: "",
        dataIndex: "",
        render: (text, record) => (
          <Dropdown overlay={MenuButton(record)} placement="bottomCenter" arrow>
            <Button>Options</Button>
          </Dropdown>
        ),
      },
    
    ];
    const MenuButton = (record) => (
      <Menu>
        <Menu.Item>
          <Link onClick={() => {this.handleDelete(record._id)}}>Supprimer</Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <div style={{}}>
        <PageHeader
          className="site-page-header"
          // onBack={() => null}
          title="Gestion des pays"
          subTitle="Liste des pays"
          tags={""}
          extra={
            <PaysInactif_new/>
          }
        >
          <Table columns={columns} dataSource={data} size="middle" />
        </PageHeader>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state?.user?.token
  };
};

const mapDispatchStoreToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(PaysInactif);
