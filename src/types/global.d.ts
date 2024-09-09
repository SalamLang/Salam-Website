interface Window {
  MSStream?: any;
}

declare module "platform" {
  const platform: {
    os: {
      family: string;
    };
  };
  export default platform;
}
