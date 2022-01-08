import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import ContactForm from '../../components/navigations/navComponents/ContactForm';

it('render corresponding component when navigate', () => {
   render(<App />);
   const contactLink = screen.getByAltText(/contact/i);
   console.log(contactLink);
   fireEvent.click(contactLink);
   expect(<ContactForm />).toBeVisible;
});
