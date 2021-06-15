import React, { Component } from 'react'
import axios from 'axios'


export default class SearchBox extends Component {
    
    constructor(props){
    super(props)
         this.handleFormSubmit = this.handleFormSubmit.bind(this)
        }
    
        handleFormSubmit = (event) => {
            event.preventDefault()
           this.props.onSearch(event.target.elements['search'].value)
        }

        
  

    componentDidMount(){
      this.search(null)
    }
 
  handleSearchBox = (value)=>{
 this.search(value)
 
}


search = (value) =>{

  let api = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fb2c0af2563a47f2a54a0fb0939a8d0e&pageSize=100"

  if (value != null){
    api = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bce2e440bdcc43868f5062ee06078743&pageSize=100" + value
  }
    axios.get(api)
    .then((res)=> {
      const state = {...this.state}
      state.articles = res.data.articles
      state.isLoading = false
      state.searching = value != null
      this.setState(state)
      })
    
    .catch(err=> {
      this.setState({
        isLoading: false,
        articles: [],
        errorMessage: err.response.data.message
      })
    }
    )}

        render() {
            return (
              <form className= 'd-flex'onSubmit={this.handleFormSubmit}>
                  <div className='flex-grow-1'>
                  {this.props.searching
                  ? <input type ="text" className ='form-control' placeholder = 'Search News...' name='search'defaultValue={this.props.value}/>
                  : <input type ="text" className ='form-control' placeholder = 'Search News...' name='search'defaultValue />}
    
                  </div>
                  <div style={{width:'120px'}} className='d-grid gap-2 ms-3'>
                      {
                          this.props.searching
                          ? <button className= 'btn btn-primary d-block' type='submit'>
                          clear
                  </button>
                  : <button className = 'btn btn-primary'type='submit'>
                    Buscar
                      </button>
                } 
                      </div>
              </form>
            )
        }
    }