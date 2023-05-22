import React  from "react";

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="py-4 pl-3 w-full border border-gray-200 rounded focus:outline-[#BCE3C9] focus:outline-[0.5px]"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;








// const InputText = (props) => {
//   const {
//     value = "",
//     placeholder = "",
//     onChange = () => null,
//     name = "",
//     id = "",
//   } = props;
//   function triggerOnChangeEvent(e) {
//     onChange(e);
//   }

//   return (
//     <input
//       type="text"
//       className="py-4 pl-3  w-full border border-gray-200 rounded focus:outline-[#BCE3C9] focus:outline-[0.5px]"
//       value={value}
//       placeholder={placeholder}
//       name={name}
//       id={id}
//       onChange={triggerOnChangeEvent}
//     />
//   );
// };

// <InputText />;
// export default InputText;
