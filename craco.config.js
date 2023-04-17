const CracoLessPlugin = require('craco-less')
const path = require("path")

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#D31145',
							'@border-radius-base': '4px',
							'@font-size-base': '16px',
							'@text-color': '#333D47', // 主文本色
							'@heading-color': '#333333', // 标题色
							'@success-color': '#3DA758', // 成功色
							'@warning-color': '#FFC107', // 警告色
							'@error-color': '#DC3545', // 警告色
							hack: `true; @import (reference) "${path.resolve(__dirname, './src/styles/variables.less')}";` // 将variables.ess里的变量变成全局
						},
						javascriptEnabled: true
					}
				}
			}
		}
	]
}
