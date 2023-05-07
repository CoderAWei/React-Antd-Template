// Lint-staged仅仅是文件过滤器，不会帮你格式化任何东西
module.exports = {
    "src/**/\*{js,jsx,ts,tsx,md,html}": ["eslint"],
    "src/**/*.{css,less}": ["stylelint --fix", "git add"],
}