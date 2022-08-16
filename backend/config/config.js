const defaultData = {
  SECRET_KEY: "secretkey",
  EXPIRES_IN: "1h", // expires in 30 days
  SALT_ROUND: 10,
  JWT_ALGORITHM: "HS256",
  SETTING_PRIMARY_ID: "5f8f479821eef9523e865376",
  FROM_EMAIL: 'mail@cbnits.com',
  HOST_EMAIL: 'mail@cbnits.com',
  HOST_EMAIL_PASSWORD: 'w#llcbn1ts',
  BASE_URL: "http://localhost:6020",

  DATABASE_URI:
    "mongodb+srv://mukesh_thakur:Mukesh@123@wrg.kbpfz.mongodb.net/demoDatabase?retryWrites=true&w=majority",
  USER_IMAGE_PATH: "/userImage/",
};

export default defaultData;
