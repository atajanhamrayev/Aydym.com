import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Artists from "./Artists";
import { getArtist } from "./../../data/music-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};

class ArtistsContainer extends Component {
  componentDidMount() {
    let id = this.props.router.params.id;
    this.props.getArtist(+id);
  }
  render() {
    return <Artists artist={this.props.artist} />;
  }
}

const mapStateToProps = (state) => ({
  artist: state.musicsPage.artist,
});

export default compose(
  connect(mapStateToProps, {
    getArtist,
  }),
  withRouter
)(ArtistsContainer);
