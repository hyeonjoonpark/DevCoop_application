import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {    
    render() {
        return (
            <div className='Main'>
                <section className='main-wrap'>
                    <div className='intro-wrap'>
                        <span className='intro'>안녕하세요 DevCoop입니다</span>
                    </div>
                    <div className='login-wrap'>
                        <button type='button' className='login-btn'>
                            <Link to='https://auth.bssm.kro.kr/oauth?clientId=dd2f4478&redirectURI=http://localhost:3000/oauth'>
                                <b>DevCoop 지원하기</b>
                            </Link>
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;