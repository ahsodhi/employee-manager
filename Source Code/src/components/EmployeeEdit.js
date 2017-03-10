import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };
    
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onSaveChanges() {
        const { name, shift, phone } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextEmployee() {
        const { phone, shift } = this.props;
        text(phone, `Your upcoming shift is on ${shift}`);
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }
    
    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onSaveChanges.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextEmployee.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => { this.setState({ showModal: true }); }}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onDecline={this.onDecline.bind(this)}
                    onAccept={this.onAccept.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, shift, phone } = state.employeeForm;
    return { name, shift, phone };
};

export default connect(mapStateToProps, 
{ employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
