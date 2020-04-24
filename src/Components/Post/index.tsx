import React, { Component, Props } from "react";
import snoowrap from "snoowrap";

type State = { posts: snoowrap.Submission[] };

export default class index extends Component<Props<Component>, State> {
  constructor(props: Props<Component>) {
    super(props);
    this.state = { posts: [] };
  }
  async getHot() {
    const puh = new snoowrap({
      userAgent: navigator.userAgent,
      clientId: "cvY7O5XIsYtPdw",
      clientSecret: "nfD7cLg9GzdrOfwAtiwIhsFPw6Q",
      refreshToken: "68494560-t_CZBdSZ-RyK1LxQ3XuxEWFuDMA",
    });

    await puh.getHot("", { count: 1000, limit: 1 }).then((res) => {
      this.setState({ posts: res });
    });
    console.log(this.state.posts);
  }

  componentDidMount() {
    this.getHot();
  }

  render() {
    let subs: snoowrap.Submission[];
    subs = this.state.posts;
    return (
      <div>
        {subs.map((post) => {
          console.log(post);
          return (
            <img
              src={post.preview.images[0].source.url}
              style={{
                height: post.preview.images[0].source.height,
                width: post.preview.images[0].source.width,
              }}
              key={post.id}
              alt={post.author.id}
            ></img>
          );
        })}
      </div>
    );
  }
}
