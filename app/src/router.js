import React from 'react'
import { hashHistory, Route, Router,IndexRoute } from 'react-router'
import Index from './pages/index'
import NewsList from './pages/list'
import NewsContent from './pages/list/content'
import AppComponent from './components/app'
import NotFound from './pages/NotFound'
import NewsDetail from './pages/list/detail/index'
import JumpForm from './pages/list/comment/index'
import FindPage from './components/header/topBar/findPage'
import RegPage from './components/header/topBar/regPage'
const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={Index}/>
      <Route path="news" components={NewsList} >
        <Route path=":param" components={NewsContent} />
        <Route path=":param/:id" components={NewsDetail} />
      </Route>
      <Route path="form" component={JumpForm} />
      <Route path="find" component={FindPage} />
      <Route path="reg" component={RegPage} />
    </Route>
  <Route path="*" components={NotFound} />
  </Router>
)

export default RouterApp