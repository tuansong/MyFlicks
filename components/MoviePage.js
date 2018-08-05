import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    showIntro() {

    }

    render() {
        const props = this.props.navigation.state.params;
        const img = {
            uri: `https://image.tmdb.org/t/p/w500/${props.poster_path}`
        };
        return (
            <View>
                <Image source={img} style={styles.image} />
                <View style={styles.container}>
                    <View style={styles.content} >
                        <Text style={styles.title}>{props.title}</Text>
                        <Text>{props.overview}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width: win.width,
        height: win.height
    },
    container: {
        width: win.width,
        height: win.height,
        position: 'absolute'
    },
    content: {
        position: 'absolute',
        flex: 1,
        //justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'column',

        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 20,
        backgroundColor: '#ff00ff',
        opacity: 0.5,

        margin: 10,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff'
    }
})


export default MoviePage;