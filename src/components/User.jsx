import React, {Component} from 'react';
import './user.css';

export default class User extends Component {
    render() {
        return (
            <div key={this.props.user.id} className="users-list__card">
                <h2 className="users-list__card-title">Карточка пользователя</h2>
                <div className="user-name-username">
                    <div>
                        <span className="card-text name">Имя: </span>
                        <span className="user-name">{this.props.name}</span>
                    </div>
                    <div>
                        <span className="card-text nickname">Никнейм: </span>
                        <span className="user-nickname">{this.props.username}</span>
                    </div>
                </div>
                <div className="user-contacts">
                    <h3 className="card-block__title">Контакты:</h3>
                    <div>
                        <span className="card-text email">email: </span>
                        <span className="user-email">{this.props.email}</span>
                    </div>
                    <div>
                        <span className="card-text phone">Телефон: </span>
                        <span className="user-phone">{this.props.phone}</span>
                    </div>
                    <div>
                        <span className="card-text website">Сайт: </span>
                        <span className="user-website">{this.props.website}</span>
                    </div>
                </div>
                <div className="user-address">
                    <h3 className="card-block__title">Адрес:</h3>
                    <div>
                        <span className="card-text city">Город: </span>
                        <span className="user-city">{this.props.city}</span>
                    </div>
                    <div>
                        <span className="card-text street">Улица: </span>
                        <span className="user-street">{this.props.street}</span>
                    </div>
                </div>
                <div className="user-work">
                    <h3 className="card-block__title">Место работы:</h3>
                    <div>
                        <span className="card-text company">Компания: </span>
                        <span className="user-company">{this.props.work}</span>
                    </div>
                    <div>
                        <span className="card-text slogan">Слоган: </span>
                        <span className="user-slogan">{this.props.slogan}</span>
                    </div>
                </div>
            </div>
        )
    }
}