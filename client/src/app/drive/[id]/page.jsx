"use client";

import RolesCard from "@/components/RolesCard";
import Data from "../../../../public/data";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const driveinfo = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const widthRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (widthRef.current) {
        setBoxWidth(widthRef.current.offsetWidth);
      }
    };
    updateWidth();
    const intervalId = setInterval(updateWidth, 500);
    return () => clearInterval(intervalId);
  }, []);

  console.log(boxWidth);

  const pathName = usePathname();
  const pathNo = pathName.slice("/drive/".length);
  const dataAll = Data.find((item) => item.id === Number(pathNo));

  if (!dataAll) {
    return notFound();
  }

  return (
    <SkeletonTheme baseColor="#7C7B7B" highlightColor="#686868" height={25}>
      <div className="flex items-center justify-center py-10 mb-10 h-auto bg-background-clr font-inter font-normal">
        <section
          className="flex flex-col p-5 sm:p-8 lg:p-16  w-11/12 sm:w-10/12 md:w-2/3 lg:w-3/5 border-white h-auto rounded-md bg-primary-card"
          ref={widthRef}
        >
          <h2 className="text-lg lg:text-2xl text-role-text font-semibold">
            {dataAll.placementNam || <Skeleton width={boxWidth / 1.92} />}
          </h2>
          <h2 className="text-2xl lg:text-4xl mb-1 font-semibold">
            {dataAll.companyNam || <Skeleton width={boxWidth / 1.5} />}
          </h2>
          <div className="text-md lg:text-xl py-2 leading-tight lg:leading-tight font-medium">
            <p>{dataAll.descriptio || <Skeleton height={80} />}</p>
          </div>

          {dataAll.role ? (
            <div className="flex flex-row item-center mt-4 lg:mt-5">
              <h3 className="text-sm lg:text-lg font-medium">Roles:&nbsp;</h3>
              {dataAll.roles.map((role) => {
                return (
                  <p
                    key={role.subID}
                    className="bg-secondary-card text-role-text-2 rounded-md px-2 ml-2 text-sm lg:text-lg font-medium"
                  >
                    {role.roles}
                  </p>
                );
              })}
            </div>
          ) : (
            <Skeleton width={boxWidth / 1.5} />
          )}

          <hr className=" border-divider-color mt-5" />
          {dataAll.roles.map((innerRole) => {
            return (
              <RolesCard
                key={innerRole.subID}
                props={innerRole}
                boxWidth={boxWidth}
              />
            );
          })}
        </section>
      </div>
    </SkeletonTheme>
  );
};

export default driveinfo;
