import { Table, PageHeader, Tag, Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import Axios from "axios";
import {base_url, getAllVendorInactif} from "../../constants/url"
import Highlighter from "react-highlight-words";
import { connect } from "react-redux";
import { openNotification } from "../../functions/notification";


class vendeurInactif extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
    searchInput: React.createRef(null),
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData = async () => {
    await Axios.get(base_url + getAllVendorInactif)
      .then((res) => {
        console.log(res.data.vendeurs);
        this.setState({ data: res.data.vendeurs});
      })
      .catch((err) => {
        return openNotification("error", err?.response?.data?.message);
      });
  };

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
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
        title: "Nom",
        dataIndex: "firstname",
        ...getColumnSearchProps("firstname")
      },

      {
        title: "Prénom",
        dataIndex: "lastname",
        ...getColumnSearchProps("lastname")
      },


      {
        title: "Email",
        dataIndex: "email",
        ...getColumnSearchProps("country")
        
      },

     
      {
        title: "Country",
        dataIndex: "country",
        ...getColumnSearchProps("country")
      },

      {
        title: "Registre",
        dataIndex: "registre",
        ...getColumnSearchProps("registre")
      },

      {
        title: "Withdrawed",
        dataIndex: "withdrawed",
        ...getColumnSearchProps("wthdrawed")
      },

      {
        title: "Logo",
        dataIndex: "logo",
       
      },

      {
        title: "Numéro de téléphone",
        dataIndex: "number",
        ...getColumnSearchProps("number"),
        render: (text) => (
          <Tag color="red">
            <b>{text}</b>
          </Tag>
        )
      },

        
    
    ];

    return (
      <div style={{}}>
        <PageHeader
          className="site-page-header"
          // onBack={() => null}
          title="Gestion des vendeurs"
          subTitle="Liste des reponses"
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

export default connect(mapStateToProps, mapDispatchStoreToProps)(vendeurInactif);
