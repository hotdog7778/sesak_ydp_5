import '../css/Button.css';

const Button = (props) => {
  const { link, children } = props;
  return (
    <a href={link}>
      <button className="Button">{children}</button>
    </a>
  );
};

export default Button;
