import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./styles.css";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@mui/material';

function Banner(item) {
  return (
    <Card raised className="Banner">
      <CardMedia component="img"  image={item.Image} alt={item.Name} />
    </Card>
  );
}

const items = [
  {
    Name: "Pizza begin",
    Image: "https://source.unsplash.com/featured/?macbook",
  },
  {
    Name: "Macbook Pro",
    Image: "https://source.unsplash.com/featured/?macbook",
  },
  {
    Name: "iPhone",
    Image: "https://source.unsplash.com/featured/?iphone",
  },
  {
    Name: "Washing Machine WX9102",
    Image: "https://source.unsplash.com/featured/?washingmachine",
  },
  {
    Name: "Learus Vacuum Cleaner",
    Image: "https://source.unsplash.com/featured/?vacuum,cleaner",
  },

  {
    Name: "Living Room Lamp",
    Image: "https://source.unsplash.com/featured/?lamp",
  },
  {
    Name: "Floral Vase",
    Image: "https://source.unsplash.com/featured/?vase",
  },
];

class CarouselHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true,
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay,
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators,
    });
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible,
    });
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible,
    });
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation,
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value,
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value,
    });
  }

  render() {
    return (
      <div style={{ marginTop: "50px", color: "#494949" }}>
        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
          next={(now, previous) =>
            console.log(
              `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          prev={(now, previous) =>
            console.log(
              `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          onChange={(now, previous) =>
            console.log(
              `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          // fullHeightHover={false}
          // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
          // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
          // indicatorContainerProps={{style: {margin: "20px"}}}
          // NextIcon='next'
        >
          {items.map((item, index) => {
            return <Banner key={index} item={item} />;
          })}
        </Carousel>
      </div>
    );
  }
}

export default CarouselHome;
