import React, { useEffect, useRef, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighCharts from 'highcharts'

export default function HighChartsCom() {
	const chartsRef = useRef<HighchartsReact.RefObject>(null)
	const [lineData, setLineData] = useState<Array<number>>([])

	const options: HighCharts.Options = {
		title: {
			text: 'My HighCharts'
		},
		series: [{
			type: 'line',
			data: lineData
		}],
		accessibility: {
			enabled: false // remove warning
		}
	}

	useEffect(() => {
		// 从接口拿数据并赋值
		setLineData([2, 3, 4, 5, 12])
		console.log(chartsRef.current.chart)
	}, [chartsRef])

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
