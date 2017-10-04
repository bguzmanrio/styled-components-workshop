import React, { Component } from 'react';

export class Tabs extends Component {

  constructor({activeTab=0}) {
    super();
    this.state = { activeTab };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange (activeTab) {
    return (() => this.setState({activeTab}));
  }

  render() {
    const {activeTab} = this.state;
    const {isSecondary} = this.props;
    const tabs = this.props.tabs.map((tab, index) => {
        const activeClass = index === activeTab ? 'active' : '';
        return (
          <li key={index} className={`tab ${activeClass}`} onClick={this.handleTabChange(index)} >{tab.title}</li>
        )
      });

    return (
      <div className='tabs-container'>
        <ul className={`tabs ${isSecondary ? 'tabs-secondary' : ''}`}>
          { tabs }
        </ul>
        <div className='tabs-content'>
          {this.props.tabs[activeTab].content}
        </div>
      </div>
    );
  }
}
