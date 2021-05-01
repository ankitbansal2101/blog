import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//pages
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
import Bloglist from './pages/Bloglist';
import BlogDetail from './pages/BlogDetail';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/admin/home' exact component={AdminHome}/>
          <Route path='/admin/add-blog' exact component={AddBlog}/>
          <Route path='/admin/edit/:id' exact component={EditBlog}/>
          <Route path='/user/home' exact component={Bloglist}/>
          <Route path='/user/view/:id' exact component={BlogDetail}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
