import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import portfolios from '../constants/app.contants';
import './portfolio.css';


class PortFolioDetailComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            // this has to be auto mated ?
            section11:'block',
            section22:'block',
            section33:'block',
            section11BtnLabel:'close',
            section22BtnLabel:'close',
            section33BtnLabel:'close',
            constituents:'',
            equityList : [],
            bondList: [],
            cashList : []
        }
    }

    componentDidMount(){
        const {portfolioId} = this.props.match.params;
        let constituentsMap = {};
        let selectedPortfolio = portfolios.filter((portfolio)=>portfolio.id == portfolioId)[0];        
        
        for(let k=0 ; k < selectedPortfolio.constituents.length > 0 ; k++){
            console.log("constituents..:",selectedPortfolio.constituents[k]['instrument']);
            let type = selectedPortfolio.constituents[k]['instrument']['type'];
            let weight =  selectedPortfolio.constituents[k]['weight'];
            if(!constituentsMap[type]){
                constituentsMap[type] =[];
                constituentsMap[type].push(
                        {"weight":weight},
                        {"instrument":selectedPortfolio.constituents[k]['instrument']}
                );
            }else{
                constituentsMap[type].push(
                        {"weight":weight},
                        {"instrument":selectedPortfolio.constituents[k]['instrument']}
                );
            }
        }
        
        this.setState({
            constituents:constituentsMap
        })
    }

    

    closeContainer(event,index){
        switch(index){
            case 'item1':
                let value = this.state.section11 == 'none' ? 'block' :'none';
                let btnValue = this.state.section11BtnLabel == 'close' ? 'expand' :'close';
                this.setState({
                    section11:value,
                    section11BtnLabel: btnValue
                })
            break;
            case 'item2':
                let value1 = this.state.section22 == 'none' ? 'block' :'none';
                let btn2Value = this.state.section22BtnLabel == 'close' ? 'expand' :'close';
                this.setState({
                    section22:value1,
                    section22BtnLabel: btn2Value
                })
            break;
            case 'item3':
                let value2 = this.state.section33 == 'none' ? 'block' :'none';
                let btn3Value = this.state.section33BtnLabel == 'close' ? 'expand' :'close';
                this.setState({
                    section33:value2,
                    section33BtnLabel: btn3Value
                })
            break;
            default:
            break;
        }
    }

    decrement(event,index){
        this.state.items.filter((item)=>{
            return item.filter((fiteredItem)=>{
               
            });
        });
    }

    increment(event,index){
       
    }
    

    render(){
        
        

        let equityList = this.state.constituents['Equity'] ? this.state.constituents['Equity'].map((equity)=>{
            return <div className="equity-list-container">
                    <div className="constituent-id">1</div>
                    <div className="constituent-label">{equity.weight}</div>
                    <div className="constituent-value">
                        <input type="text" value={equity.weight} />
                    </div>
                    <div style={{clear:"both"}}></div>
            </div>
        }) :'';

        let bondList = this.state.constituents['Bond'] ? this.state.constituents['Bond'].map((bond)=>{
            return <div className="equity-list-container">
                    <div className="constituent-id">1</div>
                    <div className="constituent-label">{bond.weight}</div>
                    <div className="constituent-value">
                        <input type="text" value={bond.weight} />
                    </div>
                    <div style={{clear:"both"}}></div>
            </div>
        }) :'';

        let cashList = this.state.constituents['CASH'] ? this.state.constituents['CASH'].map((cash)=>{
            return <div className="equity-list-container">
                    <div className="constituent-id">1</div>
                    <div className="constituent-label">{cash.weight}</div>
                    <div className="constituent-value">
                        <input type="text" value={cash.weight} />
                    </div>
                    <div style={{clear:"both"}}></div>
            </div>
        }) :'';

        return(
            <React.Fragment>                
                <div className="portfolio-header-container">
                    <div className="portfolio-header"> 
                        <Link to="/">
                            <input type="button" name="Back" value="Back" className="prt-btn"/>
                        </Link> 
                        <span className="portfolio-label">
                            Portfolio Constituents
                        </span>
                    </div>
                    <div className="portfolio-btns-container">
                        <div className="portfolio-btns">
                            <input type="button" className="prt-btn" name="reset" value="Reset"/>
                        </div>
                        <div className="portfolio-btns">
                            <input type="button" className="prt-btn" name="Rebalance" value="Rebalance"/>
                        </div>
                        <div className="portfolio-btns">
                            <input type="button" className="prt-btn" name="Save And Continue" value="Save And Continue"/>
                        </div>
                        <div style={{clear:'both'}}>

                        </div>
                    </div>                    
                </div>
                <div className="main-container">                
                    <div className="inner-container">
                        <div className="content-header">
                            <div className="category-label">Category/Stock</div>
                            <div className="model-label">Model Weight</div>
                            <div className="weight-label">Weight</div>
                            <div style={{clear:'both'}}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div className="accord-header-container">                                
                                <div className="accord-header">Equity</div>
                                <div className="close-btn-container">
                                   {/* <input className="close-btn" type="button" name="Close" value="Close" onClick={this.closeAccord} /> */}
                                </div>
                                <div style={{clear:'both'}}></div>
                            </div>                            
                        </div>
                        <div className="eq-inner-container">
                            {equityList}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="accord-header-container">                                
                                <div className="accord-header">Bond</div>
                                <div className="close-btn-container">
                                   {/* <input className="close-btn" type="button" name="Close" value="Close" onClick={this.closeAccord} /> */}
                                </div>
                                <div style={{clear:'both'}}></div>
                            </div>                            
                        </div>
                        <div className="eq-inner-container">
                            {bondList}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="accord-header-container">                                
                                <div className="accord-header">Cash</div>
                                <div className="close-btn-container">
                                   {/* <input className="close-btn" type="button" name="Close" value="Close" onClick={this.closeAccord} /> */}
                                </div>
                                <div style={{clear:'both'}}></div>
                            </div>                            
                        </div>
                        <div className="eq-inner-container">
                            {cashList}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default PortFolioDetailComponent;