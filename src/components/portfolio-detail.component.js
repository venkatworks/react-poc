import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import portfolios from '../constants/app.contants';
import './portfolio.css';

class PortFolioDetailComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            list:[
                {
                   "item": "Item1"
                },
                {
                    "item": "Item2",
                    "subItem":['subItem1','subItem2','subItem3','subItem4','subItem5']
                },
                {
                    "item": "Item3",
                    "subItem":['subItem1','subItem2','subItem3']
                },
                {
                    "item": "Item4"
                },
                {
                    "item": "Item5",
                    "subItem":['subItem1','subItem2','subItem3','subItem4','subItem5']
                },
            ],
            items:[
                {
                    "item1":[{'id':'10','name':'xxxxx',value:10},
                             {'id':'11','name':'xxxxx',value:20},
                             {'id':'12','name':'xxxxx',value:70}]
                },
                {
                    "item2":[{'id':'20','name':'xxxxx',value:11},
                             {'id':'21','name':'xxxxx',value:19},
                             {'id':'22','name':'xxxxx',value:70}]
                },
                {
                    "item3":[{'id':'30','name':'xxxxx',value:21},
                             {'id':'31','name':'xxxxx',value:9},
                             {'id':'32','name':'xxxxx',value:70}]
                }
            ],
            // this has to be auto mated ?
            section11:'block',
            section22:'block',
            section33:'block',
            section11BtnLabel:'close',
            section22BtnLabel:'close',
            section33BtnLabel:'close',
        }
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
        
        let itemsList = {};

        Object.values(this.state.items).forEach((item)=>{
            Object.keys(item).forEach((value)=>{
                itemsList[value] = { data:[] };
                itemsList[value]['data'].push(item[value])
            });
        });

        let item1List = itemsList['item1']
                        .data.map((item1Data)=>{
                            return item1Data.map((d)=>{
                                return( 
                                    <div style={{display:'block'}} key={d.id}>
                                        <div style={{float:'left'}}>{d.id}</div>
                                        <div style={{float:'left'}}>{d.name}</div>
                                        <div style={{float:'left'}}>
                                           <input type="button" 
                                                value="-" 
                                                onClick={(event)=>this.decrement(event,'item1')}/>
                                                &nbsp;
                                            <input type="text" value={d.value} />
                                                &nbsp;
                                            <input type="button" 
                                                value="+" 
                                                onClick={(event)=>this.increment(event,'item1')}/>
                                        </div>
                                        <div style={{clear:'both'}}></div>
                                     </div>
                                    )
                                })
                        });
       
        let item2List = itemsList['item2']
                        .data.map((item1Data)=>{
                            return item1Data.map((d)=>{
                                return (
                                    <div style={{display:'block'}} key={d.id}>
                                        <div style={{float:'left'}}>{d.id}</div>
                                        <div style={{float:'left'}}>{d.name}</div>
                                        <div style={{float:'left'}}>
                                            <input type="button" 
                                                value="-" 
                                                onClick={(event)=>this.decrement(event,'item2')}/>
                                            &nbsp;
                                            <input type="text" value={d.value} />
                                            &nbsp;
                                            <input type="button" 
                                                value="+" 
                                                onClick={(event)=>this.increment(event,'item2')}/>
                                        </div>
                                        <div style={{clear:'both'}}></div>
                                    </div>
                                )
                            })
                        })
        
        let item3List = itemsList['item3']
                            .data.map((item1Data)=>{
                                return item1Data.map((d)=>{
                                    return (
                                        <div style={{display:'block'}} key={d.id}>
                                            <div style={{float:'left'}}>{d.id}</div>
                                            <div style={{float:'left'}}>{d.name}</div>
                                            <div style={{float:'left'}}>
                                                <input type="button" 
                                                value="-" 
                                                onClick={(event)=>this.decrement(event,'item3')}/>
                                                &nbsp;
                                                <input type="text" value={d.value} />
                                                &nbsp;
                                                <input type="button" 
                                                value="+" 
                                                onClick={(event)=>this.increment(event,'item3')}/>
                                            </div>
                                            <div style={{clear:'both'}}></div>
                                        </div>
                                    )
                                })
                            })
        
        return(
            <React.Fragment>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div className="portfolio-header-container">
                    <div className="portfolio-header">Portfolio Constituents</div>
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
                    <div key={'item1'} style={{padding:'5px',margin:'5px'}}>
                        <div>
                            <input type="button" 
                                value={this.state.section11BtnLabel} 
                                onClick={(event)=>this.closeContainer(event,'item1')}/>
                        </div>
                        <div style={{display:this.state.section11}}>
                            {item1List}
                        </div>
                    </div> 
                    <div key={'item2'} style={{padding:'5px',margin:'5px'}}>
                        <div>
                            <input type="button" 
                                value={this.state.section22BtnLabel} 
                                onClick={(event)=>this.closeContainer(event,'item2')}/>
                        </div>
                        <div style={{display:this.state.section22}}>
                            {item2List}
                        </div>
                    </div>
                    <div key={'item3'} style={{padding:'5px',margin:'5px'}}>
                        <div>
                            <input type="button" 
                                value={this.state.section33BtnLabel} 
                                onClick={(event)=>this.closeContainer(event,'item3')}/>
                        </div>
                        <div style={{display:this.state.section33}}>
                            {item3List}
                        </div>
                    </div>               
                </div>
            </React.Fragment>
        )
    }

}

export default PortFolioDetailComponent;