import React, { useState, useEffect, SyntheticEvent } from 'react'
import MuiSlider from '@mui/material/Slider'
import { isArray } from 'util'

type Props = {
	defaultValue: number
	min: number
	max: number
	color?: string
	value: number
	onChange: (value: number) => void
	step: number
	disabled?: boolean
}

export default function Slider({
	defaultValue,
	min,
	max,
	color,
	value,
	onChange,
	step,
	disabled,
}: Props) {
	const textStyle = {
		fontSize: '10px',
		fontWeight: '700',
		color: '#33333350',
	}

	const [sliderValue, setSliderValue] = useState(value)

	const handleSliderValueChange = (value: number | number[]) => {
		if (value instanceof Array) return
		setSliderValue(value)
	}

	const handleSliderValueCommit = (value: number | number[]) => {
		if (value instanceof Array) return
		onChange(value)
	}

	useEffect(() => {
		setSliderValue(value)
	}, [value])

	return (
		<div>
			<MuiSlider
				defaultValue={defaultValue}
				value={sliderValue}
				onChange={(e, value) => handleSliderValueChange(value)}
				onChangeCommitted={(e, value) => handleSliderValueCommit(value)}
				min={min}
				max={max}
				step={step}
				sx={{ color: color }}
				valueLabelDisplay='off'
				disabled={disabled}
			/>
		</div>
	)
}
