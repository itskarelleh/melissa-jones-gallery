import React from 'react';
import config from "../../firebase/config";

const Dashboard = () => {
    const user = config.auth().currentUser;
    return(
        <div className="admin">
            <div className="admin-header">
                <span>Welcome back {user.email}</span>
                <i class="fas fa-sign-out-alt" onClick={() => config.auth().signOut()}>Log Out</i>
            </div>
            <div className="panels">
                <div className="posts">
                    <button>Upload New Image</button>
                    <h3>Gallery</h3>
                    <span>View Gallery</span><span>See all</span>
                </div>
                <div className="posts">
                    <button>Publish New Article</button>
                    <h3>Articles</h3>
                    <span>View Articles</span><span>See all</span>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;