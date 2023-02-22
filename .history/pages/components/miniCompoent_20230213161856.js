import React from "react";

export default function MiniCompoent(props) {
  return (
    <>
      {props.types == "line" && (
        <div className="flex flex-row">
          <p className="text-[25px] font-semibold ml-[10px] my-auto align-text-bottom">
            {props.headerLine}
          </p>
          <p className="text-[35px] m-auto font-bold text-[white] ">
            {props.contents}
          </p>
        </div>
      )}
      {props.types === "footer" && (
        <footer className="bg-gray-800 mt-[50px] text-white py-4">
          <div className="container mx-auto">
            <p className="text-center text-sm">&copy; 2023 Nguyen Pham Do</p>
            <div className="flex justify-center">
              <a href="#" className="text-white mx-2">
                Privacy Policy
              </a>
              <a href="#" className="text-white mx-2">
                Terms of Use
              </a>
              <a href="#" className="text-white mx-2">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      )}
      {props.types === "comments" && <></>}
    </>
  );
}
