import React from 'react';
//import Component from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyNew from './components/New';
import Searchtext from './components/Search';
import * as serviceWorker from './serviceWorker';
//import searchtext from './components/Search';

//const Square=()=>{
class Square extends React.Component{
    state = {
                data:[
                        {
                          title:'java',
                          description:'this is my first comment in java'
                        },
                        {
                            title:'php',
                            description:'comment post about php'
                        },
                        {
                            title:'c#',
                            description:'comment post about c#'
                        }
                     ], 
                     filtred:[]
             }

             onInputChange=(event)=>{
                 let recherche=event.target.value;
                 const filtred = this.state.data.filter((item)=>{
                       return item.title.indexOf(recherche) >-1;
                 });
                   this.setState({
                       filtred
                   })
                 
             }
   
    render(){
        
    return( <div style={
        {
            backgroundColor:'#61dafb',
            
            marginTop:'15px',
            marginLeft:'10px',
            marginRight:'10px'
        }
    }>
             <div className="container"> 
             <p>Hello My name is Yassine </p> 
             <Searchtext recherche={this.onInputChange}/><br />
             <MyNew data={this.state.filtred.length > 0 ? this.state.filtred : this.state.data}/> <br />
             </div>

           </div>

    )
}
}



ReactDOM.render(<App /> , document.getElementById('root'));
ReactDOM.render(<Square /> , document.getElementById('mytest'));
//ReactDOM.render(<MyNew /> , document.getElementById('myApp'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
