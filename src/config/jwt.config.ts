export const jwt_config = {
  access_token_secret: process.env.JWT_SECRET || 'belajar_jwt',
  expired: process.env.JWT_EXPIRED || 3600,
  refresh_token_secret: process.env.JWT_REFRESH_SCREET || 'fajfngjgan',
};
