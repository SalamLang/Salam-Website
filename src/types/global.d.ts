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

declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.webp" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}
