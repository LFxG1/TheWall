import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const MeetAwesomePeople = () => {
  return (
    <div className="meet-awesome-people">
      <div className="overlap-group-wrapper-4">
        <div className="overlap-group-6">
          <div className="rectangle-14" />

          <div className="frame-30">
            <div className="frame-31">
              <img
                className="remote-meeting-amico"
                alt="Remote meeting amico"
                src="/img/remote-meeting-amico.png"
              />

              <div className="frame-32">
                <p className="span-wrapper-2">
                  <span className="text-wrapper-20">
                    Meet Awesome People &amp; Enjoy yourself
                  </span>
                </p>

                <p className="text-wrapper-21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                  vitae quis quam augue quam a.
                </p>

                <Link className="frame-33" to="/hangout-with-with-friends">
                  <div className="rectangle-15" />

                  <div className="rectangle-15" />

                  <div className="rectangle-16" />

                  <div className="rectangle-15" />
                </Link>
              </div>
            </div>

            <div className="frame-34">
              <Link className="outlined-text-only-2" to="/sign-up">
                <div className="outlined-labeled-2">
                  <div className="text-data-3">Join Now</div>
                </div>
              </Link>

              <Link className="text-wrapper-22" to="/sign-up">
                Sign in
              </Link>
            </div>
          </div>

          <div className="status-bar-5">
            <img className="battery-5" alt="Battery" src="/img/battery.png" />

            <img className="wifi-5" alt="Wifi" src="/img/wifi.svg" />

            <img
              className="cellular-connection-5"
              alt="Cellular connection"
              src="/img/cellular-connection.svg"
            />

            <div className="time-style-5">
              <div className="text-wrapper-23">9:41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
