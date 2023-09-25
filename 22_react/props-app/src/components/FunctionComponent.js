import PropTypes from 'prop-types';

export default function FunctionComponent(props) {
  const student = '홍길동';
  const { name } = props;
  return (
    <div>
      <h1>Hi {student}</h1>
      <p>여긴 FunctionComponent</p>
      {/* <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p> */}
      <p>
        현재 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '기본값',
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
};
