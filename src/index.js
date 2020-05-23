import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
	return (
		<div>
		  <h1>Comment section</h1>
			<div class="ui container comments">
				<div class="comment">
					<a href="#" class="avatar">
						<img alt="avatar" src={faker.image.avatar()} />
					</a>
					<div class="content">
					<a href="#" class="author">
						Sammy
					</a>
					</div>
					<div class="metadata">
					<span class="date">
						Today at 5:11 P.M.
					</span>
					</div>
					<div class="text">
					Nice post buddy!
					</div>
				</div>

				<div class="comment">
					<a href="#" class="avatar">
						<img alt="avatar" src={faker.image.avatar()} />
					</a>
					<div class="content">
					<a href="#" class="author">
						Isaac
					</a>
					</div>
					<div class="metadata">
					<span class="date">
						Today at 7:40 P.M.
					</span>
					</div>
					<div class="text">
					Love this a lot
					</div>
				</div>

				<div class="comment">
					<a href="#" class="avatar">
						<img alt="avatar" src={faker.image.avatar()} />
					</a>
					<div class="content">
					<a href="#" class="author">
						Rudy
					</a>
					</div>
					<div class="metadata">
					<span class="date">
						Today at 11:11 P.M.
					</span>
					</div>
					<div class="text">
					You'll be a billionaire one day
					</div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

