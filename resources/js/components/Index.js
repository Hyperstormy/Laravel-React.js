import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './templates/Header.js';
import Axios from 'axios';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            fname:'',
            mname:'',
            lname:'',
            sex:'',
            house_number:'',
            people:[]
        }
    }
   
        componentDidMount(){
            this.getAll();
        }

        //getting all the person
        getAll(){
            Axios.get('http://127.0.0.1:8000/api').then((res) => {this.setState({people:res.data}) })
        }


        //getting one person
        getOne(peoples){
            this.setState({
                id:peoples.id,
                fname:peoples.fname,
                mname:peoples.mname,
                lname:peoples.lname,
                sex:peoples.sex,
                house_number:peoples.house_number,
            })
        }
        
        delete(id){
            Axios.delete(`http://127.0.0.1:8000/api/${id}`).then((res) => {this.getAll()})
        }

        submit(event,id){
            event.preventDefault();
            if(this.state.id == 0){
                Axios.post('http://127.0.0.1:8000/api',{
                    fname:this.state.fname,
                    mname:this.state.mname,
                    lname:this.state.lname,
                    sex:this.state.sex,
                    house_number:this.state.house_number
                }).then((res) => {this.getAll(); })
            }else{
                Axios.put(`http://127.0.0.1:8000/api/${id}`,{
                    fname:this.state.fname,
                    mname:this.state.mname,
                    lname:this.state.lname,
                    sex:this.state.sex,
                    house_number:this.state.house_number
                }).then((res) => {this.getAll(); })
            }
        }

        //to allow to put the value dahil sa onchange

        fnamechange(event)
        {
            this.setState({
                fname:event.target.value
            })
        }

        mnamechange(event)
        {
            this.setState({
                mname:event.target.value
            })
        }

        lnamechange(event)
        {
            this.setState({
                lname:event.target.value
            })
        }

        sexchange(event)
        {
            this.setState({
                sex:event.target.value
            })
        }

        house_numberchange(event)
        {
            this.setState({
                house_number:event.target.value
            })
        }


    render(){
        return (
            <div className="container">
                 <h3> People Data Using LARAVEL + REACT.JS </h3>
                <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                 
                        <input onChange={(e)=>this.fnamechange(e)} placeholder="First Name" value={this.state.fname}/>
                
             
                        <input onChange={(e)=>this.mnamechange(e)} placeholder="Middle Name" value={this.state.mname}/>
                
                      
                        <input onChange={(e)=>this.lnamechange(e)} placeholder="Last Name" value={this.state.lname}/>
                      
                      
                        <input onChange={(e)=>this.sexchange(e)} placeholder="Sex" value={this.state.sex}/>
                   
                     
                        <input onChange={(e)=>this.house_numberchange(e)}  placeholder="House Number" value={this.state.house_number}/>
                
               
                        <button type="submit" className="btn btn-primary">Save</button>
                   
                </form>

                            <table className="table">
                             
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Middle Name</th>
                                        <th>Last Name</th>
                                        <th>Sex</th>
                                        <th>House Number</th>
                                        <th>Remove</th>
                                        <th>Edit</th>
                                    </tr>
                                    </thead>
                                {this.state.people.map(peoples =>
                                    <tr key={peoples.id}>
                                        <td> {peoples.fname} </td>
                                        <td> {peoples.mname} </td>
                                        <td> {peoples.lname} </td>
                                        <td> {peoples.sex} </td>
                                        <td> {peoples.house_number} </td>
                                        <td>
                                            <button onClick={(e)=>this.delete(peoples.id)} className="btn btn-danger">
                                            delete
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={(e)=>this.getOne(peoples)} className="btn btn-primary">
                                            Edit
                                            </button>
                                        </td>
                                    </tr>
                                )}

                            
                            </table>              

                     
                </div>
        );
    }
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
