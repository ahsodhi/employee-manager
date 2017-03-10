import React, { Component } from 'react';
import { Text, Picker, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Enter employee name'
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='000-000-0000'
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker 
                        style={{ flex: 2 }}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        selectedValue={this.props.shift}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'column'
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
