const UserToast = ({ user, addUser, active }) => {

    return (
        <a
            id={user.id}
            className={
                active
                    ? "btn btn-elect rounded-pill m-1 py-auto px-3 text-decoration-none active"
                    : "btn btn-elect rounded-pill m-1 py-auto px-3 text-decoration-none"
            }
            data-bs-toggle="button"
            onClick={() => addUser(user.id)}
        >
            {/*<img src={user.pic}/> */}
            <p className="fs-5 m-auto">{user.name}</p>
        </a>
    );
};

export default UserToast;
