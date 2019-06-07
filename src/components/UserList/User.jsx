import React, {Component} from 'react';
import s from './User.module.css';

export default class User extends Component {
    render() {
        return (
            <div key={this.props.key} className={s.usersListCard}>
                <h2 className={s.usersListCardTitle}>Карточка пользователя</h2>
                <div>
                    <div>
                        <span className={s.cardText}>Имя: </span>
                        <span>{this.props.name}</span>
                    </div>
                    <div>
                        <span className={s.cardText}>Никнейм: </span>
                        <span>{this.props.username}</span>
                    </div>
                </div>
                <div>
                    <h3 className={s.cardBlockTitle}>Контакты:</h3>
                    <div>
                        <span className={s.cardText}>email: </span>
                        <span>{this.props.email}</span>
                    </div>
                    <div>
                        <span className={s.cardText}>Телефон: </span>
                        <span>{this.props.phone}</span>
                    </div>
                    <div>
                        <span className={s.cardText}>Сайт: </span>
                        <span>{this.props.website}</span>
                    </div>
                </div>
                <div>
                    <h3 className={s.cardBlockTitle}>Адрес:</h3>
                    <div>
                        <span className={s.cardText}>Город: </span>
                        <span>{this.props.city}</span>
                    </div>
                    <div>
                        <span className={s.cardText}>Улица: </span>
                        <span>{this.props.street}</span>
                    </div>
                </div>
                <div>
                    <h3 className={s.cardBlockTitle}>Место работы:</h3>
                    <div>
                        <span className={s.cardText}>Компания: </span>
                        <span>{this.props.work}</span>
                    </div>
                    <div>
                        <span className={s.cardText}>Слоган: </span>
                        <span>{this.props.slogan}</span>
                    </div>
                </div>
            </div>
        )
    }
}