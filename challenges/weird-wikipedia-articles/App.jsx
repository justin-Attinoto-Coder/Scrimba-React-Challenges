window.App = function App() {
	const [numberOfArticles, setNumberOfArticles] = React.useState(4)
	const [currentArticles, setCurrentArticles] = React.useState(window.getArticles(numberOfArticles))
	
	const articles = currentArticles.map(article => {
		return React.createElement('li', { key: article.id, className: "article" },
			React.createElement('a', { href: article.link, target: "_blank" },
				article.title
			)
		)			
	})	
	
	return React.createElement('div', { className: "wrapper" },
		React.createElement(window.Header),
		React.createElement('main', null,
			React.createElement('ul', null,
				...articles
			),
			React.createElement(window.Button, {
				numberOfArticles: numberOfArticles,
				setCurrentArticles: setCurrentArticles
			})
		)
	)
}