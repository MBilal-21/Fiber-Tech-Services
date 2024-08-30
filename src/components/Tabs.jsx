"use client";

import Image from "next/image";
import React, { useState } from "react";
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-wrap border-b border-gray-300">
        {children.map((child) => {
          return (
            <button
              key={child.props.label}
              className={`${
                activeTab === child.props.label
                  ? "border-b-2 border-purple-500"
                  : "border-b-2 border-transparent"
              } flex items-center justify-center text-gray-700 font-medium py-2 flex-1`}
              onClick={(e) => handleClick(e, child.props.label)}
            >
              <div className="h-12 w-12 mt-auto flex">
                <Image
                  src={`/Assets/icons/png/${child.props.iconName}`}
                  width={32}
                  height={32}
                  className="object-contain"
                />{" "}
              </div>{" "}
              <h2 className="text-md text-start md:text-lg xl:text-2xl self-center font-semibold px-2 py-2 mt-auto">
                {child.props.label}
              </h2>
            </button>
          );
        })}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};
const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
