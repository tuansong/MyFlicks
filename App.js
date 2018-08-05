import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import MoviePage from './components/MoviePage';
import { createStackNavigator } from 'react-navigation';

const Routes = createStackNavigator({
  MovieList: {
    screen: MovieList,
    navigationOption: {
      title: 'MyFlicks'
    }
  },
  MoviePage: {
    screen: MoviePage,
    navigationOption: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  }
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false,
      movies: []
    }
   this.loadMore = this.loadMore.bind(this);
   this.mostViewFilterHandler = this.mostViewFilterHandler.bind(this);
   this.topRateFilterHandler = this.topRateFilterHandler.bind(this);
   this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    this.setState({
      loading: true,
      page: this.state.page + 1
    });
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c456245eb29eb37a5640f9326dba9c80&language=en-US&page=${this.state.page}`
      );
      let responseJson = await response.json();
      let movies = this.state.movies.concat(responseJson.results);
      this.setState({
        movies: movies,
        cloneMovies: movies,
        loading: false
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  searchHandler(text) {
    let movie = this.state.cloneMovies;
    let results = movie.filter(m => m.title.includes(text));
    this.setState({
      movies: results
    })
  }

  loadMore() {
    this.getMovies();
    console.log('loadMore()');
  }

  topRateFilterHandler() {
    console.log("topRateFilterHandler");
    this.setState({
      loading: true
    });
    let movies = this.state.cloneMovies;
    let sortedMovies = movies.sort(this.sortRating);
    this.setState({
      movies: sortedMovies,
      loading: false,
    });
    //console.log(sortedMovies);
  }

  sortRating(a, b) {
    return a.vote_average - b.vote_average;
  }

  mostViewFilterHandler() {
    console.log("mostViewFilterHandler()");
    this.setState({
      loading: true
    });
    let movies = this.state.cloneMovies;
    let sortedMovies = movies.sort(this.sortDate);
    this.setState({
      movies: sortedMovies,
      loading: false,
    });
  }

  sortDate(a, b) {
    if (a.release_date < b.release_date) {
      return -1;
    }
    if (a.release_date > b.release_date) {
      return 1;
    }
    return 0;
  }

  render() {
    return (
      <Routes
        screenProps={{
          data: this.state.movies,
          loadMore: this.loadMore,
          loading: this.state.loading,
          onChange: this.searchHandler,
          topRate: this.topRateFilterHandler,
          topView: this.mostViewFilterHandler
        }} />
    );
  }
}

const win = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    width: 200,
  }
});
