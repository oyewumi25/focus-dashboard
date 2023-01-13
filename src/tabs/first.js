import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { listMenu } from "../constants/listMenu";
import { Link, Route } from "react-router-dom";
import { Button ,Input} from 'antd';
import { sessionHandler } from "../store/sessionStore";
import {  PoweroffOutlined,UserOutlined,UserSwitchOutlined,
  AuditOutlined,ShoppingOutlined,ShoppingCartOutlined,RadarChartOutlined,
  StarOutlined,BarsOutlined,WalletOutlined,MenuOutlined  
  

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
 
getItem('Utilisateurs','utilisateurs',<UserOutlined  style= {{fontSize:20}}/>, [getItem('utilisateurs-actif', 'utilisateur-actif'),getItem('utilisateur-inactif', 'utilisateur-inactif'),
      
]),
getItem('Commandes', 'commandes',<ShoppingCartOutlined style= {{fontSize:20}}/>, [getItem('commandes-achévée', 'commandes-achévée'),
getItem('commandes-inachévée', 'commandes-inachévée'),getItem('commandes-à-livrer', 'commandes-à-livrer'),
getItem('commandes-en-attente', 'commandes-en-attente'),getItem('commandes-pret-à-livrer', 'commandes-pret-à-livrer')
]),
getItem('Livreurs', 'livreurs',<AuditOutlined style= {{fontSize:20,color:""}}/>, [getItem('livreurs-actif', 'livreurs-actif'),getItem('livreurs-inactif', 'livreurs-inactif'),
      
]),
getItem('Pays', 'pays',<BarsOutlined style= {{fontSize:20}}/>, [getItem('pays-actif', 'pays-actif'),getItem('pays-inactif', 'pays-inactif'),
      
]),
getItem('Vendeurs', 'vendeurs',<RadarChartOutlined  style= {{fontSize:20}}/>, [getItem('vendeurs-Actif', 'vendeurs-Actif'),getItem('vendeurs-inactif', 'vendeur-inactif'),
      
]),

getItem('Articles', 'articles',<ShoppingOutlined style= {{fontSize:20}}/>, [getItem('artiicles-actif', 'articles-actif'),getItem('articles-inactif', 'articles-inactif'),
      
]),
getItem('rating', 'rating',<StarOutlined style= {{fontSize:20}}/>, [getItem('rating-actif', 'rating-actif'),getItem('rating-inactif', 'rating-inactif'),
      
]),
getItem('admin', 'admin',<UserSwitchOutlined style= {{fontSize:20}}/>, [getItem('admin-actif', 'admin-actif'),getItem('admin-inactif', 'admin-inactif'),
      
]),
getItem('carte', 'carte',<WalletOutlined style= {{fontSize:20}}/>, [getItem('carte-active', 'carte-active'),getItem('carte-inactive', 'carte-inactive'),
      
]),
getItem('categories', 'categories',<MenuOutlined  style= {{fontSize:20}}/>, [getItem('categorie', 'categorie'),getItem('sous-categorie1', 'sous-categorie1'),
getItem('sous-categorie2', 'sous-categorie2') 
      
]),



]


class First extends Component {
  render() { 
  return (
    <div >

      <Layout style={{ minHeight: "100vh" }}>

        <Sider
        style={{
          backgroundColor:"LightSeaGreen",
         

        }}
        >
          <div style={{ height: 100 }}></div>

          <Menu theme="" style={{backgroundColor:"LightSeaGreen",color:""}} mode="inline" color="white" defaultSelectedKeys={['1']}  items={items} onClick={e=>{
          if(e.key === "") {
            return window.location.href ="/main";
          }
          return window.location.href ="/main/"+e.key;
        }} />
        </Sider>
        < Layout>
          < Header className="header"
          
          style={{
            backgroundColor:"LightSeaGreen",
           
  
          }}
          >
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



