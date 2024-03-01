import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<span className="text-blue-500 font-bold text-4xl">HOME PAGE</span>}/>
        <Route path="/user-profile" element={<span className="text-blue-500 font-bold text-4xl">USER PROFILE PAGE</span>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRoutes