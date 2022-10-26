export interface ImageDatas {
  id: number;
  width: number;
  height: number;
  urls: {
    raw: string;
    regular: string;
    small: string;
  };
  links: {
    self: string;
    download: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    bio: string;
    first_name: string;
    last_name: string;
    location: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    total_likes: number;
    total_photos: number;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
    };
  };
}

export interface UserDatas {
  id: number;
  width: number;
  height: number;
  urls: {
    raw: string;
    regular: string;
    small: string;
  };
  links: {
    self: string;
    download: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    bio: string;
    first_name: string;
    last_name: string;
    location: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    total_likes: number;
    total_photos: number;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
    };
  };
}

export interface Photos {
  id: string;
  username: string;
  name: string;
  bio: string;
  photos: [
    {
      id: string;
      urls: {
        raw: string;
        regular: string;
        small: string;
      };
    }
  ];
}
