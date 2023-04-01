/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectModal() {
    return (
        <div className='ProjectModal'>
            <div className='AriPay'>
                <span><b>AriPay</b></span>
                <p>종이상품권을 학생증으로!</p>
                <p>이제 더 이상 가격을 맞춰서 살 필요 없습니다</p>
                <Link to='#'><p><b>사이트 바로가기 (클릭)</b></p></Link>
            </div>
        </div>
    )
}

function Project() {
    let [modal, setModal] = useState(false);
    let cnt = 0;
    return (
        <div className='Project'>
            <section className='project-wrap'>
                <span className='project-intro-wrap'>
                    <b>팀 DevCoop는 어떤 서비스를 기획하고 개발하고 있나요?</b>
                </span>
                <div className='show-project-btn'><button type='button'
                    onClick={() => {
                        cnt++;
                        { cnt % 2 === 0 ? setModal(false) : setModal(true) }
                    }}
                ><b>프로젝트 보기</b></button></div>
                {modal ? <ProjectModal />: null}
            </section>
        </div>
    );
}

export default Project;