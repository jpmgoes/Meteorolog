import { useForm } from "react-hook-form";
import "./style/index.scss";

export const Form = ({ setInput }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = handleSubmit((data) => {
    setInput(data.location);
    return data;
  });
  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <input type="submit" value="" className="form__search" />
        <input
          type="text"
          placeholder="Search"
          name="location"
          ref={register({ required: true })}
          className="form__input"
        />
      </form>
    </>
  );
};
