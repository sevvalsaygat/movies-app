import movies from './movies_data.json';
import Movie from './components/Movie';

function App() {
  console.log(movies);
  return (
    <div>
      {
        movies.map((movie, index)=> {
          return <Movie
            key={index}
            casting={movie.casting}
            categories={movie.categories}
            cover_url={movie.cover_url}
            id={movie.id}
            imbd={movie.imdb}
            min_age={movie.min_age}
            runtime={movie.runtime}
            summary={movie.summary}
            title={movie.title}
          />
        })
      }
      
    </div>
  );
}

export default App;
