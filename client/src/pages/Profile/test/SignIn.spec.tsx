import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

//*Redux mock
import RenderWithReduxMock from '../../../helpers/test/ReduxStoreMock';

//* Components
import SignInForm from '../../../components/forms/Log/SignInForm';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
   RenderWithReduxMock(<SignInForm />);
});

describe('SignIn', () => {
   describe('with valid inputs', () => {
      it('calls submit function', async () => {
         const mockOnSubmit = jest.fn();
         const { getByLabelText, getByRole } = RenderWithReduxMock(<SignInForm />);

         const emailInput = getByRole('textbox', {
            name: /email/i,
         }) as HTMLInputElement;

         const passwordInput = getByLabelText(/Mot de passe/i);

         await act(async () => {
            userEvent.type(emailInput, 'simon.aerts81@gmail.com');
            userEvent.type(passwordInput, 'bouboul23');
         });

         await act(async () => {
            userEvent.click(
               screen.getByRole('button', {
                  name: /login/i,
               })
            );
         });
      });
   });
   describe('with invalid email', () => {
      it.todo('renders the email validation error');
   });
   describe('with invalid password', () => {
      it.todo('renders the password validation error');
   });
});
