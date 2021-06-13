export  const required = (value) => {
   return (value ?  undefined :  "Field is Required")
}

export const minLength = (value) => {
    return (value && value.length > 7 ? undefined : "Minimum 8 symbols")
}

