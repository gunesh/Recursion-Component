import React, { useState } from 'react';

function Recursion(props) {
  const [expand, setExpand] = useState(false);
  const { files } = props;
  return (
    <div>
      <ul>
        <li>
          <h4 onClick={() => setExpand(!expand)}>{files.name}</h4>
          <div style={{ display: expand ? 'block' : 'none',transition: "visibility 5s, opacity 1.5s linear" }}>
            {files.item &&
              files.item.map((it) => {
                return <Recursion files={it} />;
              })}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Recursion;
