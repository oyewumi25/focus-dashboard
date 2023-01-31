import React, { Component } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  notification,
  Space,
  Spin
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { openNotification } from "../functions/notification";
import { base_url } from "../constants/url";
import Axios from "axios";

class sub_category extends Component {
  state = {
    visible: false,
    fullname: "",
   code_indicatif: "",
    city:"",
    social:"",
    load: false
  };

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = (e) => {
    e.preventDefault();
    return this.setState({ flag: e.target.files[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ load: true });

    const { fullname,code_indicatif,city,social } = this.state;

    const data = {
      fullname: fullname.toLowerCase(),
      code_indicatif: code_indicatif,
      city:city,
      social:social
    };

    if (
      data.fullname.length === 0 ||
      data.code_indicatif.length < 8 || data.city.length < 4
      || data.social.length < 2
    ) {
      this.setState({ load: false });
      return openNotification(
        "error",
        "Vous devez remplir le champ *Nom obligatoirement avec un mail correcte"
      );
    }

    await Axios.post(base_url + "/jury/create-jury",{
        fullname:  fullname.toLowerCase(),
        code_indicatif: code_indicatif.toLowerCase()
    }).then(res=>{
        return setTimeout(() => window.location.reload(), 1000);
    }).catch((err) => {
        console.log(err);
        this.setState({ load: false });
        return openNotification(
          "error",
          "Une erreur est survenue lors de la demande veuillez ressayer"
        );
      });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { fullname, code_indicatif,city,social, load } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> Ajout  de categorie
        </Button>
        <Drawer
          title="Ajout de pays"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right"
              }}
            >
              {load ? (
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              ) : (
                <div>
                  <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                    Annuler
                  </Button>
                  <Button
                    onClick={(e) => {
                      this.handleSubmit(e);
                    }}
                    type="primary"
                  >
                    Soumettre
                  </Button>
                </div>
              )}
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="fullname"
                  label="Nom du pays"
                  rules={[
                    {
                      required: true,
                      role: "Veuillez entrer le nom complet"
                    }
                  ]}
                >
                  <Input
                    name="fullname"
                    placeholder="Veuillez entrer le nom du pays"
                    onChange={this.handleChange}
                    value={fullname}
                  />
                 
                </Form.Item>  
              </Col>

            <Col span={12}>
            <Form.Item label="code indicatif">
        <Select
         placeholder="selectionnez le code de votre pays"
         name ="code indicatif"
        >  
        <Select.Option value="demo">+225</Select.Option>
        <Select.Option value="demo">+226</Select.Option>
        <Select.Option value="demo">+234</Select.Option>
        <Select.Option value="demo">+238</Select.Option>
        <Select.Option value="demo">+225</Select.Option>
        <Select.Option value="demo">+225</Select.Option>
        <Select.Option value="demo">+225</Select.Option>
        </Select>
      </Form.Item>
              </Col>


              <Col span={12}>
                <Form.Item
                  name="code indicatif"
                  label="code indicatif"
                  rules={[
                    {
                      required: true,
                      role: "Veuillez entrer l'email"
                    }
                  ]}
                >
                  <Input
                    name="code indicatif"
                    placeholder="code indicatif"
                    onChange={this.handleChange}
                    value={code_indicatif}
                  />
                  
                </Form.Item>
              </Col>
              
              <Col span={12}>
                <Form.Item
                  name="Nom de la cité"
                  label="Nom de la cité"
                  rules={[
                    {
                      required: true,
                      role: "Veuillez entrer le nom de la cite"
                    }
                  ]}
                >
                  <Input
                    name=" Nom de la cite"
                    placeholder="Veuillez entrer le nom de la cité"
                    onChange={this.handleChange}
                    value={city}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="Social"
                  label="Social"
                  rules={[
                    {
                      required: true,
                      role: ""
                    }
                  ]}
                >
                  <Input
                    name=" Social"
                    placeholder="Social"
                    onChange={this.handleChange}
                    value={social}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Termes et vie privée"
                  label="Termes et vie privée"
                  rules={[
                    {
                      required: true,
                      role: ""
                    }
                  ]}
                >
                  <Input
                    name="Termes et vie privée"
                    placeholder="Termes et vie privée"
                    onChange={this.handleChange}
                    value={city}
                  />
                </Form.Item>
              </Col>
              
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default sub_category;