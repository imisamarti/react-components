import React from 'react';

const ApprovalCard = () => {
	return (
		<div className="ui card">
		    <div className="content">
			      <div className="header">
			        Elliot Fu
			      </div>
			      <div className="meta">
			        Friends of Veronika
			      </div>
			      <div className="description">
			        Elliot requested permission to view your contact details
			      </div>
			  </div>
			    <div className="extra content">
			      <div className="ui two buttons">
			        <div className="ui basic green button">Approve</div>
			        <div className="ui basic red button">Decline</div>
		      </div>
		      </div>
  		</div>
	);
};

export default ApprovalCard;