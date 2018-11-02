
import React, {Component} from "react"

import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

export default class GifListContainer extends Component {


    constructor(){
        super();
        this.state = {
            firstThree: [],
        }
    }



    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://api.giphy.com/v1/gifs/search?q=${event.currentTarget.search.value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {this.setState({firstThree:gifs.data.slice(0,3)});})

    }



    render(){


        return (<div className="row">
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList firstThree={this.state.firstThree}/>
        </div>)
    }



}
