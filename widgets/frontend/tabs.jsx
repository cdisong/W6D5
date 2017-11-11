import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabsIdx: 0};
  }

  render()
  {
    return (
      <div className="tabs">
        <ul>
            {this.props.tabs.map((tab, idx) => (
              <li key= {tab.title}>
                <h1 
                  className = {idx === parseInt(this.state.tabsIdx) ? "clicked-tab" : ""}
                  idx={idx} 
                  onClick={this.addClickHandler()}>{ tab["title"]}
                </h1>
              </li>
            ))}
        </ul> 
        <article>
          {this.props.tabs[this.state.tabsIdx]["content"]}
        </article>
      </div>
    );
  }
  addClickHandler() {
    return (event) => {
      const tabsIdx = event.target.getAttribute('idx');
      this.setState({ tabsIdx });
    }
  }
}

export default Tabs;