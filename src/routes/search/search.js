import React, { PureComponent} from 'react';
import './search.css';



class Search extends PureComponent {
  render() {
    return (
      <div className="content container-fluid animated bounceIn">
      <div className="row">
        <div className="col-md-push-2 col-md-8">

          <h1>Rozpocznij wyszukiwanie</h1>
            <input placeholder="Wpisz czego szukasz?"/>
            <button type="button" className="btn btn-default btn-lg">
            <i className="fab fa-youtube"></i>Szukaj
            </button> 
        </div>
      </div>
    </div>


     
    );
  }
}


export default Search;