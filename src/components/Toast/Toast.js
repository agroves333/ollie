import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text } from "rebass";
import { Flex, Box } from "reflexbox";
import classnames from "classnames";

export const Toast = ({ text, color, bg, duration }) => {
  const [isPresented, setIsPresented] = useState(true);

  setTimeout(() => {
    setIsPresented(false);
  }, duration);

  return (
    <Flex flexWrap="wrap">
      <Box
        width={[1, 1 / 3]}
        margin={[0, "auto"]}
        className={classnames({
          isPresented,
        })}
        sx={{
          top: "-50px",
          transition: "top 500ms",
          ".isPresented": {
            top: "100px",
          },
        }}
      >
        <Text color={color} bg={bg}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

Toast.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  duration: PropTypes.string,
};

Toast.defaultProps = {
  text: "",
  color: "black",
  bg: "white",
  duration: "500ms",
};
