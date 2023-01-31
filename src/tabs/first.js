import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { listMenu } from "../constants/listMenu";
import { Link, Route } from "react-router-dom";
import { Button, Input } from "antd";
import { sessionHandler } from "../store/sessionStore";
import {
  PoweroffOutlined,
  OrderedListOutlined,
  UserOutlined,
  UserSwitchOutlined,
  AuditOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  RadarChartOutlined,
  StarOutlined,
  TrademarkCircleOutlined,
  BarsOutlined,
  WalletOutlined,
  MenuOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ThunderboltOutlined
} from "@ant-design/icons";
import { Image } from 'antd';
import { removeUserData } from "../store/action";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Padding } from "@syncfusion/ej2-react-charts";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const onSearch = (value) => console.log(value);

const { Search } = Input;

const { Sider, Header, Content, Footer } = Layout;

const items = [
  getItem("Dashboard", "Dashboard ",  <HomeOutlined style={{ fontSize: 20, }} />),
  getItem(
    "Utilisateurs",
    "utilisateurs",
    <UserOutlined style={{ fontSize: 20 }} />,
    [
      getItem("utilisateurs-actif", "utilisateur-actif"),
      getItem("utilisateur-inactif", "utilisateur-inactif"),
    ]
  ),
  getItem(
    "Commandes",
    "commandes",
    < OrderedListOutlined style={{ fontSize: 20 }} />,
    [
      getItem("Commandes-en-attente", "Commandes-en-attente"),
      getItem("Commandes-aceptée", "Commandes-aceptée"),
      getItem("Commandes-dispatchée", "Commandes-dispatchée"),
      getItem("Commandes-à-livrer", "Commandes-à-livrer"),
      getItem("Commandes-pret-à-livrer", "Commandes-pret-à-livrer"),
      getItem("Commandes-annulées", "Commandes-annulées"),

      
    ]
    
  ),
  getItem("Permission", "permission", <ThunderboltOutlined  style={{ fontSize: 20 }} />),

  getItem("Role", "role", <TrademarkCircleOutlined style={{ fontSize: 20 }} />),
  
  getItem(
    "Livreurs",
    "livreurs",
    <AuditOutlined style={{ fontSize: 20, color: "" }} />,
    [
      getItem("livreur-actif", "livreur-actif"),
      getItem("livreur-inactif", "livreur-inactif"),
    ]
  ),
  getItem("Pays", "pays", <BarsOutlined style={{ fontSize: 20 }} />, [
    getItem("pays-actif", "pays-actif"),
    getItem("pays-inactif", "pays-inactif"),
  ]),
  getItem(
    "Vendeurs",
    "vendeurs",
    <RadarChartOutlined style={{ fontSize: 20 }} />,
    [
      getItem("vendeurs-Actif", "vendeur-Actif"),
      getItem("vendeurs-inactif", "vendeur-inactif"),
    ]
  ),

  getItem(
    "Articles",
    "articles",
    <ShoppingOutlined style={{ fontSize: 20 }} />, 
    [
      getItem("artiicles-actif", "articles-actif"),
      getItem("articles-inactif", "articles-inactif"),
    ]
  ),
  getItem("rating", "rating", <StarOutlined style={{ fontSize: 20 }} />),
  
  getItem("admin", "admin", <UserSwitchOutlined style={{ fontSize: 20 }} />, [
    getItem("admin-actif", "admin-actif"),
    getItem("admin-inactif", "admin-inactif"),
  ]),
  getItem("panier", "panier", < ShoppingCartOutlined  style={{ fontSize: 20 }} />),
  
  getItem(
    "categories",
    "categories",
    <MenuOutlined style={{ fontSize: 20 }} />,
    [
      getItem("categorie", "categorie",<MenuOutlined style={{ fontSize: 13 }} />, [
        getItem("categorie-active", "categorie-active"),
        getItem("categorie-inactive", "categorie-inactive"),
      ]),
      getItem("sous-categorie1", "sous-categorie1",<MenuOutlined style={{ fontSize: 13 }} />, [
        getItem("sous-categorie-active", "sous-categorie-active"),
        getItem("sous-categorie-inactive", "sous-categorie-inactive"),
      ]),
      getItem("sous-categorie2", "sous-categorie2",<MenuOutlined style={{ fontSize: 13 }} />, [
        getItem("sous-sous-categorie-active", "sous-sous-categorie-active"),
        getItem("sous-sous-categorie-inactive", "sous-sous-categorie-inactive"),
      ]),
    ]
  ),
 
];

class First extends Component {
  
  state = {
    collapsed: false,
  };

  setCollapsed() {
    return this.setState({
      collapsed: !this.state.collapsed,
      
    });
  }
  
  render() {
    const {collapsed} = this.state;
    return (
      <div>
        <Layout style={{ minHeight: "180vh" }}>
          <Sider
            style={{ backgroundColor: "DarkOrange",color:"white" }}
            collapsed={collapsed}
          >
            
            <p style={{color:"white",fontSize:27,marginTop:"1%",marginLeft:10}}><b>FocusShop</b></p>
            
              
            <Menu
              
              theme="white"
              style={{ backgroundColor: "", color: "" }}
              mode="inline"
              defaultSelectedKeys={["0"]}
              items={items}
              onClick={(e) => {
                if (e.key === "") {
                  return (window.location.href = "/main");
                }
                return (window.location.href = "/main/" + e.key);
              }}
              
            />
            
          </Sider>
          <Layout>
            <Header
              className="header"
              style={{ backgroundColor: "DarkOrange" }}
            >  
            <Link 
            to="/"
            style={{textdecoration:"none",color:"white"}}
            onClick={async()=>{
              await this.props.deleteData();
              return sessionHandler("auth_token",null,"remove");
            }}
            >
              <PoweroffOutlined 
            style={{fontSize:"130%",float:"right",color:"white",marginTop:40,marginLeft:"20"}}
            />   
            </Link>
            
              <MenuUnfoldOutlined style={{color:"white",fontSize: 20,marginLeft:"3%"}} 
              onClick={()=> this.setCollapsed()}/>
              <div className="logo"/>
              <Menu theme="dark" mode="horizontal" />
            </Header>

            <Content className="site-layout-background">
              {listMenu.map((item, index) => (
                <Route
                  exact
                  key={index}
                  path={item.path}
                  component={item.component}
                />
              ))}
            </Content>
            <Footer style={{ textAlign: "center"}}>Powered by Xearth </Footer>
          </Layout>
        </Layout>
        <div></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    deleteData: (data) => {
      dispatch(removeUserData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(First);
