//**Import files */
import MainNavigation from './components/Navigations/MainNavigation';
import Routes from './pages/routes/Routes';
import CustomRouter from './hooks/useCustomRouter';
import myHistory from './helpers/CustomHistory';

const App = () => {
   return (
      <CustomRouter history={myHistory}>
         <MainNavigation />
         <Routes />
      </CustomRouter>
   );
};

export default App;
