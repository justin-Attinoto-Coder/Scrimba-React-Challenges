window.App = function App() {
	const [numOfArticles, setNumOfArticles] = React.useState(4)
	const [currentArticles, setCurrentArticles] = React.useState(window.getArticles(numOfArticles))
	
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
				numOfArticles: numOfArticles,
				setCurrentArticles: setCurrentArticles
			})
		)
	)
}