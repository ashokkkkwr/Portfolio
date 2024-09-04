import React from "react";
import GitHubCalendar from "react-github-calendar";



function Github() {
  return (
    <ul style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ashokkkkwr"
        blockSize={15}
        blockMargin={5}
        // color="#c084f5"
        fontSize={16}
      />
    </ul>
  );
}

export default Github;
