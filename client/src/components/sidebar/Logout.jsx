import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/Logout";
const Logout = () => {
  const {loading,logout}= useLogout();
  return (
    <div className="mt-auto">
    {!loading ? ( <CiLogout className="w-6 h-6 text-white cursor-pointer" onClick={logout}/>) :
    (<span className="loading loading-spinner"></span>)}
    </div>
  )
}

export default Logout
// import { CiLogout } from "react-icons/ci";
// const Logout = () => {
//   return (
//     <div className="mt-auto">
//      <CiLogout className="w-6 h-6 text-white cursor-pointer"/>
//     </div>
//   )
// }

// export default Logout
