export  const required = (value) => {
   return (value ?  undefined :  "* field is required")
}

export const minLength = (value) => {
    return (value && value.length > 7 ? undefined : " * minimum 8 symbols")
}

