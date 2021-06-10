import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


class CountryState extends Component {
  constructor (props) {
    super(props);
    this.state = { country: props.country, region: props.state };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div>
            <CountryDropdown
              name="location_country"
              id="cntry"
              value={country}
              valueType="short"
              onChange={(val) => this.selectCountry(val)}
              priorityOptions={["US", "CA", "GB"]}
              disabled={this.props.disable}
              required={true} />
            <RegionDropdown
              name="location_state"
              id="state"
              countryValueType="short"
              country={country}
              value={region}
              valueType="short"
              onChange={(val) => this.selectRegion(val)}
              disabled={this.props.disable} />
      </div>
      
    );
  }
}

export default CountryState