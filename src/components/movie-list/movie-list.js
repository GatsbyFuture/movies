import './movie-list.css';
import MovieListItem from "../movie-list-item/movie-list-item";
// bu yerda esa iteratsiyadan foydalandik...
// bizda o'zgaruvchilar takrorlanib qolayapti shu bois interpolition usulidan foydalanamiz
const MovieList = ({data}) => {
    return (
        <ul className='movie-list'>
            {data.map(item => (
                <MovieListItem key={item.id} name={item.name} viewers={item.viewers} favourite={item.favourite}/>
            ))}
        </ul>
    )
}

export default MovieList;