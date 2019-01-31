import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import portfolios from '../constants/app.contants';

import './portfolio.css';

class PortFolioComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            portfolios:portfolios       
        }
    }

    render(){
        let portfolioContent = this.state.portfolios.map((portFolio)=>{
            return(<div className="portfolio-card" key={portFolio.id}>
                        <Link to={`${portFolio.id}`} className="card-link">
                            <div className="portfolio-card-label">Id</div>
                            <div className="portfolio-card-data">{portFolio.id}</div>
                            <div style={{clear:'both'}}></div>
                            <div className="portfolio-card-label">Name</div>
                            <div className="portfolio-card-data">{portFolio.name}</div>
                            <div style={{clear:'both'}}></div>
                            <div className="portfolio-card-label">Volatility</div>
                            <div className="portfolio-card-data">{portFolio.volatility}</div>
                            <div style={{clear:'both'}}></div>
                            <div className="portfolio-card-label">Mean Return</div>
                            <div className="portfolio-card-data">{portFolio.mean_return}</div>
                            <div style={{clear:'both'}}></div>
                            <div className="portfolio-card-label">Currency</div>
                            <div className="portfolio-card-data">{portFolio.currency}</div>
                            <div style={{clear:'both'}}></div>
                        </Link>
                </div>)
        })
        return(
            <div className="main-container">
               {portfolioContent}
               <div style={{clear:'both'}}></div>
            </div>
        )
    }

}



export default PortFolioComponent;