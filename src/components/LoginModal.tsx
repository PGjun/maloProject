import React from "react";

const LoginModal = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <div className="text-gray-500 pb-8">관리자 로그인</div>
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none w-full"
            type="text"
            placeholder="아이디"
          />
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none w-full"
            type="text"
            placeholder="비밀번호"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
