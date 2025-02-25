import React from "react";
import "./style.css";

export const Wall = () => {
  return (
    <div className="wall">
      <div className="div">
        <div className="text-wrapper">Wall.</div>

        <div className="frame">
          <div className="group">
            <div className="rectangle-wrapper">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/vector.png"
              />
            </div>

            <div className="group-2">
              <div className="text-wrapper-2">
                #govegan #healthylife #fresh...
              </div>

              <div className="group-wrapper">
                <div className="div-wrapper">
                  <div className="group-3">
                    <div className="text-wrapper-3">1,345 Posts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img className="line" alt="Line" src="/img/vector.png" />

          <div className="frame-2">
            <div className="text-wrapper-4">Follow Us</div>
          </div>
        </div>

        <div className="group-4">
          <div className="post-dark">
            <div className="frame-3">
              <div className="group-5">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper-5">GoVegan</div>
                  </div>
                </div>

                <div className="group-6">
                  <div className="group-7">
                    <div className="group-8">
                      <div className="group-9">
                        <div className="text-wrapper-6">GoVegan</div>
                      </div>

                      <div className="group-10">
                        <div className="text-wrapper-7">28 Sep 2020</div>
                      </div>
                    </div>

                    <div className="img-wrapper">
                      <img className="img" alt="Group" src="/img/group-1.png" />
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="group-11"
                alt="Group"
                src="/img/group-823-1.png"
              />
            </div>

            <div className="frame-4">
              <div className="overlap">
                <div className="rectangle-2" />

                <div className="btn-primary">
                  <div className="text-wrapper-8">Visit Us</div>
                </div>
              </div>

              <div className="camera-black-wrapper">
                <div className="camera-black">
                  <div className="group-12">
                    <img
                      className="subtract"
                      alt="Subtract"
                      src="/img/subtract-1.svg"
                    />

                    <img
                      className="group-13"
                      alt="Group"
                      src="/img/group-29-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="vegan-you-and-your">
              <span className="span">#vegan</span>

              <span className="text-wrapper-9">
                {" "}
                You and your family will love this refreshing salad that is
                perfect for warm days or summer time!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
