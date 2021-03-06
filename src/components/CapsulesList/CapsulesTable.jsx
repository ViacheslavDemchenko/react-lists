import React, {Component} from 'react';
import InstaService from '../../services/instaservice';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Capsule from './Capsule';
import s from './Capsules.module.css';

export default class CapsuleTable extends Component {
    InstaService = new InstaService();
    state = {
        capsules: [],
        error: false
    }

    componentDidMount() {
        this.updateData();
    }

    updateData() {
        this.InstaService.getAllCapsules()
        .then(this.onDataLoaded)
        .catch(this.onError)
    }

    onDataLoaded = (capsules) => {
        this.setState({
            capsules
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(capsule => {
            const {
                    capsule_serial,
                    capsule_id,
                    status,
                    original_launch,
                    original_launch_unix,
                    missions_name,
                    missions_flight,
                    landings,
                    type,
                    details,
                    reuse_count
                } = capsule;

            return <Capsule 
                        key={capsule_serial}
                        serial={capsule_serial}
                        id={capsule_id}
                        status={status}
                        launch={original_launch}
                        unix={original_launch_unix}
                        name={missions_name}
                        fight={missions_flight}
                        landings={landings}
                        type={type}
                        details={details}
                        reuse={reuse_count}
                    />
        })
    }

    render() {
        const {error, capsules} = this.state;
        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(capsules);

        return (
            <table className={s.capsulesTable}>
                <caption className={s.capsulesTableTitle}>Таблица запуска капсул</caption>
                <thead>
                    <tr>
                        <th>Серийный номер</th>
                        <th>ID</th>
                        <th>Статус</th>
                        <th>Первый запуск</th>
                        <th>Unix первого запуска</th>
                        <th>Название миссии</th>
                        <th>Количество полетов</th>
                        <th>Количество посадок</th>
                        <th>Тип капсулы</th>
                        <th>Доп. информация</th>
                        <th>Количество повторных использований</th>
                    </tr>
                </thead>
            <tbody>
                {items}
            </tbody>
        </table>
        )
    }
};