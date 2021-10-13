import { useSelector } from 'react-redux';

const MainLayout = () => {
   const test = useSelector((kinaccess) => kinaccess.formsReducer.contactForm.success);
   return (
      <>
         <h1>bonjour</h1>
         <h2>{test}</h2>
      </>
   );
};

export default MainLayout;
