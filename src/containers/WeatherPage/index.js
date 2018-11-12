import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';
import WeatherItem from '../../components/WeatherItem/WeatherItem';
import classnames from 'classnames';
import './index.scss';

class WeatherPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      activeTab: '1',
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const weatherData = this.props.WeatherPage;
    const items = [1,2,3];
    console.log(weatherData);
    return (
      <div className="weather-page">
        <div className="weather-page__body">
        <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              5 Day
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Today
            </NavLink>
          </NavItem>
        </Nav>
        </Container>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          {weatherData.map(item => (
             <WeatherItem item={item} />
          ))}
          </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Container>
            {items.map(item => (
             999
            ))}
            </Container>
          </TabPane>
        </TabContent>
        </div>
      </div>
    );
  }
}

WeatherPage.propTypes = {
  WeatherPage: PropTypes.object,
};

const mapStateToProps = state => {
  return ({
    WeatherPage: state.get('WeatherData'),
  })
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestWeather: () => dispatch()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherPage);
