import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
    const data = [
        {name: "Jerry Macguary", viewers: 350, favourite: true, id: 1},
        {name: "Tomorrow of adge", viewers: 375, favourite: false, id: 2},
        {name: "Impossible mission", viewers: 753, favourite: false, id: 3}
    ]
    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList data={data}/>
                <MoviesAddForm/>
            </div>
        </div>
    )
}

export default App;