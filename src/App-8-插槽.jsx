import React, { Component } from "react";
import Register from "./Register";
import Footer from "./Footer";
import Header from "./Header";
import GlobalContext from "./GlobalContext";

export default class App extends Component {
  state = {
    num: 11,
  };
  render() {
    return (
      <GlobalContext.Provider
        value={{
          num: this.state.num,
          update_num: (num) => {
            this.setState({
              num: num,
            });
          },
        }}
      >
        <div>
          <Header>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            ipsam odio maiores, quasi saepe blanditiis molestiae magni porro ut
            culpa quidem pariatur at earum nemo minus provident nisi consequatur
            recusandae.
          </Header>
          <Footer></Footer>
        </div>
      </GlobalContext.Provider>
    );
  }
}
