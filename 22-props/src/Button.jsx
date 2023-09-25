import './Button.css';

function Button({ link, children }) {
  return (
    <a href={link}>
      <button className="Button">{children}</button>
    </a>
  );
}
export default Button;
