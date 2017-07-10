import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
	var transactions = null

	if (!props.searchTerm ) {
	 	transactions = props.transactions.map( transaction => <Transaction {...transaction} />)
	} else {
		// var splitTerm = props.searchTerm.split('')
		// transactions = props.transactions.map( transaction  => {
		// 	if (transaction.category.split('')[index] === splitTerm[index] || transaction.description.split('') === splitTerm) {
		// 		<Transaction {...transaction} />
		// 	}
		}

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

				{transactions}

      </tbody>
    </table>
  )
}

export default TransactionsList
