import React from 'react';
import {
    Row, Col,
    FormGroup, Label, Input,
    InputGroup
} from 'reactstrap';
import Datetime from 'react-datetime';

class Step3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address: "",
            city: "",
            country: "",
            datetime: "",
            addressState: "",
            cityState: "",
            countryState: "",
            dateTimeState: "",
        };
        this.cityChange = this.cityChange.bind(this);
    }
    changeDate = () => {
        let d = this.state;
        d.datetime = document.getElementById("datatimepickerorder").value;
        this.setState({ d });
        this.dateTimeChange();
    }
    addressChange(e){
        this.setState({
            address: e.target.value
        });
        if(e.target.value.length > 7){
            this.setState({
                addressState: " has-success"
            });
        } else {
            this.setState({
                addressState: " has-danger"
            });
        }
    }
    cityChange(e){
        this.setState({
            city: e.target.value
        });
        if(e.target.value.length > 4){
            this.setState({
                cityState: " has-success"
            });
        } else {
            this.setState({
                cityState: " has-danger"
            });
        }
    }
    countryChange(e){
        this.setState({
            country: e.target.value
        });
        if(e.target.value.length > 4){
            this.setState({
                countryState: " has-success"
            });
        } else {
            this.setState({
                countryState: " has-danger"
            });
        }
    }
    dateTimeChange(e){
        if(/^([1-9]|([012][0-9])|(3[01])).([0]{0,1}[1-9]|1[012]).\d\d\d\d [012]{0,1}[0-9]:[0-6][0-9]$/.test(this.state.datetime)){
            this.setState({
                dateTimeState: " has-success"
            });
        } else {
            this.setState({
                dateTimeState: " has-danger"
            });
        }
    }
    isValidated(){
        if(this.state.addressState !== " has-success" || this.state.cityState !== " has-success" || this.state.countryState !== " has-success" || this.state.dateTimeState !== " has-success"){
            if(this.state.addressState !== " has-success")
                this.setState({ addressState: " has-danger" });

            if(this.state.cityState !== " has-success")
                this.setState({ cityState: " has-danger" });

            if(this.state.countryState !== " has-success")
                this.setState({ countryState: " has-danger" });

            if(this.state.dateTimeState !== " has-success")
                this.setState({ dateTimeState: " has-danger" });

            return false;
        }
        let data = new Object();
        data.address = this.state.address;
        data.city = this.state.city;
        data.country = this.state.country;
        data.datetime = this.state.datetime;
        return data;
    }

    render(){
        return (
            <div className="Step_3">
                <h5 className="info-text">Шаг 3</h5>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10}>
                        <Datetime
                            className={this.state.dateTimeState ? this.state.dateTimeState:""}
                            dateFormat="DD-MM-YYYY"
                            timeFormat="HH:mm"
                            locale="ru"
                            inputProps={{placeholder:" Дата и Время (Обязательно поле) ", id: "datatimepickerorder"}}
                            onBlur={() => this.changeDate()}
                            value={this.state.datetime}
                        />
                    </Col>
                    <Col xs={12} sm={5}>
                        <Label>Страна</Label>
                        <InputGroup size="md" className={(this.state.countryState ? this.state.countryState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons location_world"></i>
                            </div>
                            <Input defaultValue={this.state.сountry} type="text" placeholder="Страна (Обязательно поле)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.countryChange(e)}/>
                        </InputGroup>
                    </Col>
                    <Col xs={12} sm={5}>
                        <Label>Город</Label>
                        <InputGroup size="md" className={(this.state.cityState ? this.state.cityState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons location_world"></i>
                            </div>
                            <Input defaultValue={this.state.city} type="text" placeholder="Город (Обязательно поле)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.cityChange(e)}/>
                        </InputGroup>
                    </Col>
                    <Col xs={12} sm={10}>
                        <Label>Адрес</Label>
                        <InputGroup size="md" className={(this.state.addressState ? this.state.addressState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons location_pin"></i>
                            </div>
                            <Input defaultValue={this.state.address} type="text" placeholder="Адрес (Обязательно поле)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.addressChange(e)}/>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step3;