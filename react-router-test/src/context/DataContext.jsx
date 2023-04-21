import React, { useState } from "react";

const DataContext = React.createContext('');

const DataProvider = ({children}) => {

    const [storylist, setStorylist] = useState(
        [
            {
                id : 1,
                name : "apple",
                detail : "사과입니다",
                picture : 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg'
    
            },
            {
                id : 2,
                name :"orange",
                detail : "오렌지입니다" ,
                picture : "https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_960_720.jpg"
    
            },
            {
                id : 3,
                name : "peach",
                detail : "복숭아입니다" ,
                picture : "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_960_720.jpg"
            }
        ]
    );

    // 보내줄 value 데이터
    const value = {
        state : {storylist},
        action : {setStorylist}
    };

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
};


// export
export {DataProvider};
export default DataContext;