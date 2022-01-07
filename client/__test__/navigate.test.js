import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import ContactForm from '../src/components/navigations/navComponents/ContactForm';

it('render corresponding component when navigate', () => {
   render(<App />);
   const contactLink = screen.getByAltText(/contact/i);
   fireEvent.click(contactLink);
   expect(<ContactForm />).toBeVisible;
});
