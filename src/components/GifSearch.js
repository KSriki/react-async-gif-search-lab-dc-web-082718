
import React, {Component} from "react"


export default class GifSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: ""
        }
    }


    handleChange = (event) => {

        this.setState({
            search: event.currentTarget.value
        })

    }

    render(){
        return (<div className="row">
        <form method="POST" onSubmit={this.props.handleSubmit}>

            <input type="text" name="search" value = {this.state.search} onChange={this.handleChange} />
            <input type="submit" />
        </form>

            </div>);
    }
}
