import React from "react";
import agentObj from "../../agent";
import logo from "../../imgs/logo.png";

const SearchBox = (props) => [
  <input
    id={props.id}
    style={{
      width: "50%",
      padding: "12px 20px",
      // margin: "0 auto",
    }}
    placeholder="Search by title"
    value={props?.query}
    onChange={(ev) => {
      ev.preventDefault();
      props.searchByTitle(agentObj.Items.searchByTitle(ev.target.value));
      // this.setState({ query: e.target.value });
    }}
  />,
];
const Banner = (props) => {
  return (
		<div className="banner text-white">
			<div className="container p-4 text-center">
				<img src={logo} alt="banner" />
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",

        }}>
					<span id="get-part">A place to get</span>
					<SearchBox id="search-box" searchByTitle={props.handleSearch} />
					<span> the cool stuff.</span>
				</div>
			</div>
		</div>
	);
};

export default Banner;
