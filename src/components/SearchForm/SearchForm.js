import React,{Component} from "react";
import s from './SearchForm.module.css'

export default class SearchForm extends Component{
    state={
        query:''
    };

    handleQueryChange = event=>{
        this.setState({query:event.currentTarget.value.toLowerCase()});
    };
    handleSubmit = event=>{
        event.preventDefault();
        if(this.state.query.trim() === ''){
            return;
        }
        this.setState({query:''});
        this.props.onSubmit(this.state.query)
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>
      
          <input
            className={s.input}
            value={this.state.query}
            onChange={this.handleQueryChange}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
        )
    }
}