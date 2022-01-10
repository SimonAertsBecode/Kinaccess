//**Import files */
import MainNavigation from './components/navigations/MainNavigation';
import Routes from './routes/Routes';
import CustomRouter from './routes/CustomRouter';
import myHistory from './utils/history';

const App = () => {
   return (
      <CustomRouter history={myHistory}>
         <MainNavigation />
         <Routes />
      </CustomRouter>
   );
};

export default App;
