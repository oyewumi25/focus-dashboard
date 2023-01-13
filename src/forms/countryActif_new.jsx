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

class countryActif_new extends Component {
  state = {
    visible: false,
    Nom_du_pays: "",
   code_indicatif: "",
    city:"",
    social:"",
    contact:"",
    terms_and_privacy:"",
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

    const { Nom_du_pays,code_indicatif,contact,city,social,terms_and_privacy } = this.state;

    const data = {
      Nom_du_pays: Nom_du_pays.toLowerCase(),
      code_indicatif: code_indicatif,
      city:city,
      social:social,
      contact:contact,
      terms_and_privacy:terms_and_privacy
    };

    if (
      data.Nom_du_pays.length === 0 ||
      data.code_indicatif.length < 2 || data.city.length < 4
      || data.social.length < 2 || data.terms_and_privacy.length >100 
      || data.contact.length < 5
    ) {
      this.setState({ load: false });
      return openNotification(
        "error",
        "Vous devez remplir le champ *Nom obligatoirement avec un mail correcte"
      );
    }

    await Axios.post(base_url + "/jury/create-jury",{
      Nom_du_pays:  Nom_du_pays.toLowerCase(),
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
    const { Nom_du_pays, code_indicatif,city,social,terms_and_privacy,contact, load } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> Ajouter un pays
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
          <Form layout="vertical" hideRequiredMark style={{backgrounColor:"DarkSeaGreen"}}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Nom du pays"
                  label="Nom du pays"
                  rules={[
                    {
                      required: true,
                      role: "Veuillez entrer le nom complet"
                    }
                  ]}
                 
                >
                  <Input
                    name=""
                    placeholder="Veuillez entrer le nom du pays"
                    onChange={this.handleChange}
                    value={Nom_du_pays}
                  />
                 
                </Form.Item>  
              </Col>

            <Col span={12}>
            <Form.Item label="code indicatif">
        <Select 
        name ="code indicatif" 
        placeholder="selectionnez le code de votre pays"
        
        >
          <Input 
          onChange={this.handleChange}
          value={code_indicatif}
          /> 
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
                  name="contact"
                  label="contact"
                  rules={[
                    {
                      required: true,
                      role: "Veuillez entrer votre contact"
                    }
                  ]}
                >
                  <Input
                    name="contact"
                    placeholder="contact"
                    onChange={this.handleChange}
                    value={contact}
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
                    value={terms_and_privacy}
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

export default countryActif_new ;