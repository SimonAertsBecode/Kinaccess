export const handleChange = (event, setValueFunction) => {
   const { name, value } = event.target;

   return setValueFunction((prevState) => ({
      ...prevState,
      [name]: value,
   }));
};
