import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

class MoviePage extends Component {
    render() {
        const props = this.props.navigation.state.params;
        const img = {
            uri: `https://image.tmdb.org/t/p/w500/${props.poster_path}`
        };
        return(
            <View>
                <Image source={img} style={styles.image}/>
                <View style={styles.content}>
                    <Text> style={styles.title}>{props.title}</Text>
                    <Text>{props.overview}</Text>
                </View>
            </View>
        )
    }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    image : {
        width: win.width,
        height: win.height 
    },
    content : {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title : {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
    }
})


export default MoviePage;