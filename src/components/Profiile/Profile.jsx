import {
  ProfileWrapper,
  ProfileList,
  ListItem,
  InnerWrapper,
  AdditionalInfo,
} from './Profile.style';

export const Profile = ({
  userInfo: {
    username,
    tag,
    avatar,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileWrapper className="profile">
      <InnerWrapper className="description">
        <img src={avatar} alt="User avatar" className="avatar" width={142} />
        <p className="name">{username}</p>
        <AdditionalInfo className="tag">@{tag}</AdditionalInfo>
        <AdditionalInfo className="location">{location}</AdditionalInfo>
      </InnerWrapper>

      <ProfileList className="stats">
        <ListItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </ListItem>
      </ProfileList>
    </ProfileWrapper>
  );
};
