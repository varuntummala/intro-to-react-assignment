import "./styles/UserProfile.css";
import PropTypes from "prop-types";


function UserProfile(props) {
    return (
        <div className="row gy-3">
            <div className="col-md-8 userprofile m-auto">
                <div className="row pt-3 text-box">
                    <p className="name">User Name : {props.name}</p>
                    <p className="email">User Email : {props.email}</p>
                    <img src={props.imgURL} alt="User Image"/>

                </div>
            </div>
        </div>
    );
}

UserProfile.defaultProps = {
    name: "Untitled Name",
    email: "Untitled Email",
    imgURL: "Untitled Image URL"
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired
};
export default UserProfile;
