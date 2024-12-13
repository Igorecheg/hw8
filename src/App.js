import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Typography } from "./components/Typography";
import "./index.css";
import { Tooltip } from "./components/Tooltip";
import "./assets/fonts/fonts.css";
import { Accordion } from "./components/Accordion";
import { Input } from "./components/Input";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div class="main">
      <div>
        <Button size="sm" variant="primary">
          Small
        </Button>
        <Button size="md" variant="primary">
          Medium
        </Button>
        <Button size="lg" variant="primary">
          Large
        </Button>
      </div>
      <div>
        <Button size="sm" variant="bordered">
          Small
        </Button>
        <Button size="md" variant="bordered">
          Medium
        </Button>
        <Button size="lg" variant="bordered">
          Large
        </Button>
      </div>
      <div>
        <Typography textSize="sm">
          SM. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="md">
          SM. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="lg">
          SM. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
      </div>
      <div>
        <Heading level="1">Zagolovok</Heading>
        <Heading level="2">Zagolovok</Heading>
        <Heading level="3">Zagolovok</Heading>
        <Heading level="4">Zagolovok</Heading>
        <Heading level="5">Zagolovok</Heading>
        <Heading level="6">Zagolovok</Heading>
      </div>
      <div class="inner1">
        <div>
          <Tooltip text="Tooltip text" position="top">
            Top Tooltip
          </Tooltip>
        </div>
        <div>
          <Tooltip text="Tooltip text" position="bottom">
            Top Tooltip
          </Tooltip>
        </div>
        <div>
          <Tooltip text="Tooltip text" position="left">
            Top Tooltip
          </Tooltip>
        </div>
        <div>
          <Tooltip text="Tooltip text" position="right">
            Top Tooltip
          </Tooltip>
        </div>
      </div>
      <div>
        <Accordion title="Accordion 1" defaultOpen={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion title="Accordion 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>
      </div>
      <div>
            <Input
                label="Name"
                placeholder="Enter your name"
                danger
            />
            <Input
                label="Controlled Name"
                placeholder="Enter controlled name"
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </div>
    </div>
  );
}

export default App;
