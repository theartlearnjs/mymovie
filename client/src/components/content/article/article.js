import React from 'react'

class CommonArticle extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <h2>正在热映<span>全部正在热映»</span><span>即将上映»</span></h2>
        )
    }
}

export default CommonArticle