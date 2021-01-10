import  Transition  from '././component/Transition';
import  ItemHome  from './component/ItemHome';
function App() {
    return (
      <div>
       <ItemHome></ItemHome>
      </div>
    );
  }
  
  export default App;
  

// import {
//     BrowserRouter as Router,
//     Route, 
//     Switch
// } from 'react-router-dom';

// import Navigation from './component/Navigation';
// import routes from './route-config';

// function App() {
//     function showRoute(routes){
//         let xhtml = null;
        
//         if(routes.length > 0 ){
//             xhtml = routes.map((route, index)=> {
//                 return (
//                     <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
//                 );
//             });
//         }
    
//         return <Switch>{xhtml}</Switch>;
//     }
//     return (
//         <Router>
//         <div className="App">
         
//             <Navigation />
//             <div className="container">
//                 {showRoute(routes)}
//             </div>
//         </div>
//     </Router>
//     );
//   }
  
//   export default App;