export interface ImageDatas {
  id: string;
  created_at: string;
  width: number;
  height: number;
  likes: number;
  urls: {
    raw: string;
    regular: string;
    small: string;
    thumb: string;
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
  id: string;
  username: string;
  name: string;
  bio: string;
  location: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  total_likes: number;
  total_photos: number;
  links: {
    self: string;
    download: string;
  };
  social: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
  };
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
  badge: {
    title: string;
    primary: boolean;
    slug: string;
  };
  followers_count: number;
  following_count: number;
  downloads: number;
}

export interface UserPhotos {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
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
    username: string;
    name: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  likes: number;
}

export interface Photos {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
  links: {
    self: string;
    download: string;
  };
  likes: number;
  user: {
    id: string;
    username: string;
    name: string;
    bio: string;
    location: string;
    links: {
      self: string;
      likes: number;
    };
    profile_image: {
      small: number;
      medium: string;
      large: string;
    };
  };
  exif: {
    make: string;
    model: string;
    name: string;
    exposure: string;
    aperture: string;
    focal_length: string;
    iso: number;
  };
  location: {
    name: string;
    city: string;
    country: string;
  };
  views: number;
  downloads: number;
  related_collections: {
    type: string;
    results: [
      {
        id: string;
        title: string;
        description: string;
        published_at: string;
        cover_photo: {
          id: string;
          width: number;
          height: number;
          urls: {
            full: string;
            regular: string;
            small: string;
          };
          links: {
            self: string;
            download: string;
          };
        };
        user: {
          id: string;
          username: string;
          name: string;
          profile_image: {
            small: string;
            medium: string;
            large: string;
          };
        };
      }
    ];
  };
}
