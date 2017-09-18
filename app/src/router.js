import React from 'react'
import { hashHistory, Route, Router,IndexRoute } from 'react-router'
import Index from './pages/index'
import NewsList from './pages/list'
import NewsContent from './pages/list/content'
import AppComponent from './components/app'
import NotFound from './pages/NotFound'
import NewsDetail from './pages/list/detail/index'
import JumpForm from './pages/list/comment/index'
const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={Index}/>
      <Route path="news" components={NewsList} >
        <Route path=":param" components={NewsContent} />
        <Route path=":param/:id" components={NewsDetail} />
        <Route path="article/:id" components={NewsDetail} />
      </Route>
      <Route path="form" component={JumpForm} />
    </Route>
  <Route path="*" components={NotFound} />
  </Router>
)

export default RouterApp