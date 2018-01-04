import React, { Component } from 'react';
import { StyledTabs, StyledTab, StyledTabActive, StyledTabActiveSecondary, StyledTabsContainer } from 'styledComponents/tabs';

export class Tabs extends Component {

  state = {
    activeTab: this.props.activeTab || 0
  };

  handleTabChange = (activeTab) => {
    return (() => this.setState({activeTab}));
  };

  componentWillReceiveProps = ({ activeTab=0 }) => {
    if (activeTab !== this.state.activeTab) {
      this.setState({ activeTab });
    }
  };

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
      <StyledTabsContainer>
        {/* <StyledTabs className={`tabs ${isSecondary ? 'tabs-secondary' : ''}`}> */}
        <StyledTabs>
          { tabs }
        </StyledTabs>
        {this.props.tabs[activeTab].content}
      </StyledTabsContainer>
    );
  }
}
