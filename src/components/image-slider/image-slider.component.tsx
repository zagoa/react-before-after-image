import "./image-slider.scss";
import {ChangeEvent, useEffect} from "react";
import {css} from "@emotion/react";
import React from "react";

type ImageSliderComponentProps = {
	backgroundImg: string;
	foregroundImg: string |  undefined;
	bgColor?: string;
	defaultRangeValue?: number;
};

const ImageSliderComponent = (props: ImageSliderComponentProps) => {
	const DEFAULT_RANGE = 25;

	useEffect(() => {
		getNewValue({target: {value: `${props.defaultRangeValue ?? DEFAULT_RANGE}`}} as ChangeEvent<HTMLInputElement>)
	}, [])

	function getNewValue(event: ChangeEvent<HTMLInputElement>) {
		const sliderPos = event?.target.value;
		// Update the width of the foreground image
		const slider = document.getElementsByClassName("foreground-img")[0];
		//const sliderButton = document.getElementsByClassName("slider-button")[0];
		slider.setAttribute(
			"style",
			`clip-path: polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100% )`,
		);
		//sliderButton.setAttribute("style", `left: calc(${sliderPos}% - 16px)`);
	}

	return (
		<div className='container image-shadow' 
			css={css`background-color: ${props.bgColor ?? 'rgba(169,163,175,0.27)'}`}>
			<img src={props.backgroundImg} className={"hidden-img"} />
			<img src={props.backgroundImg} className={"background-img"} />
			<img
				src={props.foregroundImg}
				className={"foreground-img"}
			/>
			<input
				onChange={getNewValue}
				min={0}
				max={100}
				defaultValue={props.defaultRangeValue ?? DEFAULT_RANGE}
				type="range"
				className="slider"
				name='slider'
				id="slider"
			/>
			{/*<div className='slider-button'></div>*/}
		</div>
	);
}

export default ImageSliderComponent;
