import MovieApp from './components/movie-catalogue/components/MovieApp'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MovieApp/>
    </BrowserRouter>
  )
}

export default App;