import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { listMenu } from "../constants/listMenu";
import { Link, Route } from "react-router-dom";
import { Button ,Input} from 'antd';
import { sessionHandler } from "../store/sessionStore";
import {  PoweroffOutlined,UserOutlined,UserSwitchOutlined,
  AuditOutlined,ShoppingOutlined,ShoppingCartOutlined,RadarChartOutlined,
  StarOutlined,BarsOutlined 
  

} from '@ant-design/icons';
import {  removeUserData } from "../store/action";
import { connect } from "react-redux";
import 'antd/dist/antd.css'

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
  
  
getItem('User', 'user',<UserOutlined style= {{fontSize:20}}/> ,), 
 
getItem('Admin', 'admin',<UserSwitchOutlined   style= {{fontSize:20}}/>) ,
getItem('Order', 'order',<ShoppingCartOutlined  style= {{fontSize:20}}/> ),
getItem('Deliverman', 'deliverman',<AuditOutlined style= {{fontSize:20}}/>),
getItem('Articles', 'articles',<ShoppingOutlined  style= {{fontSize:20}}/> ),
getItem('Vendor', 'vendor',<RadarChartOutlined  style= {{fontSize:20}}/> ),
getItem('Country', 'country',<UserSwitchOutlined style= {{fontSize:20}}/> ),
getItem('Rating', 'rating',<StarOutlined style= {{fontSize:20}}/> ),
getItem('Categories', 'categories',<BarsOutlined style= {{fontSize:20}}/>, [getItem('category', 'category'),getItem('souscategory1', 'souscategory1'),
 getItem('souscategory2', 'souscategory2'),

      
]),
getItem('Utilisateurs', 'utilisateurs',<BarsOutlined style= {{fontSize:20}}/>, [getItem('utilisateurs-actif', 'utilisateur-actif'),getItem('utilisateur-inactif', 'utilisateur-inactif'),
      
]),
getItem('Commandes', 'commandes',<BarsOutlined style= {{fontSize:20}}/>, [getItem('commandes-achévée', 'commandes-achévée'),getItem('commandes-inachévée', 'commandes-inachévée'),
      
]),
getItem('Livreurs', 'livreurs',<BarsOutlined style= {{fontSize:20}}/>, [getItem('livreurs-actif', 'livreurs-actif'),getItem('livreurs-inactif', 'livreurs-inactif'),
      
]),
getItem('Pays', 'pays',<BarsOutlined style= {{fontSize:20}}/>, [getItem('pays-actif', 'pays-actif'),getItem('pays-inactif', 'pays-inactif'),
      
]),
getItem('Vendeurs', 'vendeurs',<BarsOutlined style= {{fontSize:20}}/>, [getItem('vendeurs-Actif', 'vendeurs-Actif'),getItem('vendeurs-inactif', 'vendeur-inactif'),
      
]),

getItem('Articles', 'articles',<BarsOutlined style= {{fontSize:20}}/>, [getItem('artiicles-actif', 'articles-actif'),getItem('articles-inactif', 'articles-inactif'),
      
]),
getItem('rating', 'rating',<BarsOutlined style= {{fontSize:20}}/>, [getItem('rating-actif', 'rating-actif'),getItem('rating-inactif', 'rating-inactif'),
      
]),
getItem('admin', 'admin',<BarsOutlined style= {{fontSize:20}}/>, [getItem('admin-actif', 'admin-actif'),getItem('admin-inactif', 'admin-inactif'),
      
]),



]


class First extends Component {
  render() { 
  return (
    <div>
      <Layout style={{ minHeight: "100vh",backgroundColor:"DarkSeaGreen" }}>
        <Sider>
          <div style={{ height: 100 }}></div>

          <Menu theme="" style={{backgroundColor:"DarkSeaGreen",color:""}} mode="inline" defaultSelectedKeys={['0']} items={items} onClick={e=>{
          if(e.key === "") {
            return window.location.href ="/main";
          }
          return window.location.href ="/main/"+e.key;
        }}/>
        </Sider>
        <Layout>
          <Header className="header">
          <div className="logo"/>
            <Link 
            to="/"
            style={{textdecoration:"none",color:"white"}}
            onClick={async()=>{
              await this.props.deleteData();
              return sessionHandler("auth_token",null,"remove");
            }}
            >  
            < PoweroffOutlined
            style={{fontSize:"130%",float:"right",color:"white",marginTop:40,marginLeft:"20"}}
            />
            </Link> 
            <Menu theme="dark" mode="horizontal" />
          </Header>

          <Content className="site-layout-background">
              {listMenu.map((item, index) => (
                <Route exact key={index} path={item.path} component={item.component} />
              ))}
          </Content>
          <Footer style={{ textAlign: "center" }}>Powered by Xearth </Footer>
        </Layout>
      </Layout>
      <div></div>
    </div>
  );
  };
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    deleteData: (data) => {
      dispatch( removeUserData (data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(First);



