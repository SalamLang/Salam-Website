"use client";

import React, { useRef } from "react";
import Input from "../atoms/Input";

import Mobile from "../../../public/svgs/mobile.svg";
import { Button } from "../common/Button";
import { useMutation } from "@tanstack/react-query";
import { sendMobile } from "@/utils/api/handler";
import toast, { LoaderIcon } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import { convertToPersianNumbers } from "@/utils/helper/handlers";

function BoxSentCode() {
  const inputRef = useRef(null);

  const { mutateAsync: sendMobileMutation, isPending } = useMutation({
    mutationKey: ["send-mobile"],
    mutationFn: sendMobile,
    onSuccess: (res) => {
      toast.success("با موفقیت شماره ارسال شد");
    },
    onError: (err) => {
      toast.error(`خطا :${err.message}`);
    },
  });

  const formik = useFormik({
    initialValues: {
      mobile: "",
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(/^[۰-۹]*$/, "فقط اعداد مجازه")
        .matches(/^۰۹[0-۹]{9}$/, "شماره باید با ۰۹ شروع شه و ۱۱ رقم باشه")
        .required("پرکردن این فیلد الزامیه"),
    }),
    onSubmit: (values) => {
      const mobile = convertToPersianNumbers(values?.mobile);

      sendMobileMutation({ mobile });
    },
  });

  const handleChange = (event) => {
    const { value } = event.target;
    formik.setFieldValue("mobile", convertToPersianNumbers(value));
  };

  const handleFormClick = (e) => {
    if (e.target.type !== "submit") {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <form
          action=""
          onSubmit={formik.handleSubmit}
          onClick={handleFormClick}
          className={
            "bg-light-orange relative max-w-[400px] md:max-w-[500px] w-full h-full max-sm:h-5/6 rounded-[40px] flex flex-row-reverse items-center justify-between max-sm:px-1.5 px-2 max-sm:py-1 py-1.5 md:p-2.5"
          }
        >
          <div className="relative w-full flex flex-row-reverse gap-1 md:gap-4 items-center justify-start">
            <div className="w-[30px]">
              <Mobile className="max-sm:scale-[0.55] max-md:scale-[0.65] scale-75 opacity-45 brightness-0" />
            </div>
            <div className="bg-black/[0.05] !rounded-full max-sm:w-[1.5px] mr-1 w-[2px] h-[30px]"></div>
            <Input
              ref={inputRef}
              type="text"
              placeholder="۰۹۹۱۳۹۱۵۲۵۴"
              maxLength={11}
              className={
                "placeholder:opacity-45 h-full placeholder:max-sm:text-sm"
              }
              dir="ltr"
              {...formik.getFieldProps("mobile")}
              onChange={handleChange}
            />
          </div>
          {formik.values.mobile.length === 0 && (
            <span className="text-xs sm:text-sm md:text-base opacity-45 mr-3">
              مثال:
            </span>
          )}
          <Button
            intent="orange"
            size="medium"
            rounded="full"
            type="submit"
            className="text-sm !py-0 !px-0 min-h-10 max-md:min-h-8 max-md:max-w-16 max-w-28 w-full !h-full flex justify-center items-center"
            disabled={isPending}
          >
            {isPending ? (
              <LoaderIcon className="max-md:!w-4 max-md:!h-4 !w-5 !h-5 m-1.5" />
            ) : (
              "ارسال کد"
            )}
          </Button>
        </form>
      </div>
      <div className="relative w-full min-h-10 h-full flex justify-center items-center">
        <AnimatePresence>
          {formik.errors.mobile && (
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute max-sm:text-xs max-md:text-sm !text-bg-main"
            >
              {formik.errors.mobile}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default BoxSentCode;
