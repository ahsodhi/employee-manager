import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onEmployeeSelect() {
        Actions.employeeEdit({ employee: this.props.employee });
    }
    
    render() {
        const { name } = this.props.employee;
        return (
            <TouchableHighlight onPress={this.onEmployeeSelect.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.nameTextStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = {
    nameTextStyle: {
        fontSize: 18,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default ListItem;
