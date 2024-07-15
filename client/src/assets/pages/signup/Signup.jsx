import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Username" className="w-full input input-bordered h-10"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" className="w-full input input-bordered h-10"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"/>
          </div>
            <GenderCheckbox />
          <a className="text-sm hover:text-blue-600 mt-4 inline-block">Already have an Account?</a>
          <div className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3x1 font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-500"> Chat App</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Username" className="w-full input input-bordered h-10"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Password" className="w-full input input-bordered h-10"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"/>
//           </div>
//             <GenderCheckbox />
//           <a className="text-sm hover:text-blue-600 mt-4 inline-block">Already have an Account?</a>
//           <div className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
