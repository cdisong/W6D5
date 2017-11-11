import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const tabs = [
  {title: "tab1" , content: "This is tab1"},
  {title: "tab2" , content: "This is tab2"},
  {title: "tab3 " , content: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit eius nesciunt accusantium aliquam sed ex ullam inventore, iste, ea sit qui enim veritatis assumenda obcaecati ipsum temporibus libero debitis."},
]

class Root extends React.Component {
  render () {
    return (
      <div>
        <h1>REACT WORKS</h1>
        <Clock />
        <Tabs tabs = {tabs}/>
        <Weather />
      </div>
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById('root');
  ReactDom.render(<Root />, main);
});

