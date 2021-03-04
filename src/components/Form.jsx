import { useForm } from "react-hook-form";

export const Form = ({ input, setInput }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = handleSubmit((data) => {
    setInput(data.location);
    return data;
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="location"
          name="location"
          ref={register({ required: true })}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
