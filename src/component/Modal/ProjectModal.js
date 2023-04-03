import React from 'react';
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

export default ProjectModal;