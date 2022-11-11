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
			dude: 'Marceline the  King',
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

	handleChange = event => { //šipková fce si nevytváří vlastní kontext pro THIS jako normální fce() a odkazuje kontext na this pro SecondApp
		this.setState({
			dude: event.target.value
		})
	}

	handleSubmit = event => { //šipková fce si nevytváří vlastní kontext pro THIS jako normální fce() a odkazuje kontext na this pro SecondApp
		event.preventDefault();

		this.setState((state) => {

			const newHero = {
				id: Math.max(...state.characters.map(d => d.id)) + 1,
				who: this.state.dude,
				what: this.state.dude,
				cool: 20
			}
			return {
				characters: [...this.state.characters, newHero]
			}
		})
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
					</article>
						<input className="coolest" type="number" value="12" />
				</li>
			))
		)
	}


	/*
		TEMPLATE
	 */
	render() {

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

		return (
			<div>
				<ul>
					{this.listOfLiElements()}
				</ul>

				<form className="add-new" onSubmit={this.handleSubmit}>
					<input className="newText" type="text" onChange={this.handleChange} />
				</form>

				<p className="preview">{this.state.dude}</p>
			</div>
		)
	}
}

ReactDOM.render(<SecondApp />, document.getElementById('second'))