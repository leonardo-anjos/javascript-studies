import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/Teacher/List';
import TeacherForm from './pages/Teacher/Form';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;