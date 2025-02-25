import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="overlap-wrapper-2">
        <div className="overlap-7">
          <Link className="outlined-text-only-5" to="/home">
            <div className="outlined-labeled-5">
              <div className="text-data-6">Sing in</div>
            </div>
          </Link>

          <img
            className="mask-group"
            alt="Mask group"
            src="/img/mask-group-6.png"
          />

          <div className="rectangle-19" />

          <div className="status-bar-7">
            <img className="battery-7" alt="Battery" src="/img/battery.png" />

            <img className="wifi-7" alt="Wifi" src="/img/wifi.svg" />

            <img
              className="cellular-connection-7"
              alt="Cellular connection"
              src="/img/cellular-connection.svg"
            />

            <div className="time-style-7">
              <div className="text-wrapper-31">9:41</div>
            </div>
          </div>

          <div className="frame-44">
            <div className="frame-45">
              <div className="frame-46">
                <div className="frame-47">
                  <div className="frame-48">
                    <div className="frame-49">
                      <img
                        className="union-5"
                        alt="Union"
                        src="/img/union-4.svg"
                      />
                    </div>

                    <Link
                      className="frame-50"
                      to="/find-friends-u38-get-inspiration"
                    >
                      <div className="overlap-group-9">
                        <img
                          className="group-23"
                          alt="Group"
                          src="/img/group-4.png"
                        />

                        <img
                          className="union-6"
                          alt="Union"
                          src="/img/union-5.svg"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="frame-51">
                    <div className="frame-52">
                      <div className="text-wrapper-32">Sign in</div>

                      <div className="text-wrapper-33">Sign up</div>
                    </div>

                    <div className="group-24">
                      <div className="rectangle-20" />
                    </div>
                  </div>
                </div>

                <div className="frame-53">
                  <div className="group-25">
                    <div className="outlined-text-only-6">
                      <div className="outlined-labeled-6">
                        <div className="label-caption-2">E-mail/Phone</div>

                        <div className="text-data-7">Email/Phone</div>
                      </div>
                    </div>

                    <div className="outlined-text-only-7">
                      <div className="outlined-labeled-6">
                        <div className="label-caption-2">Password</div>

                        <div className="text-data-7">Enter possword</div>
                      </div>
                    </div>
                  </div>

                  <Link className="outlined-text-only-8" to="/sign-up">
                    <div className="outlined-labeled-7">
                      <div className="text-data-8">Login</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="text-wrapper-34">Forgor Password?</div>
            </div>

            <div className="frame-54">
              <div className="frame-55">
                <div className="group-26">
                  <div className="text-wrapper-35">Or signin with</div>

                  <img className="line-6" alt="Line" src="/img/line-6-1.svg" />

                  <img className="line-7" alt="Line" src="/img/line-6-1.svg" />
                </div>

                <div className="frame-56">
                  <div className="sign-in-with-3">
                    <div className="group-27">
                      <img
                        className="flat-color-icons-2"
                        alt="Flat color icons"
                        src="/img/flat-color-icons-google-2.svg"
                      />

                      <div className="text-wrapper-36">Google</div>
                    </div>
                  </div>

                  <img
                    className="sign-in-with-4"
                    alt="Sign in with"
                    src="/img/sign-in-with-1.svg"
                  />
                </div>
              </div>

              <p className="don-t-have-a-account">
                <span className="text-wrapper-37">Don’t have a Account? </span>

                <span className="text-wrapper-38">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
