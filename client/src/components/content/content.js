import React from 'react'
import CommonArticle from './article/article'

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
     
    render(){
        return(
            <div className='content'>
                <CommonArticle />
            </div>
        )
    }
}

export default Content