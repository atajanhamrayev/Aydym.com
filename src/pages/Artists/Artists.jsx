import React from "react";
import { Image } from "antd";
import { NavLink } from "react-router-dom";

const Artists = (props) => {
  console.log(props); //konsolda beyleki apidan cekilen zatlary gorup bolyar

  return (
    <div>
      <Image
        className="rounded-full"
        src={props.artist.image.url}
        width={200}
      />
      <h1 className="text-[42px] font-serif text-bold">{props.artist.name}</h1>
      <p>{props.artist.description}</p>
      <span>Place: {props.artist.place}</span>
      <br />
      <NavLink className="underline text-blue-600" to={props.artist.shareUrl}>
        aydym.com
      </NavLink>
    </div>
  );
};

export default Artists;
