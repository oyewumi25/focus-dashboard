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

class Candidate_new extends Component {
  state = {
    visible: false,
    fullname: "",
  
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

    const { fullname,  } = this.state;

    const data = {
      fullname: fullname.toLowerCase(),
   
    };

    if (
      data.fullname.length === 0 
     
    ) {
      this.setState({ load: false });
      return openNotification(
        "error",
        "Vous devez remplir le champ *Nom obligatoirement avec un mail correcte"
      );
    }

    await Axios.post(base_url + "/candidate/create-candidate",{
        fullname:  fullname.toLowerCase()
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
    const {fullname,  load} = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> Ajouter un candidat
        </Button>
        <Drawer
          title="Ajout de candidat"
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
            
          </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default Candidate_new;