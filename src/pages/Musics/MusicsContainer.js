import React, { Component } from "react";
import { connect } from "react-redux";
import Musics from "./Musics";
import { getMusics, getTotal } from "./../../data/music-reducer";

class MusicsContainer extends Component {
  componentDidMount() {
    this.props.getMusics();
    this.props.getTotal();
  }
  render() {
    return <Musics musics={this.props.musics} total={this.props.total} />;
  }
}

const mapStateToProps = (state) => ({
  musics: state.musicsPage.musics,
  total: state.musicsPage.total,
});

export default connect(mapStateToProps, { getMusics, getTotal })(
  MusicsContainer
);
