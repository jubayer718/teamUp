import React from "react";
import amazon from "../../../app/assets/image/Amazon.webp"
import accenture from "../../../app/assets/image/accenture.webp"
import JJ from "../../../app/assets/image/JJ.webp"
import dell from "../../../app/assets/image/dell.webp"
import merck from "../../../app/assets/image/merck.webp"
import Image from "next/image";

const ClientSection = () => {
  return (
    <div className="container mx-auto py-12 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div>
          <h3 className="md:text-5xl text-2xl font-semibold text-center">
            85% of Fortune 100 companies choose TeamUp¹
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-center">
          <div>
            <Image src={amazon} alt="amazon" width={150} height={150}></Image>
          </div>
          <div>
          <Image src={accenture} alt="accenture" width={150} height={150}></Image>
          </div>
          <div>
          <Image src={JJ} alt="JJ" width={150} height={150}></Image>
          </div>
          <div>
          <Image src={dell} alt="dell" width={150} height={150}></Image>
          </div>
          <div>
          <Image src={merck} alt="merck" width={150} height={150}></Image>
          </div>
        </div>
      </div>
     
    </div>
   
  );
};

export default ClientSection;
