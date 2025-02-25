import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const FindFriendsGet = () => {
  return (
    <div className="find-friends-get">
      <div className="overlap-group-wrapper-3">
        <div className="overlap-group-5">
          <div className="rectangle-10" />

          <div className="frame-25">
            <div className="frame-26">
              <img
                className="connected-world"
                alt="Connected world"
                src="/img/connected-world-rafiki.png"
              />

              <div className="frame-27">
                <p className="text-wrapper-16">
                  Find Friends &amp; Get Inspiration
                </p>

                <p className="text-wrapper-17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                  vitae quis quam augue quam a.
                </p>

                <Link
                  className="frame-28"
                  to="/meet-awesome-people-u38-enjoy-yourself"
                >
                  <Link className="rectangle-11" to="/first-page" />

                  <div className="rectangle-12" />

                  <div className="rectangle-13" />

                  <div className="rectangle-13" />
                </Link>
              </div>
            </div>

            <div className="frame-29">
              <Link className="outlined-labeled-wrapper" to="/sign-up">
                <div className="text-data-wrapper">
                  <div className="text-data-2">Join Now</div>
                </div>
              </Link>

              <Link className="text-wrapper-18" to="/sign-in">
                Sign in
              </Link>
            </div>
          </div>

          <div className="status-bar-4">
            <img className="battery-4" alt="Battery" src="/img/battery.png" />

            <img className="wifi-4" alt="Wifi" src="/img/wifi.svg" />

            <img
              className="cellular-connection-4"
              alt="Cellular connection"
              src="/img/cellular-connection.svg"
            />

            <div className="time-style-4">
              <div className="text-wrapper-19">9:41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
