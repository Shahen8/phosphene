import styles from "./components.module.css"

export const inputProto = ({
    input,
    placeholder,
    type,
    meta: { touched, warning },
  }) => {
    return (
      <div className={styles.inputField}>
        <input {...input} placeholder={placeholder} type={type}></input>
        {touched ? <span>{warning}</span> : undefined}
      </div>
    );
  };

  export const radioProto = ({
    input,
    placeholder,
    type,
    meta: { touched, warning },
  }) => {
    return (
        <input {...input} placeholder={placeholder} type={type}></input>
    );
  };
