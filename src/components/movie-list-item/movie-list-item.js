import './movie-list-item.css';
// bu yerda props lardan foydalandik ya'ni proportices (xususiyatlari).
const MovieListItem = ({name, viewers, favourite}) => {
    // console.log(favourite);
    // classNameni 2 xil usulda berish mumkin masalan quydagilar va 2 - usuldan foydalanamiz...
    // 1 - usul: let className = 'list-group-item d-flex justify-content-between';
    // if (favourite)
    //     className += ' favourite';
    return (
        <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
            <span className='list-group-item-label'>{name}</span>
            <input type='number' className='list-group-item-input' defaultValue={viewers}/>
            <div>
                <button type='button' className='btn-cookie btn-sm'>
                    <i className='fas fa-cookie'></i>
                </button>
                <button type='button' className='btn-cookie btn-sm'>
                    <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
    );
}

export default MovieListItem;