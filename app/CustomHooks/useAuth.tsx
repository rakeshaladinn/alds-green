"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function useAuth() {
  const router = useRouter();

  const EnquiryFormaData = [
    // Full Name (Required)
    {
      id: "fullName",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter full name",
    },

    // Phone Number (Country Code + Number) (Required)
    // {
    //   id: "countryCode",
    //   type: "select",
    //   required: true,
    //   placeholder: "+91",
    //   options: [
    //     { label: "+91", name: "+91" },
    //     { label: "+1", name: "+1" },
    //     { label: "+44", name: "+44" },
    //   ],
    // },
    {
      id: "phoneNumber",
      type: "number",
      label: "Enter Your Number",
      required: true,
      placeholder: "Enter phone number",
    },

    // Company Name
    {
      id: "companyName",
      type: "text",
      label: "Enter Your company Name",
      placeholder: "Select",
    },

    // Email
    {
      id: "email",
      label: "Enter Your Email",
      type: "email",
      placeholder: "Select",
    },

    // Position at Company
    {
      id: "position",
      type: "text",
      label: "Enter Your Position",
      placeholder: "Select",
    },

    // Country
    {
      id: "country",
      type: "select",
      label: " Country",
      placeholder: "Select",
      options: [
        { label: "India", name: "India" },
        { label: "United States", name: "USA" },
        { label: "United Kingdom", name: "UK" },
      ],
    },

    // Renewable Segment
    {
      id: "renewableSegment",
      type: "select",
      label: "Your Renewable  Segment",
      placeholder: "Select",
      options: [
        { label: "Solar", name: "solar" },
        { label: "Wind", name: "wind" },
        { label: "Hybrid", name: "hybrid" },
      ],
    },

    // How you came to know about us?
    {
      id: "source",
      type: "select",
      label: "How you came to know about us?",
      placeholder: "Select",
      options: [
        { label: "Google", name: "google" },
        { label: "Social Media", name: "social" },
        { label: "Referral", name: "referral" },
      ],
    },
  ];

  /** ---------------------------------------
   *  VALIDATION SCHEMA
   ---------------------------------------- */
  const EnquirySchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    countryCode: Yup.string().required(),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{6,15}$/, "Invalid phone number")
      .required("Phone Number is required"),

    // Optional fields (no * in screenshot)
    companyName: Yup.string().optional(),
    position: Yup.string().optional(),
    country: Yup.string().optional(),
    renewableSegment: Yup.string().optional(),
    source: Yup.string().optional(),
    email: Yup.string().email("Invalid email").optional(),

    agree: Yup.boolean().optional(),
  });

  const EnquiryFormik = useFormik({
    initialValues: {
      fullName: "",
      countryCode: "+91",
      phoneNumber: "",
      companyName: "",
      email: "",
      position: "",
      country: "",
      renewableSegment: "",
      source: "",
      agree: false,
    },
    validationSchema: EnquirySchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          ...values,
          phone: `${values.countryCode}${values.phoneNumber}`,
        };

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          resetForm();
          router.push("/thankyou");
        }
      } catch (error) {
        console.error("Submission failed:", error);
      }
    },
  });

  return {
    EnquiryFormaData,
    EnquiryFormik,
  };
}
