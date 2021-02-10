import React from "react";
import "./App.css";
import { LoginForm } from "./features/user/Login";
import { RegisterForm } from "./features/user/Register";
import { Layout, Button, Avatar } from 'antd';
import { selectUser } from './features/user/userSlice';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const { Content, Footer, Header } = Layout;
function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
       <Router>
       <Layout className="layout">
         <Header/>
       <Content style={{ padding: '0 100px', minHeight: '85vh' }}>
            <div className="site-layout-content">
       <Switch>
                <Route exact path="/" 
                render={() => (
                  user ? <div> Hiii {user.username} </div>: <Redirect to="/login" />
                )} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/register" component={RegisterForm} />
              </Switch>
              </div>
              </Content>
              </Layout>
       </Router>
    </div>
  );
}

export default App;
