/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StackModal from './Modal/StackModal';

function Main() {
    const [modal, setModal] = useState(false);
    let cnt=0;
    return (
        <div className='Main'>
            <section className='main-wrap'>
                <div className='intro-wrap'>
                    <span className='intro'>안녕하세요 DevCoop 입니다</span>
                </div>
                <div className='stack-wrap'>
                    DevCoop은 어떤 인재를 원할까요?<button type='button' className='stack-btn' onClick={
                        () => {
                            cnt++;
                            { cnt % 2 === 0 ? setModal(false) : setModal(true) }
                        }
                    }>▼</button>
                </div>

                <div>
                    {modal ? <StackModal/>: null}
                </div>

                <div className='login-wrap'>
                    <button type='button' className='login-btn'>
                        <Link to={'https://auth.bssm.kro.kr/oauth?clientId=dd2f4478&redirectURI=http://localhost:3000/oauth'}>
                            <b>지원하기</b>
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Main;