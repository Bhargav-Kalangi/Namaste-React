import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(" constructor");
    this.state = {
      result: [],
    };
  }
  async componentDidMount() {
    console.log(" componentDidMount");
    const usersApi = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await usersApi.json();
    // console.log(json);
    this.setState({ result: json });
  }
  componentDidUpdate() {
    console.log("component Did Update called");
  }
  componentWillUnmount() {
    console.log("Will be called when it is removed from DOM");
  }
  render() {
    const { result } = this.state;
    console.log("render method");
    return (
      <div>
        {result.map((item) => {
          return (
            <div key={item.id} className="user-card">
              <h2>Name: {item?.name}</h2>
              <h2>Email: {item?.email}</h2>
              <h2>Phone: {item?.phone}</h2>
              <h3>Company:{item?.company?.bs}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserClass;
