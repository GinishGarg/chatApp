const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 item-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=DarkSisterWeilder"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-blod text-gray-200 ">Name</p>
            <span className="text-xl">🐧</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 item-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://avatar.iran.liara.run/public/boy?username=DarkSisterWeilder"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-blod text-gray-200 ">Name</p>
//             <span className="text-xl">🐧</span>
//           </div>
//         </div>
//       </div>

//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// };

// export default Conversation;
