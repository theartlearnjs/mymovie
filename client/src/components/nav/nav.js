import React from 'react'
import TopNav from './topnav'
import MidddleNav from './middlenav'
import BottomNav from './bottomnav'
import './topnav.less'
import './middlenav.less'
import './bottomnav.less'
import '../../assets/font.less'

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
     
    render(){
        return(
            <div className='nav'>
                <TopNav />
                <MidddleNav />
                <BottomNav />
                {/*<span className="icon-search"></span>*/}
            </div>
        )
    }
}

export default Nav