import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import portfolios from '../constants/app.contants';
import './portfolio.css';

class PortFolioDetailComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            consMapList:''
        }
    }

    componentDidMount(){
        const {match:{params}} = this.props;
        let portolioDetails = portfolios.filter((portfolio)=>{
            if(portfolio.id == params.portfolioId){
                return portfolio;
            }
        })[0];

        let constituents = portolioDetails.constituents;
        let constMap = []
        let consMapList = constituents.map((constitent)=>{            
            if(!constMap[constitent.instrument.type]){
                constMap[constitent.instrument.type] = [];                
                constMap[constitent.instrument.type].push(constitent.instrument);
            }else{
                constMap[constitent.instrument.type].push(constitent.instrument);
            }
            return constMap;
        })

        this.setState({
            consMapList : consMapList
        })
    }

    getBonds(typeArr){
        return typeArr.map((tObj)=>{
            return (
                <div>
                    <div className="portfolio-card-label">{tObj.id}</div>
                    <div className="portfolio-card-data">{tObj.name}</div>
                    <div style={{clear:'both'}}></div>
                </div>
            )
        })
    }

    render(){
        let constituents = this.state.consMapList ? 
            this.state.consMapList.map((constituent) => {                 
            let data = '';
            console.log(constituent['Equity']);
            console.log(constituent['Bond']);
            console.log(constituent['CASH']);

            data = constituent['Equity'].map((equities,index)=>{
                return  data = data + this.getBonds(equities);
                })
            data =  constituent['Bond'].map((bonds,index)=>{
                return data = data + this.getBonds(bonds);
                })
            data = constituent['CASH'].map((cashType,index)=>{
                return data  = data + this.getBonds(cashType);
                })
                return data;
        }):'';
        console.log("......",constituents);
        return(
            <React.Fragment>
                <div>
                   <Link to="/"> Home</Link>
                </div>
                <div>
                    {constituents}
                </div>
            </React.Fragment>
        )
    }

}

export default PortFolioDetailComponent;