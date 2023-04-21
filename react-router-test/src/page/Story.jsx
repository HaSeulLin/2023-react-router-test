import React, { useContext, useEffect } from 'react'

import DataContext from '../context/DataContext'
import { useNavigate, useParams } from 'react-router';


export default function Story() {

    const {id} = useParams();
    const navigate = useNavigate('');

    const {state, action} = useContext(DataContext);
    const {storylist} = state;

    const boardData = storylist.find((d)=>(d.id==id));

    // useEffect로 boardData 오류 시 storylist로 이동
    // [] >> 컴포넌트 생성 시에 실행
    useEffect(()=>{
        if (boardData == undefined) {
            navigate('/storylist');
        }
    }, [])

  return (
    <div className='story'>
        <div>
            {   // board 데이터가 있을 때만 출력 (useEffect 사용)
                // data 없다면 boardlist로 자동 이동
                boardData && (
                    <div>
                        <h3>{boardData.name}-Story</h3>
                        <div>
                            <img src={boardData.picture} alt="" width={500}/>
                        </div>
                        <p>{boardData.detail}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}
