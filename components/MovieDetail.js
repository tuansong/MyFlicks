import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import FadeInView from './animation/FadeIn';

class MovieDetail extends Component {
    render() {
        const img = {
            uri: `https://image.tmdb.org/t/p/w500/${this.props.url}`
        }
        return (
            <View >
                <FadeInView>
                <TouchableHighlight onPress={this.props.loadDetail}>
                    <View style={styles.movieContainer}>
                        <Image source={img} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.movieTitle}>{this.props.title}</Text>
                            <Text>{this.props.content.slice(0, 200) + "..."}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                </FadeInView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    movieContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderRadius: 150,
        borderBottomColor: '#000000'
    },
    textContainer: {
        flex: 1,
        flexWrap: 'wrap'
    },
    movieTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150
    }
})

export default MovieDetail;