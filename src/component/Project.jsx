/* eslint-disable */
import React, { useState } from 'react';
import ProjectModal from './Modal/ProjectModal';

function Project() {
    let [modal, setModal] = useState(false);
    let cnt = 0;
    return (
        <div className='Project'>
            <section className='project-wrap'>
                <span className='project-intro-wrap'>
                    <b>DevCoop는 어떤 서비스를 기획하고 개발하고 있나요?</b>
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