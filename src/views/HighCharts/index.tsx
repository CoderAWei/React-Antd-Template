import React, { useEffect, useRef } from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighCharts from 'highcharts'

export default function HighChartsCom() {

	const chartsRef = useRef<HighchartsReact.RefObject>(null)

	useEffect(() => {
		if (chartsRef) {
			console.log(chartsRef.current.chart)
		}
	}, [chartsRef])

	const options: HighCharts.Options = {
		title: {
			text: 'My HighCharts'
		},
		series: [{
			type: 'line',
			data: [1, 2, 3]
		}],
		accessibility: {
			enabled: false // remove warning
		}
	}
	return (
		<div>
			<HighchartsReact
				highcharts={HighCharts}
				options={options}
				ref={chartsRef}
			/>
		</div>
	)
}
