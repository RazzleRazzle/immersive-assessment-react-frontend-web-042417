import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

		this.state = {
      searchTerm: '',
      transactions: []
    }
  }

	componentWillMount() {
  	const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'
		fetch(URL)
			.then(response => response.json())
			.then(transactions => this.setState({ transactions: transactions }))
	}

  handleChange = (event) => {
		event.preventDefault()
		const input = event.target.value
		this.setState({
			searchTerm: input
		})
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
