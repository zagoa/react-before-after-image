import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageSliderComponent from "../components/image-slider/image-slider.component";

import beforeImgFile from "./assets/example_before.png";
import afterImgFile from "./assets/example_after.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ImageSliderComponent",
  component: ImageSliderComponent,
} as ComponentMeta<typeof ImageSliderComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageSliderComponent> = (args) => <ImageSliderComponent {...args} />;

export const DefaultView = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultView.args = {
    backgroundImg: afterImgFile,
	foregroundImg: beforeImgFile
};
