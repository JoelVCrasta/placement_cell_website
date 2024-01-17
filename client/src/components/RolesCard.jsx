import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RolesCard = ({ props, boxWidth }) => {
  return (
    <SkeletonTheme baseColor="#7C7B7B" highlightColor="#686868" height={25}>
      <section className="flex flex-col mt-8 text-sm lg:text-base">
        <h2 className="mb-2 text-xl lg:text-2xl font-medium">
          {props.rol || <Skeleton width={boxWidth / 1.92} />}
        </h2>
        <div className="bg-secondary-card rounded-md px-3 py-4 sm:p-6 lg:p-6 font-medium">
          {/* this is the description */}
          <p className="mb-8 lg:mb-5 sm:leading-tight">
            {props.roleDescriptio || <Skeleton height={80} />}
          </p>

          {props.qualificatio ? (
            <div className="lg:mt-3 mt-5 flex flex-row">
              <h3>Qualifications:&nbsp;</h3>
              <p className="text-role-text-2 ">{props.qualification}</p>
            </div>
          ) : (
            <Skeleton width={boxWidth / 2} />
          )}

          {props.cutof ? (
            <div className="lg:mt-3 mt-5 flex flex-row">
              <h3>Cutoff:&nbsp;</h3>
              <p className="text-role-text-2">{props.cutoff}</p>
            </div>
          ) : (
            <Skeleton width={boxWidth / 2} />
          )}

          {props.ct ? (
            <div className="lg:mt-3 mt-5 flex flex-row">
              <h3>CTC:&nbsp;</h3>
              <p className="text-role-text-2">{props.ctc}</p>
            </div>
          ) : (
            <Skeleton width={boxWidth / 2} />
          )}

          {props.stipen ? (
            <div className="lg:mt-3 mt-5 flex flex-row">
              <h3>Stipend:&nbsp;</h3>
              <p className="text-role-text-2">{props.stipend}</p>
            </div>
          ) : (
            <Skeleton width={boxWidth / 2} />
          )}

          {props.serviceAgreemen ? (
            <div className="lg:mt-3 mt-5 flex flex-row items-center">
              <h3>Service Agreement:&nbsp;</h3>
              <p className="text-role-text-2">{props.serviceAgreement}</p>
            </div>
          ) : (
            <Skeleton width={boxWidth / 2} />
          )}

          {props.locatio ? (
            <div className="lg:mt-3 mt-5 flex flex-row">
              <h3>Location:&nbsp;</h3>
              <p className="text-role-text-2">{props.location}</p>
            </div>
          ) : (
            <Skeleton width={boxWidth / 2} />
          )}
        </div>
      </section>
    </SkeletonTheme>
  );
};

export default RolesCard;
