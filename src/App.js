import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import Navigation from './component/Navigation';
import routes from './route-config';
import Header from './component/Header';

function App() {
    function showRoute(routes){
        let xhtml = null;
        
        if(routes.length > 0 ){
            xhtml = routes.map((route, index)=> {
                return (
                    <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
                );
            });
        }
    
        return <Switch>{xhtml}</Switch>;
    }
    return (
        
        <Router>
        <div className="App">
            <Header/>
            <Navigation />
            <div className="container">
                {showRoute(routes)}
            </div>
        </div>
    </Router>
    );
  }
  
  export default App;