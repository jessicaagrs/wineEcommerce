type RadioButtonProps = {
  label: string;
  id: string;
};

export const RadioButton = ({ label, id }: RadioButtonProps) => {
  return (
    <div>
      <input type="radio" name={id} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};