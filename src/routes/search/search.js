import React, { PureComponent} from 'react';
import './search.css';



class Search extends PureComponent {
  render() {
    return (
      <div className="content-search container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-push-2 col-md-8" >
          <h1>Rozpocznij wyszukiwanie</h1>
          <form>
            <input placeholder="Wpisz czego szukasz?" className="input-search animated bounceInRight"/>
            <button className="btn btn-default btn-lg btn-search animated bounceInRight">Szukaj</button>
          </form> 
        
         </div>
      </div>
      </div>
    );
  }
}


export default Search;