import React from "react";
import Card from "../Card";

const Header = () => {
  return (
    <>
      <div className="relative m-auto w-full max-w-screen-lg pb-24 pt-12">
        <h4 className="px-2">Ringkasan Data</h4>
        {/* Card */}
        <div className="flex flex-wrap py-4">
          <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
            <Card cardTitle={"Daerah"} cardProp={"Ngaliyan"} />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
            <Card cardTitle={"Jumlah Kasus"} cardProp={1000} />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
            <Card cardTitle={"Tingkat Kerentanan"} cardProp={89 + "%"} />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
            <Card cardTitle={"Rata-rata Pertahun"} cardProp={45} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
