import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
		
		<ApprovalCard>
		<h4>Warning</h4>
			Are you sure you want to do this?
		</ApprovalCard>

		<ApprovalCard>
			<CommentDetail
				avatar={faker.image.avatar()} 
				author={faker.internet.userName()} 
				comment={faker.lorem.sentence()}/>
		</ApprovalCard>

			<ApprovalCard>
			<CommentDetail
				avatar={faker.image.avatar()} 
				author={faker.internet.userName()} 
				comment={faker.lorem.sentence()}/>
		</ApprovalCard>

			<ApprovalCard>
			<CommentDetail
				avatar={faker.image.avatar()} 
				author={faker.internet.userName()} 
				comment={faker.lorem.sentence()}/>
		</ApprovalCard>
		
		</div>
		);
};

ReactDOM.render(<App />, document.querySelector('#root'));

