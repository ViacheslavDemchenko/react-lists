import React, {Component} from 'react';

export default class Capsule extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.serial}</td>
                <td>{this.props.id}</td>
                <td>{this.props.status}</td>
                <td>{this.props.launch}</td>
                <td>{this.props.unix}</td>
                <td>{this.props.name}</td>
                <td>{this.props.fight}</td>
                <td>{this.props.landings}</td>
                <td>{this.props.type}</td>
                <td>{this.props.details}</td>
                <td>{this.props.reuse}</td>
            </tr>
        )
    }
}