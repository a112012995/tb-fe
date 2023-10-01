import React, { useState } from "react";

const OrderTerms = () => {
  const [activeCollapse, setActiveCollapse] = useState(null);
  const handleCollapseClick = (index) => {
    setActiveCollapse(index === activeCollapse ? null : index);
  };
  return (
    <div className="min-[240px]:px-4 md:px-52 text-black">
      <div
        className="card card-large bg-[#F6F6F6] "
      >
        <div className="text-2xl font-medium">Kebijakan</div>
        <div className="mt-8">
          <div className="bg-white join join-vertical w-full shadow-xl">
            <div
              className={`collapse collapse-arrow join-item ${
                activeCollapse === 1 ? "border" : ""
              }`}
            >
              <input
                type="radio"
                name="my-accordion-4"
                checked={activeCollapse === 1}
                onChange={() => handleCollapseClick(1)}
              />
              <div className="collapse-title text-xl font-medium ">
                Kampanye Stop TB
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae dolorem nostrum, fugiat facilis quo soluta id
                  libero aliquid? Quidem culpa aspernatur tempora dolorem fuga
                  nobis ducimus odio at in minima.
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-arrow join-item ${
                activeCollapse === 2 ? "border" : ""
              }`}
            >
              <input
                type="radio"
                name="my-accordion-4"
                checked={activeCollapse === 2}
                onChange={() => handleCollapseClick(2)}
              />
              <div className="collapse-title text-xl font-medium">
                Edukasi Tentang TB
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  culpa, iure vitae cum iste provident illum porro nulla
                  consequatur expedita odio! Rem ipsum magnam velit
                  reprehenderit autem pariatur voluptate amet!
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-arrow join-item ${
                activeCollapse === 3 ? "border" : ""
              }`}
            >
              <input
                type="radio"
                name="my-accordion-4"
                checked={activeCollapse === 3}
                onChange={() => handleCollapseClick(3)}
              />
              <div className="collapse-title text-xl font-medium">
                Terapi Wajib
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maiores in minima tempora rem earum veniam aliquid,
                  ad soluta, placeat optio. Obcaecati esse at nulla quia
                  architecto aspernatur, voluptatibus ab.
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-arrow join-item ${
                activeCollapse === 4 ? "border" : ""
              }`}
            >
              <input
                type="radio"
                name="my-accordion-4"
                checked={activeCollapse === 4}
                onChange={() => handleCollapseClick(4)}
              />
              <div className="collapse-title text-xl font-medium">
                Pemeriksaan TB Resistensi Obat
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maiores in minima tempora rem earum veniam aliquid,
                  ad soluta, placeat optio. Obcaecati esse at nulla quia
                  architecto aspernatur, voluptatibus ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderTerms;
