//* React testing library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//* Components
import SignInForm from '../../forms/log/SignInForm';

//*Redux mock
import RenderWithReduxMock from '../mocks/reduxStoreMock';

beforeEach(() => {
   RenderWithReduxMock(<SignInForm />);
});

describe('Sign in tests', () => {
   test('Sign in inputs should be initially ', () => {
      //**2) Query the elements
      const emailInputElement = screen.getByRole('textbox');
      const passwordInputElement = screen.getByLabelText(/Mot de passe/i);

      //**3) Assertion
      expect(emailInputElement.value).toBe('');
      expect(passwordInputElement.value).toBe('');
   });

   test('Type an email', () => {
      const emailInputElement = screen.getByRole('textbox', {
         name: /email/i,
      });
      userEvent.type(emailInputElement, 'simon.aerts@gmail.com');
      expect(emailInputElement.value).toBe('simon.aerts@gmail.com');
   });

   test('Type a pasword', () => {
      const passwordInputElement = screen.getByLabelText(/Mot de passe/i);
      userEvent.type(passwordInputElement, 'motDePasse2303');
      expect(passwordInputElement.value).toBe('motDePasse2303');
   });

   test('Should display error message if email is not registered', () => {
      const emailInputElement = screen.getByRole('textbox', {
         name: /email/i,
      });
      const submitBtnElement = screen.getByText('Connectez-vous');
      const emailErrorText = screen.getByText('email incorrect');
      userEvent.type(emailInputElement, 'simon.aertail.com');
      userEvent.click(submitBtnElement);
      expect(emailErrorText).not.toBeInTheDocument();
   });
});
