import React from './node_modules/react';
import { Pagination } from './node_modules/antd';

const PaginationAnt = () => {
    return (
        <Pagination defaultCurrent={1} total={50} style={{textAlign:'center'}}/>
    )
}

export default  PaginationAnt;