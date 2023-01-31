import React, { Component } from "react";
import { Card, Input, Space} from "antd";
import { DisplayButton } from "../library/Button";
import { sessionHandler } from "../functions/sessionStore";
import { openNotification }from "../functions/notification";
import { keyCredential, token,api_key } from "../constants/credential";
import { addUserData } from "../store/action";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Helmet from 'react-helmet';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import  {validatorConnect} from '../functions/validator-connect'
import Axios from "axios";
import { base_url,loginAdmin} from "../constants/url"


class Login extends Component {
  state = {
    email: "email",
    password: "password",
    alert: false,
    alertText: "Renseignez les champs svp!",
    alertType: "warning",

  };

  closeAlert = () => {
    return this.setState({
      alert: false
    });
  };

  handleConnect = async () => {
    const { email, password } = this.state;
    console.log(email, password);

    await Axios.post(
      base_url + loginAdmin,
      {
        email: email.toLowerCase().trim(),
        password,
      },
      {
        headers: {
          api_key,
        },
      }
    )
    .then((res) => {
      console.log("Success: ", res?.data?.message);
      const data = res.data.data;
      // console.log(res.data);
      this.props.saveData({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        _id: data._id,
      });
      sessionHandler("auth_token", res.data.auth_token, "set");
      return setTimeout(async () => {
        window.location.reload();
      }, 1000);
    })
    .catch((err) => {
      console.log("Error: ", err?.response?.data?.message);
      this.setState({
        load: false,
      });
    });
  }
  render() {

    if (
      sessionHandler("auth_token", null, "get") &&
      sessionHandler("auth_token", null, "get").length !== 0
    ) {
      return <Redirect to="/main"/>;
    }
    return (
      <div className="site-card-border-less-wrapper" style={{justifyContent:"center"}}>
         <Helmet bodyAttributes={{style: 'background-color : #FFDEAD'}}/>
      
        <Card
          bordered={true}
          style={{
            width: "20%",
            backgroundColor: " #D2B48C",
            marginLeft: "40%",
            marginTop: "13%",
          }}
        >
          <Space direction="vertical" >
            <Input
              size="large"
              placeholder="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              suffix={<UserOutlined style={{ color: "gray" }} />}
              style={{ width: "110%", marginLeft: "23%" }}
            />
            <Input.Password
              placeholder="password"
              size="large"
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              style={{ width: "110%", marginLeft: "23%" }}
            />

            <DisplayButton
              type="primary"
              disabled={false}
              text={"Connect"}
              onPress={() => this.handleConnect()}
              style={{ width: "110%", height: 45, marginLeft: "23%", paddingTop: "6px",color:"gray" }}
            />
          </Space>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    saveData: (data) => {
    dispatch(addUserData(data));
    
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Login);






