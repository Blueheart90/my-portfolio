import { useField, ErrorMessage } from 'formik';

function FieldCustom({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  // console.log(props.type);
  // console.log(field);
  return (
    <div className="flex flex-col ">
      <label htmlFor={field.name}>{label}</label>
      {props.type === 'textarea' ? (
        <textarea {...field} {...props} cols="30" rows="6"></textarea>
      ) : (
        <input {...field} {...props} />
      )}

      {meta.touched && meta.error ? (
        <div className=" text-xl mt-4 after:content-['}'] before:content-['{'] before:text-accent after:font-bold after:text-accent before:font-bold">
          error:
          <span
            className={`pl-2  text-light  after:content-['"'] before:content-['"'] `}
          >
            <span className="underline decoration-wavy decoration-red-500">
              {meta.error}
            </span>
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default FieldCustom;
