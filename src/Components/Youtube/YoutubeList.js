import React from "react";
import YoutubeItem from "./YoutubeItem";
import YoutubeData from "./YoutubeData";
const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        const addClass = index === 1 ? "abc" : "";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image} // k co avt thi lay image
            title={item.title || "Dung tam ReyC Learn"}
            author={item.author || "Dung tam ReyC"}
            className={addClass} // Add className
          />
        );
      })}
      {/* <YoutubeItem
        image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        title=""
        author=""
      />
      <YoutubeItem
        image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        avatar="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        title=""
        author=""
      />
      <YoutubeItem
        image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        avatar="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        title=""
        author=""
      />
      <YoutubeItem
        image="https://images.unsplash.com/photo-1678225758637-c176c3885aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
        avatar="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        title=""
        author=""
      /> */}
    </div>
  );
};

export default YoutubeList;
