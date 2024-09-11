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
      <h1 className="flex justify-center text-4xl md:text-6xl p font-serif mt-10 md:mt-20 mb-10 md:mb-20 text-white">
        Days I <strong className="text-blue-500">Code</strong>
      </h1>

      {/* Mobile view */}
      <div className="block md:hidden">
        <GitHubCalendar
          username="ashokkkkwr"
          blockSize={6}  // Smaller blocks for mobile
          blockMargin={3}  // Adjusted margin for smaller screens
          fontSize={12}  // Reduced font size for mobile
          colorScheme="light"
          theme={blueTheme}
          style={{
            color: 'white',
            padding: '0 10px'
          }}
        />
      </div>

      {/* Laptop view */}
      <div className="hidden md:block">
        <GitHubCalendar
          username="ashokkkkwr"
          blockSize={15}  // Larger block size for laptop
          blockMargin={5}  // Larger margin for laptop
          fontSize={16}  // Default font size for laptop
          colorScheme="light"
          theme={blueTheme}
          style={{
            color: 'white'
          }}
        />
      </div>

      <ReactTooltip delayShow={50} />
    </ul>
  );
}

export default Github;
