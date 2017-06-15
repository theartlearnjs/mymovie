import React from 'react'

class TopNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className='banner'>
                <div className='left_banner'>
                    <ui>
                        <li>豆瓣</li>
                        <li>读书</li>
                        <li>电影</li>
                        <li>音乐</li>
                        <li>同城</li>
                        <li>小组</li>
                        <li>阅读</li>
                        <li>FM</li>
                        <li>东西</li>
                        <li>市集</li>
                        <li>更多</li>
                    </ui>
                </div>
                <div className='right_banner'>
                    <ul>
                        <li>注册</li>
                        <li>登陆</li>
                        <li>下载豆瓣客户端</li>  
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopNav