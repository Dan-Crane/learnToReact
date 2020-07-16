import React from "react";

export class Status extends React.Component {
	constructor() {
		super();
		this.state = {
			editMode: true
		}
	}

	onEditMode = () => {
		this.setState({
			editMode: false
		})
	}
	offEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	render() {
		return (
			<>
				{
					this.state.editMode
						? <span onClick={() => this.onEditMode()}>
					it is status</span>
						: <input
								onBlur={()=> this.offEditMode()}
								autoFocus={true}/>
				}
			</>
		)
	}
}
