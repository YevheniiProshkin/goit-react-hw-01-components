import {
  Description,
  Label,
  Quantity,
  StatsElement,
  StatsList,
  UserAvatar,
  UserInfo,
  UserName,
  UserProfile,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <Description>
        <UserAvatar src={avatar} alt="User avatar" class="avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatsList>
        <StatsElement>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsElement>
      </StatsList>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
