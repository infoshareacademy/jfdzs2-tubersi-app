import React, { PureComponent} from 'react';
import './search.css';



class Search extends PureComponent {
  render() {
    return (
      <div className="content-search container-fluid">
            <h1>Rozpocznij wyszukiwanie</h1>    
        
             
              <input placeholder="Wpisz czego szukasz?" className="input-search animated bounceInRight"/>
              <button className="btn btn-default btn-lg btn-search animated bounceInRight">Szukaj</button>

           
            
        </div>
        
    

    );
  }
}


export default Search;