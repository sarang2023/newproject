import axios from "axios";
import React from "react";

export default class Axiosget extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={tdata:[]}
    }
    componentDidMount(){
        axios.get('http://localhost:3001/posts').then((res)=>
        {
            this.setState({tdata:res.data})
            console.log(this.state.tdata)
        })
    }
    render()
    {
        return(<div>
            <table border='1'>
                <tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>ADDRESS</th></tr>
                {this.state.tdata.map((person,i)=><tr key={i}>
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