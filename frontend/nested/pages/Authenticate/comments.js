import React from 'react';
import com from "./Todo";



let remore = [
  { id: 2, myid:33, reply: "Rone" },
  { id: 1,myid:22, reply: "Rtwo" },
];

let aga = [
    { id: 33, reply: "Ronetree" },
    { id: 22, reply: "Rtwotree" },
  ];
  


const Comments = ({ com }) => {
  const renderReplies = (replies) => {
    if (!replies || replies.length === 0) {
      return null;
    }

    return (
      <ul>
        {replies.map((reply) => (
          <li key={reply.id}>
            {reply.reply}
            {renderReplies(getRepliesById(reply.myid,aga))}
          </li>
        ))}
      </ul>
    );
  };

  const getRepliesById = (id,mores) => {
    return mores.filter((reply) => reply.id === id);
  };
  return (
    <div>
      <h2>Comments:</h2>
      <div>
        {com.map((comment) => (
          <div key={comment.id}>
            <div>{comment.comment}</div>
            <div>
              Replies:
              {renderReplies(getRepliesById(comment.id,remore))} {/* Pass the replies associated with the comment */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
