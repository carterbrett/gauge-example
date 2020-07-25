import React from "react";
import "./App.css";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

class Gauge extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 300,
      data: this.getData(300),
    };
  }

  componentDidMount() {
    let score = 300;
    /*this.setState({
      score,
      data: this.getData(score),
    });*/
    this.setStateInterval = window.setInterval(() => {
      score += Math.random() * 100;
      score = score >= 850 ? 300 : score;
      this.setState({
        score,
        data: this.getData(score),
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(score) {
    return [
      { x: 1, y: score - 300 },
      { x: 2, y: 550 - (score - 300) },
    ];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            startAngle={-120}
            endAngle={120}
            animate={{ duration: 3000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={137}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) => {
                  let color = "transparent";

                  if (datum.x === 2) {
                    return color;
                  } else if (datum.y >= 0 && datum.y < 301) {
                    color = "#F44336";
                  } else if (datum.y >= 301 && datum.y < 360) {
                    color = "#FFCE00";
                  } else if (datum.y >= 361 && datum.y < 480) {
                    color = "#07DD5E";
                  } else {
                    color = "#3AABE4";
                  }
                  console.log("datum: ", datum);
                  return color;
                },
              },
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={190}
                  text={`${Math.round(newProps.score)}`}
                  style={{ fontSize: 80, fontWeight: 600 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default Gauge;
