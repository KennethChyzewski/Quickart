import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import './styles.css';

class Alert extends React.Component {
    render() {
        const state = store.getState()
        let alerts = state['alertReducer']
        return (
            alerts.map(alert => (
                <div key={alert.id} className={`alert-${alert.alertType}`}>
                    {alert.msg}
                </div>
            ))
        );
    }
}

//Map redux state to this components porps
const mapStateToProps = state => ({
    alerts: state.alertReducer
})

export default connect(mapStateToProps)(Alert);