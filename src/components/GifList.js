
import React, {Component} from "react"


//presentational
export default class GifList extends Component {

    generateGifs = () => {
        // debugger;
        return this.props.firstThree.map(gif => {return (<li key={gif.id}><img src={gif.images.original.url} alt="gif" /></li>)})
    }

    render(){
        return (<div className="row"><ul>{this.generateGifs()}</ul></div>);
    }
}
