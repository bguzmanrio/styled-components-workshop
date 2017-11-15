import React, { Component } from 'react';
import { StyledTabs, StyledTab, StyledTabActive, StyledTabActiveSecondary } from 'styledComponents/tabs';

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
    const tabs = this.props.tabs.map((tab, index) => (
      <StyledTab
        key={index}
        active={index === activeTab}
        isSecondary={isSecondary}
        onClick={this.handleTabChange(index)}>{tab.title}</StyledTab>
    ));

    return (
      <div className='tabs-container'>
        {/* <StyledTabs className={`tabs ${isSecondary ? 'tabs-secondary' : ''}`}> */}
        <StyledTabs>
          { tabs }
        </StyledTabs>
        <div className='tabs-content'>
          {this.props.tabs[activeTab].content}
        </div>
      </div>
    );
  }
}
