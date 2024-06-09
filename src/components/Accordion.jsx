import React from "react";
import { useSelector } from "react-redux";

const OrderTerms = () => {
  // const { state } = useLocation();
  // const dispatch = useDispatch()
  const { intervensi } = useSelector((state) => state.predictReducers);
  console.log(intervensi)
  return (
    <div className="min-[240px]:px-4 md:px-52 text-black">
      <div className="card card-large bg-[#F6F6F6] ">
        <div className="mt-4">
          <div className="flex-col space-y-5">
            <div className="card w-full bg-[white] border-2 text-black px-4 py-3">
              <div className="text-2xl font-medium mb-3">Kebijakan</div>
              {intervensi &&
                intervensi.map((item, no) => (
                  <div key={item.isi_intervensi} className="space-y-2 ">
                    <p>{no+1}.) {item.isi_intervensi}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderTerms;
