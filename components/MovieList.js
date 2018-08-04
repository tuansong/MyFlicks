import React, { Component } from 'react';
import { ScrollView, FlatList, View } from 'react-native';
import MovieDetail from './MovieDetail';
import { SearchBar, Button } from 'react-native-elements';

class MovieList extends Component {
    render() {
        const props = this.props.screenProps;
        return (
            <View>
                <SearchBar
                    icon={{ type: 'font-awesome', name: 'search' }}
                    lightTheme
                    onChangeText={props.onChange}
                />
                <View>
                <Button
                    title='Top rate'
                    onPress={props.topRate} 
                />
                </View>
                <FlatList
                    data={props.data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <MovieDetail
                            url={item.poster_path}
                            title={item.title}
                            content={item.overview}
                            loadDetail={() => this.props.navigation.navigate('MoviePage', item)}
                        />}
                    onRefresh={props.loadMore}
                    refreshing={props.loading}
                    onEndReached={props.loadMore}
                    onEndReachedThreshold="0.05"
                />
            </View>
        )
    }
}

export default MovieList;