import { forwardRef } from "react"
import errorIcon from "../assets/images/icon-error.svg"

function Input({
  type,
  name,
  placeholder,
  classname,
  error,
  ...props
}, ref) {
  return (
    <>
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${classname} ${error && "error"}`}
        {...props}
      />
      {error &&
        <span className="error-msg">{error.message}</span>
      }
      {error &&
        <img src={errorIcon} alt="Error icon" className="error-icon" />
      }
    </>
  )
}

export default forwardRef(Input)