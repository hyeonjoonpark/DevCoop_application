import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div className='Main'>
                <span className='main-section'>
                    <section className='main-wrap'>
                        <div className='intro-wrap'>
                            <span className='intro'>안녕하세요 DevCoop입니다</span>
                        </div>
                        <div className='login-wrap'>
                            <button type='button' className='login-btn'>
                                <Router>
                                    <Link to='https://auth.bssm.kro.kr/oauth?clientId=dd2f4478&redirectURI=http://localhost:3000/oauth'>
                                        BSM계정으로 시작하기
                                    </Link>
                                </Router>
                            </button>
                        </div>
                    </section>
                </span>
            </div>
        );
    }
}

export default Main;