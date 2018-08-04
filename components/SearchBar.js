import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class SearchBar extends Component {
    render() {
        return(
            <View style={styles.input}>
                <TextInput onChangeText={this.props.onChange}/>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        input : {
            paddingTop: 30,

        }
    }
)

export default SearchBar;