export default function Textarea({
  label,
  id,
  register,
  inputClass,
  rows = 3,
  placeholder,
  disabled,
}) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        placeholder={placeholder}
        {...register}
        className={inputClass}
        rows={rows}
        disabled={disabled}
      />
    </>
  );
}
