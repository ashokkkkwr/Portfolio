import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from 'react-tooltip';

function Github() {
  const blueTheme = {
    light: ['#ebedf0', '#99ccff', '#00aaff', '#007bff', '#001f3f'],
    dark: ['#161b22', '#007bff', '#004085', '#00335a', '#002040']
  };

  return (
    <ul className="flex flex-col justify-center">
      <h1 className="flex justify-center text-6xl p font-serif mt-20 mb-20 text-white">
        Days I <strong className="text-blue-500">Code</strong>
      </h1>
      <GitHubCalendar
        username="ashokkkkwr"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme="light"
        theme={blueTheme}
        style={{
          color: 'white'  // Apply white color to text
        }}
      />
      <ReactTooltip delayShow={50} />
    </ul>
  );
}

export default Github;
