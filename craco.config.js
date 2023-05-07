const CracoLessPlugin = require('craco-less')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		plugins: {
			add: [
				new CompressionPlugin({
					test: /\.(js|css|less)?$/i, // 哪些文件要压缩
					filename: '[path][base].gz', // 压缩后的文件名
					algorithm: 'gzip', // 使用gzip压缩
					minRatio: 0.8, // 压缩率小于1才会压缩
					deleteOriginalAssets: false // 删除未压缩的文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false
				})
			]
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
