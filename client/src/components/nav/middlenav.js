import React from 'react'

class MiddleNav extends React.Component{
    render(){
        return(
            <div className='nav-wrap'>
                <div className="nav-primary">
                    <div className="nav-logo">
                        <a>豆瓣电影</a>
                    </div>
                    <div className='nav-search'>
                        <form>
                            <input type="text" placeholder='电影、影人、影院、电视剧' maxLength='60' id='inp-query' />
                            <div id='inp_btn'>
                                <i className="icon-search search"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default MiddleNav