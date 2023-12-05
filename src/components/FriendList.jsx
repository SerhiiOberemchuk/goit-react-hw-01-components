

export const FriendList = ({friends}) => {
    
    return <ul className="friend-list">
        {friends.map(friend => <ItemFriends key={friend.id} isOnline={friend.isOnline? 'green':'red'} avatar={ friend.avatar} name={friend.name} />)}
  </ul>;
};

const ItemFriends = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
          <span className="status" style={{ backgroundColor:isOnline}}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
