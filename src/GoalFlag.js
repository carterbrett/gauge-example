import React from "react";

function GoalFlag({ x, y, datum, getRating }) {
  console.log("goal datum: ", datum);
  return datum.x === 2 ? null : (
    <svg x={x} y={y - 26} width="118" height="58" viewBox="0 0 118 58">
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .a {
            fill:#fff;
            stroke:#2267ec;
            stroke-width:5px;
            }
          .b {
          fill:#2267ec;
          }
          .c,.d,.e {
          isolation:isolate;
          }
          .d,.e {
          fill:#fafafa;letter-spacing:0.025em;
          }
          .d {
          font-size:12px;font-family:Roboto-Regular, Roboto;
          }
          .e {
          font-size:18px;
          font-family:Roboto-Bold, 
          Roboto;font-weight:700;
          }
        `,
          }}
        />
      </defs>
      <g transform="translate(-1017.291 -141.799)">
        <circle
          class="a"
          cx="10.362"
          cy="10.362"
          r="10.362"
          transform="translate(1019.791 159.114)"
        />
        <rect
          class="b"
          width="82.898"
          height="57.764"
          rx="5"
          transform="translate(1052.535 141.799)"
        />
        <g class="c">
          <text class="d" transform="translate(1077.719 164.892)">
            <tspan x="0" y="0">
              GOAL
            </tspan>
          </text>
          <text class="e" transform="translate(1077.521 182.892)">
            <tspan x="0" y="0">
              {datum.y + 300}
            </tspan>
          </text>
        </g>
        <path
          class="b"
          d="M1043.45,172.168a2,2,0,0,1,0-3.486l9.921-5.58a2,2,0,0,1,2.979,1.743v11.16a2,2,0,0,1-2.981,1.743Z"
        />
      </g>
    </svg>
  );
}

export default GoalFlag;
