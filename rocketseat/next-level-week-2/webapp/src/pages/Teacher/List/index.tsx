import React from 'react';
import Header from '../../../components/Header';
import TeacherItem from '../../../components/Teacher/Item';
import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Header title='Estes sao os proffys disponiveis.'>
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id='subject' />
          </div>

          <div className="input-block">
            <label htmlFor="weekDay">Dia da semana</label>
            <input type="text" id='weekDay' />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id='time' />
          </div>
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div >
  );
}

export default TeacherList;