import react from 'react';
import './App.css';
import Form from './js/Form';

class App extends react.Component {
  
  submit(value){
    alert("submited")
    console.log(value);
  }
  render(){
    return (
       <div className="form">
      
         <h3>Students Form</h3>
         <Form onSubmit={this.submit}/>
         
       </div>
       
      )
  }
  
}

export default App;
