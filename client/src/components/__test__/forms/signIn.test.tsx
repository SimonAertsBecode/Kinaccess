//* React testing library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

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
      const emailInputElement = screen.getByRole('textbox') as HTMLInputElement;
      const passwordInputElement = screen.getByLabelText(/Mot de passe/i) as HTMLInputElement;

      //**3) Assertion
      expect(emailInputElement.value).toBe('');
      expect(passwordInputElement.value).toBe('');
   });

   test('Type an email', () => {
      const emailInputElement = screen.getByRole('textbox', {
         name: /email/i,
      }) as HTMLInputElement;
      userEvent.type(emailInputElement, 'simon.aerts@gmail.com');
      expect(emailInputElement.value).toBe('simon.aerts@gmail.com');
   });

   test('Type a password', () => {
      const passwordInputElement = screen.getByLabelText(/Mot de passe/i) as HTMLInputElement;
      userEvent.type(passwordInputElement, 'motDePasse2303');
      expect(passwordInputElement.value).toBe('motDePasse2303');
   });

   test('Should display error message if email is not registered', () => {
      const emailInputElement = screen.getByRole('textbox', {
         name: /email/i,
      }) as HTMLInputElement;
      const submitBtnElement = screen.getByText('Connectez-vous');
      userEvent.type(emailInputElement, 'simon.aertail.com');
      userEvent.click(submitBtnElement);
      const emailErrorText = screen.getByText('email incorrect');
      expect(emailErrorText).toBeInTheDocument();
   });
});
