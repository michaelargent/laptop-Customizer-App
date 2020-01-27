import React, { Component } from 'react'

export default class total extends Component {

	render() {

		 const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

		return (
			<>
				{this.props.format.format(total)}
			</>
		)
	}
}
