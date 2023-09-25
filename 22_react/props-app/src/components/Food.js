import PropTypes from 'prop-types';

export default function Food(props) {
  const { likeFood } = props;
  const foodColor = {
    color: 'red',
  };
  return (
    <div>
      <p>
        제가 좋아하는 과일은 <b style={foodColor}>{likeFood} 입니다.</b>
      </p>
    </div>
  );
}

Food.defaultProps = {
  likeFood: '바나나',
};

Food.propTypes = {
  name: PropTypes.string,
};
