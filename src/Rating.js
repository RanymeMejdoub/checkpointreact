import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rating = ({Rate, setRate, movieRating, isMovieRating}) => {

const handleChange = value => {
    setRate(value);
  };

    return (

      isMovieRating
      ?
      <span>
        <Rate disabled  value={movieRating} />
      </span>
      :
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={Rate} />
    </span>
    );
  }
export default Rating;