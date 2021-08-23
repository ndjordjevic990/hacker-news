import React, { useEffect, useState } from "react";
import { fetchId, fetchNews } from "../../data/fetch";
import { Post } from "../Post/Post";

//*********************************HOOK VERSION ************************************ */

const News = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchId().then((data) => {
      const ids = data.slice(0, 10);
      const reqs = ids.map((id) => fetchNews(id));
      Promise.all(reqs).then((data) => {
        setStories(data);
      });
    });
  }, []);

  return (
    <div>
      {console.log(stories)}
      {stories.map((story, i) => (
        <Post
          number={i + 1}
          title={story.title}
          // storyUrl={story.url}
          points={story.score}
          author={story.by}
          time={story.time}
          comments={story.descendants}
        />
      ))}
    </div>
  );
};

//*********************************CLASS VERSION ************************************ */

// class News extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stories: [],
//     };
//   }
//   componentDidMount() {
//     fetchId().then((data) => {
//       const ids = data.slice(0, 10);
//       const reqs = ids.map((id) => fetchNews(id));
//       Promise.all(reqs).then((data) => {
//         this.setState({ stories: data });
//       });
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.stories.map((story, i) => (
//           <Post
//             number={i + 1}
//             title={story.title}
//             // storyUrl={story.url.slice(8).split("/")[0]}
//             points={story.score}
//             author={story.by}
//             time={story.time}
//             comments={story.descendants}
//           />
//         ))}
//       </div>
//     );
//   }
// }

export { News };
