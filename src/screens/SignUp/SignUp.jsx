import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="div-4">
        <div className="overlap-6">
          <div className="rectangle-17" />

          <div className="status-bar-6">
            <img className="battery-6" alt="Battery" src="/img/battery.png" />

            <img className="wifi-6" alt="Wifi" src="/img/wifi.svg" />

            <img
              className="cellular-connection-6"
              alt="Cellular connection"
              src="/img/cellular-connection.svg"
            />

            <div className="time-style-6">
              <div className="text-wrapper-24">9:41</div>
            </div>
          </div>

          <div className="frame-35">
            <div className="frame-36">
              <img className="union-3" alt="Union" src="/img/union-2.svg" />
            </div>

            <Link className="frame-37" to="/find-friends-u38-get-inspiration">
              <div className="overlap-group-7">
                <img className="group-19" alt="Group" src="/img/group-3.png" />

                <img className="union-4" alt="Union" src="/img/union-3.svg" />
              </div>
            </Link>
          </div>

          <p className="by-using-this-app">
            <span className="text-wrapper-25">
              By Using this app you agree with the
              <br />
            </span>

            <span className="text-wrapper-26">Terms of Service</span>
          </p>

          <div className="frame-38">
            <div className="frame-39">
              <div className="frame-40">
                <div className="outlined-text-only-3">
                  <div className="outlined-labeled-3">
                    <div className="label-caption">Your Full Name</div>

                    <div className="text-data-4">your name</div>
                  </div>
                </div>

                <div className="outlined-text-only-3">
                  <div className="outlined-labeled-3">
                    <div className="label-caption">Email/Phone</div>

                    <div className="text-data-4">Type your email/phone</div>
                  </div>
                </div>

                <div className="outlined-text-only-3">
                  <div className="outlined-labeled-3">
                    <div className="label-caption">Password</div>

                    <div className="text-data-4">Type your possword</div>
                  </div>
                </div>

                <div className="outlined-text-only-3">
                  <div className="outlined-labeled-3">
                    <div className="label-caption">Confirm Password</div>

                    <div className="text-data-4">Tetype your possword</div>
                  </div>
                </div>
              </div>

              <Link className="outlined-text-only-4" to="/home">
                <div className="outlined-labeled-4">
                  <div className="text-data-5">Join Now</div>
                </div>
              </Link>
            </div>

            <div className="frame-41">
              <div className="group-20">
                <div className="text-wrapper-27">Or sign up with</div>

                <img className="line-4" alt="Line" src="/img/line-6.svg" />

                <img className="line-5" alt="Line" src="/img/line-6.svg" />
              </div>

              <div className="frame-42">
                <div className="sign-in-with">
                  <div className="group-21">
                    <img
                      className="flat-color-icons"
                      alt="Flat color icons"
                      src="/img/flat-color-icons-google-1.svg"
                    />

                    <div className="text-wrapper-28">Google</div>
                  </div>
                </div>

                <img
                  className="sign-in-with-2"
                  alt="Sign in with"
                  src="/img/sign-in-with.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="frame-43">
          <div className="group-22">
            <div className="overlap-group-8">
              <div className="rectangle-18" />
            </div>

            <p className="sign-in-2">
              <span className="text-wrapper-29">Sign in</span>
            </p>

            <p className="span-wrapper-3">
              <span className="text-wrapper-30">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
