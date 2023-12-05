import user from '../jsons/user.json';
import data from '../jsons/data.json';
import friends from '../jsons/friends.json';

import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
export const App = () => {
  return (
    <div  
    >
     <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    {/* <FriendList /> */}
    </div>
  );
};
