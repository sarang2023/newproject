import React from "react";

export default class Post extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={tdata:''}
    }
    componentDidMount(){
        fetch(' http://localhost:3001/posts',{
            method:'POST',
            body:JSON.stringify({
                id:'5',
                name:'abc',
                email:'1023',
                address:'Test Address'
            }),
            headers:{"content-type":"application/json; charset=UTF-8"}
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({tdata:data})
        }).catch(console.log)
    }
    render(){
        return(<>
        <h1>{this.state.tdata.id}</h1>
        </>)
    }
}