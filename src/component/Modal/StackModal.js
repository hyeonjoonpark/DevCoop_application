import React from 'react';

function StackModal() {
    return (
        <div className='StackModal'>
            <div className='front-end'>
                <span><b>Front-End</b></span>
                <p>HTML, CSS, JS를 어느정도 할 줄 아는 개발자</p>
                <p>협업 능력이 좋은 개발자</p>
                <p>기본적인 CS지식이 있는 개발자</p>
                <p>React 사용해본 개발자 (우대)</p>
            </div>

            <div className='back-end'>
                <span><b>Back-End</b></span>
                <p>Node JS를 사용해본 개발자</p>
                <p>협업 능력이 좋은 개발자</p>
                <p>기본적인 CS지식이 있는 개발자</p>
                <p>DataBase 어느정도 할 줄 아는 개발자</p>
            </div>

            <div className='design'>
                <span><b>Design</b></span>
                <p>UI / UX 에 대해 잘 아는 디자이너</p>
                <p>피그마 사용 할 수 있는 디자이너</p>
                <p>자신의 의견을 개발자에게 주장할 줄 아는 디자이너</p>
            </div>
        </div>
    )
}

export default StackModal;