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

class Jury_new extends Component {
  state = {
    visible: false,
    fullname: "",
    email: "",
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

    const { fullname, email } = this.state;

    const data = {
      fullname: fullname.toLowerCase(),
      email: email,
    };

    if (
      data.fullname.length === 0 ||
      data.email.length < 8
    ) {
      this.setState({ load: false });
      return openNotification(
        "error",
        "Vous devez remplir le champ *Nom obligatoirement avec un mail correcte"
      );
    }

    await Axios.post(base_url + "/jury/create-jury",{
        fullname:  fullname.toLowerCase(),
        email: email.toLowerCase()
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
    const { fullname, email, load } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> Ajouter un juré
        </Button>
        <Drawer
          title="Ajout de juré"
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
                  label="Nom Complet"
                  rules={[
                    {
                      required: true,
                      role: "Veuillez entrer le nom complet"
                    }
                  ]}
                >
                  <Input
                    name="fullname"
                    placeholder="Veuillez entrer le nom complet"
                    onChange={this.handleChange}
                    value={fullname}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="email"
                  rules={[
                    {
                      required: true,
                      role: "Veuillez entrer l'email"
                    }
                  ]}
                >
                  <Input
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                    value={email}
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

export default Jury_new;