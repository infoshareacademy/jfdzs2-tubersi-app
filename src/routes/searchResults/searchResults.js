import React, { PureComponent} from 'react';
import './searchResults.css';



class SearchResults extends PureComponent {
  render() {
    return (
      <div className="content container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1>Wynik wyszukiwania</h1>
            <p>lorem ibsum ble bl ble ble</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;