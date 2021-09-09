import Navbar from './Navbar';
import Library from './Library'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import LibroDetails from './LibroDetails';
import NotFound from './NotFound';
import HomeNavbar from './HomeNavbar';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#17AD86'
    },
    secondary: {
      main: '#FA7A53'
    }
  }
});



function App() {


  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Switch>
            <Route exact path='/' >
              <HomeNavbar  />
              <Home/>
            </Route>

            <Route path='/libros/:id'>
              <Navbar  />
              <LibroDetails />
            </Route>
            
            <Route path='/libros'>
              <Navbar  />   
              <Library/>
            </Route>

            <Route path='/create'>
              <Navbar  />
              <Create />
            </Route>


            <Route path='*'>
              <Navbar  />
              <NotFound />
            </Route>              
        </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
