/** @format */
import "./index.css";
interface Props {
  id: string;
  type: string;
  name: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  darkTheme?: boolean;
}
const InputGroup: React.FC<Props> = (props) => {
  const { id, placeholder, darkTheme } = props;
  return (
    <div className={`inline-grid`}>
      <label className="inputLabel text-start" htmlFor={id}>
        {placeholder}
      </label>
      <input
        className={`${darkTheme ? "inputDark" : "inputLight"}`}
        {...props}
      />
    </div>
  );
};

export default InputGroup;
