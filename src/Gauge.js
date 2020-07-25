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

  getRating(score) {
    let rating = {};
    score >= 300 && score < 601
      ? (rating = { description: "POOR", color: "#F44336" })
      : score >= 601 && score < 661
      ? (rating = { description: "FAIR", color: "#FFCE00" })
      : score >= 661 && score < 781
      ? (rating = { description: "GOOD", color: "#07DD5E" })
      : (rating = { description: "EXCELLENT", color: "#3AABE4" });

    return rating;
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            startAngle={-120}
            endAngle={120}
            animate={{ duration: 1000 }}
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
                  }

                  color = this.getRating(datum.y + 300).color;

                  console.log("datum.y: ", datum.y);
                  console.log("color: ", color);
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
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={120}
                  text={`${this.getRating(newProps.score).description}`}
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    fill: `${this.getRating(newProps.score).color}`,
                  }}
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
