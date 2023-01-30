import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
// @ts-ignore
import ListMember from './pages/Member/ListMember/ListMember.tsx';
// @ts-ignore
import CreateMember from './pages/Member/CreateMember/CreateMember.tsx';
const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<div>Home</div>} ></Route>
                <Route path='/member' element={<div>Member</div>} ></Route>
                <Route path='/voucher-content' element={<div>Voucher Content</div>} ></Route>
                <Route path='/Contact' element={<div>Contact</div>} ></Route>
                <Route path='/member/listMember' element={<ListMember />}></Route>
                <Route path='/member/createMember' element={<CreateMember />}></Route>
            </Routes>
        </div>
    )
}

export default Router