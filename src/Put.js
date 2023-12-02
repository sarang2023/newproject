import React from "react";

export default class Put extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={tdata:''}
    }
    componentDidMount(){
        fetch('http://localhost:3001/posts'+4,{
            method:'PUT',
            body:JSON.stringify({
                name:'klmn',
                email:'klmn@mail.com',
                address:'test addresss'
            }),
            headers:{"content-type":"application/json; charset=UTF-8"}
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({tdata:'update'})
        }).catch(console.log)
    }
    render(){
        return(<div>
            <h1>{this.state.tdata}</h1>
        </div>)
    }
}