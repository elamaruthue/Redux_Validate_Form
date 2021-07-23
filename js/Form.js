import { render } from '@testing-library/react';
import React from 'react';
import { Field,reduxForm} from 'redux-form';


const validate = values=>{
    const errors={}
    if(!values.sName){
            errors.sName="*Required"
    }
    else if(values.sName.length<3){
        errors.sName="Minimum 3 chars or more"
    }
    if(!values.fName){
        errors.fName="*Required"
}
else if(values.fName.length>10){
    errors.fName="Max 10 chars or less"
}
  
  
    if(!values.number || NaN){
        errors.number="*Required"
}
else if(values.number.length < 10 ){
    errors.number="Enter a validate number"
    
}
   
if(!values.date){
    errors.date="*Requried"
}
if(!values.address){
    errors.address="*Requried"
}
if(!values.city){
    errors.city="*Requried"
}
if(!values.Code){
    errors.Code="*Requried"
}
else if(values.Code.length==6||NaN){
    errors.Code="validate post"
}


return errors;
}
const renderField = ({input,label,type,radio,placeholder,meta:{touched,error,warning}})=>(
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={radio} type={type}/>
            <p>{touched && ((error && <b className="val">{error}</b>)||(warning && <b>{warning}</b>))}
            </p>
        </div>
    </div>
)

    

let form = props=>{
    const {handleSubmit,pristine,submitting} = props;

    return(
        <form onSubmit = {handleSubmit}>
            
                <div>
                
                <Field name="sName" component={renderField} placeholder="Your Name" label="Name"/>
            </div>
            <div>
                <Field name="fName" component={renderField} placeholder="Father's Name" label="Father's Name"/>
            </div>
            <div>
                <Field type="email" name="email" component={renderField} placeholder="Your Name"label="Email"/>
            </div>
            <div>
                <Field type="radio" name="radio" component={renderField} label="Male"/>
                <Field type="radio" name="radio" component={renderField} label="Female"/>
            </div>
            <div>                
                <Field name="Gender" component={renderField} placeholder="Male/Female" label="Gender" />
          </div>
          <div>
                < Field  type ="date" name="date" component={renderField} label="D.O.B"/>
            </div>
            <div className="num">
                < Field  name ="number" component={renderField} placeholder="Phone Number"  label="Phone Number"/>
            </div>
            <div>
            <Field name="address" component={renderField} placeholder="Address"  label="Address"/>
            </div>
            <div>
            <Field name="city" component={renderField} placeholder="city"  label="City"/>
            </div>
            <div>
            <Field name="Code" component={renderField} placeholder="Eg.600000"  label="Postal Code"/>
            </div>
            <div className="submit">
                <button type="submit" disabled={pristine||submitting}>Submit</button>
            </div>
            
        </form>
    )
}

form = reduxForm({
    form: "contact",
    validate,
})(form)


export default form;