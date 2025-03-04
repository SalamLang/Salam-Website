import instance from "@/utils/axios/http";

export const sendMobile = (params: { mobile: string }) => {
  return instance.post("/mobile", params);
};
