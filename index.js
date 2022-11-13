// class App extends React.Component {

// 	constructor(props) {
// 	  super(props)

// 	  this.state = {
// 		 dude: 'Marceline'
// 	  }
// 	}

// 	/*
// 		TEMPLATE
// 	 */
// 	render(){
// 		return (
// 		<div>
// 			<p>
// 				My good friend <strong>{this.state.dude}</strong>.
// 				<br />I like {this.state.dude}.
// 			</p>
// 		</div>
// 		) 
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('root'))

class SecondApp extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			newWho: 'Marceline the  King',
			newWhat: 'super hero',

			characters: [
				{
					id: 1,
					who: 'Iron Man',
					what: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quam?',
					cool: 12
				},
				{
					id: 2,
					who: 'Capitan America Winter Soldier',
					what: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quam?',
					cool: 20
				}
			]
		}
	}

	handleWho = event => { //šipková fce si nevytváří vlastní kontext pro THIS jako normální fce() a odkazuje kontext na this pro SecondApp
		this.setState({
			newWho: event.target.value
		})
	}

	handleWhat = event => { 
		this.setState({
			newWhat: event.target.value
		})
	}

	handleCool = hero => event => { 

		const cool = +event.target.value
		
		this.setState((state) => { 
			return { 
				characters: state.characters.map(item => item === hero ?{...hero, cool} : item) 
			}})
	}

	handleSubmit = event => { //šipková fce si nevytváří vlastní kontext pro THIS jako normální fce() a odkazuje kontext na this pro SecondApp
		if (event.key === 'Enter') {
			this.setState((state) => {

				const newHero = {
					id: Math.max(...state.characters.map(d => d.id)) + 1,
					who: this.state.newWho,
					what: this.state.newWhat,
					cool: 20
				}
				return {
					characters: [...this.state.characters, newHero]
				}
			})
		}
	}

	listOfLiElements = () => {
		return (
			this.state.characters.map(hero => ( //pro práci s poli používat fce, map, filter, concat, protože vytvářejí kopii původního pole a původní nepřepisují
				<li className={hero.who.split(' ').length < 3 ? "strong" : ""} key={hero.id}>
					<a className="clear">x</a>

					<article>
						{hero.who}

						{hero.who.split(' ').length < 3 && ( //zápis přes &&, kde se druhá část vyplní pokud platí první část
							<small>
								<strong>
									-lol short name
								</strong>
							</small>)
						}
						<br />
						{hero.what}
					</article>
					<input className="coolest" type="number" value={hero.cool} onChange={this.handleCool(hero)} />
				</li>
			))
		)
	}

	/*
		TEMPLATE
	 */
	render() {
		return (
			<div>
				<ul>
					{this.listOfLiElements()}
				</ul>

				<form className="add-new" onKeyPress={this.handleSubmit}>
					<input className="newText"
						type="text"
						value={this.state.newWho}
					/>
					<input className="newText"
						type="text"
						value={this.state.newWhat}
					/>
				</form>

				<p className="preview">{this.state.newWho}</p>
				<br />
				<small>{this.state.newWhat}</small>
			</div>
		)
	}
}

ReactDOM.render(<SecondApp />, document.getElementById('second'))


	//PŘEDCHOZÍ VERZE NEŽ SE Z TOHO UDĚLAL FUNKCE listOfElements
		// const heros = this.state.characters.map( hero => ( //pro práci s poli používat fce, map, filter, concat, protože vytvářejí kopii původního pole a původní nepřepisují
		// 	<li className={hero.who.split(' ').length < 3 ? "strong" : ""}
		// 		key={hero.id}>

		// 		{hero.who}

		// 	{hero.who.split(' ').length <3} {/* zápis jako u if */}
		// 	{ 
		// 		console.log('fungujeme?')
		// 	}

		// 	{hero.who.split(' ').length < 3 && ( //zápis přes &&, kde se druhá část vyplní pokud platí první část
		// 	<small>
		// 		<strong>
		// 			-lol short name
		// 		</strong>
		// 	</small>)
		// 	}
		// 	</li>
		// ))