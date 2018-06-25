import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SweetAlert from "react-bootstrap-sweetalert";

import { DeleteGift } from '../../actions/Gift.js'

class Gift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertGift: ""
        }
    }

    selectRus = (type) => {
        switch(type) {
            case "flowers":
                return "Цветы"
            case "toys":
                return "Игрушки"
            case "food":
                return "Еда"
            case "rose":
                return "Розы"
            case "lilies":
                return "Лилии"
            case "daffodils":
                return "Нарциссы"
            case "doll":
                return "Кукла"
            case "constructor":
                return "Конструктор"
            case "railway":
                return "Железная дорога"
            case "pizza":
                return "Пицца"
            case "roll":
                return "Ролл"
            case "burgers":
                return "Бургер"
            default:
                return "";
        }
    }

    warningOnDelete() {
        this.setState({
            alertGift: (
            <SweetAlert
                warning
                style={{ display: "block" }}
                title="Вы уверены?"
                onConfirm={() => this.successDeleteGift()}
                onCancel={() => this.hideAlert()}
                confirmBtnBsStyle="info"
                cancelBtnBsStyle="danger"
                confirmBtnText="Да, удалить!"
                cancelBtnText="Отмена"
                showCancel
            >
                Вы не сможете восстановить этот подарок!
            </SweetAlert>
            )
        });
    }

    successDeleteGift() {
        this.props.DeleteGift(this.props.id)
        this.setState({
            alertGift: null
        });
    }

    hideAlert() {
        this.setState({
          alertGift: null
        });
    }

    render() {
        return(
            <div key={this.props.id ? this.props.id : ""}>
                
                <div className="info">
                <button className="remove-gift-btn" onClick={() => this.warningOnDelete()}><i className="now-ui-icons ui-1_simple-remove"></i></button>
                    <div className="description">
                        <h4 className="info-title">Подарок {this.props.id ? this.props.id : ""}</h4>
                        <p>Категория: {this.selectRus(this.props.category)}</p>
                        <p>Предмет: {this.selectRus(this.props.item)}</p>
                        <p>Количество: {this.props.count ? this.props.count : ""}</p>
                        {this.state.alertGift}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, { }, { DeleteGift: DeleteGift }), dispatch)
};

export default connect(null, mapDispatchToProps)(Gift);