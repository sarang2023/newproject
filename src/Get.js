import React from "react";

export default class Get extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={tdata:[]}
    }
    componentDidMount(){
        fetch('   http://localhost:3005/posts')
        .then(res=>res.json())
        .then((data)=>
        {
            this.setState({tdata:data})
            console.log(this.state.tdata)
        })
        .catch(console.log)
    }
    render()
    {
        return(<div>
            <table border='1'>
            <tr><th>UserId</th><th>Name</th><th>Email</th><th>Address</th></tr>
            {this.state.tdata.map((person,i)=>
            <tr key={i}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.address}</td>
            </tr>
            )}




                
            </table>
        </div>)
    }
}