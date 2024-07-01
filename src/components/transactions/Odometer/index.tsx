"use client"
import { useEffect } from "react";
import "./odometer.css";

export const Odometer = ({
  value = 100000,
  duration = 1000,
  size = "3rem",
  color = "inherit",
  fontFamily = "inherit",
}) => {
  return (
    <div
      className="odometer-wrap"
      style={{ height: size, fontSize: size, lineHeight: size }}
    >
      {(value + "").split("").map((val, idx) => (
        // eslint-disable-next-line react/jsx-key
        <div
          className="odometer-digits"
          style={{
            color: color,
            fontFamily: fontFamily,
            marginTop: `calc( -${val}em `,
            transition: `${duration}ms all`,
            transitionDelay: `${((value + "").split("").length - idx) * 20}ms`,
          }}
        >
          <div className="odometer-digit" data-val="0">
            0
          </div>
          <div className="odometer-digit" data-val="1">
            1
          </div>
          <div className="odometer-digit" data-val="2">
            2
          </div>
          <div className="odometer-digit" data-val="3">
            3
          </div>
          <div className="odometer-digit" data-val="4">
            4
          </div>
          <div className="odometer-digit" data-val="5">
            5
          </div>
          <div className="odometer-digit" data-val="6">
            6
          </div>
          <div className="odometer-digit" data-val="7">
            7
          </div>
          <div className="odometer-digit" data-val="8">
            8
          </div>
          <div className="odometer-digit" data-val="9">
            9
          </div>
        </div>
      ))}
    </div>
  );
};
