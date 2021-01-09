import React from "react"

// Binding Exercise
class Apps extends React.Component{
    constructor(){
        super()
        this.state={
            count:3
        }
        this.Count=this.Count.bind(this)
    }

    Count(){
        this.setState(mult=>{
            return{
                count: mult.count*3
            }
        })
    }

    render(){
        return(
        
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.Count}>Blicvkme</button>
            </div>
        )
    }
}
export default Apps