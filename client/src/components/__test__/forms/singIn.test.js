import { render, screen } from '@testing-library/react';
import SignInForm from '../../forms/log/SignInForm';
import RenderWithReduxMock from '../mocks/reduxStoreMock';

describe('Sign in tests', () => {
   test('Sign in inputs should be initially ', () => {
      RenderWithReduxMock(<SignInForm />);
      const emailInputElement = screen.getByRole('textbox');
   });
});
