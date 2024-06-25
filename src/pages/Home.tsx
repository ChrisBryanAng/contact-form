import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  InputTextbox,
  InputRadio,
  InputTextarea,
  InputCheckbox,
  Notification,
} from "../components";

const Home = () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const showToastMessage = () => {
    toast.promise(
      sleep(2000),
      {
        pending: "Submitting Form...",
        success: {
          render() {
            return (
              <Notification
                title="Message Sent!"
                body="Thanks for completing the form. We'll be in touch soon!"
              />
            );
          },
          icon: false,
        },
        error: "Oops! Something went wrong...",
      },
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        className: "toast-message",
      }
    );
  };

  // Formik logic
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      query: "",
      message: "",
      consent: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      emailAddress: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required"),
      query: Yup.string().required("Please select a query type"),
      message: Yup.string().required("This field is required"),
      consent: Yup.bool()
        .oneOf([true], "To submit this form, please consent to being contacted")
        .required("To submit this form, please consent to being contacted"),
    }),

    onSubmit: async () => {
      showToastMessage();
      await sleep(2000);
    },
  });

  return (
    <div className="h-full w-full md:w-[690px] lg:w-[736px] bg-white rounded-lg p-6 flex flex-col font-Karla gap-8 overflow-y-auto">
      <h1 className="text-black text-3xl font-bold">Contact Us</h1>

      <form
        onSubmit={formik.handleSubmit}
        className="h-max flex flex-col pb-4 justify-evenly"
      >
        <div className="h-max flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:justify-between w-full">
            <InputTextbox
              id="firstName"
              type="text"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              isTouched={formik.touched.firstName}
              error={formik.errors.firstName}
            />
            <InputTextbox
              id="lastName"
              type="text"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              isTouched={formik.touched.lastName}
              error={formik.errors.lastName}
            />
          </div>
          <InputTextbox
            id="emailAddress"
            type="email"
            label="Email Address"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            isTouched={formik.touched.emailAddress}
            error={formik.errors.emailAddress}
          />
        </div>

        <div className="flex flex-col gap-2 my-4">
          <p>
            Query Type <span className="text-green-600 ml-2">*</span>
          </p>
          <div role="group" className="flex flex-col md:flex-row gap-4">
            <InputRadio
              id="general-enquiry"
              name="query"
              label="General Enquiry"
              value="General Enquiry"
              selected={formik.values.query}
              onChange={formik.handleChange}
            />
            <InputRadio
              id="support-request"
              name="query"
              label="Support Request"
              value="Support Request"
              selected={formik.values.query}
              onChange={formik.handleChange}
            />
          </div>

          {formik.touched.query && formik.errors.query ? (
            <div className="text-red-error font-light">
              {formik.errors.query}
            </div>
          ) : null}
        </div>

        <InputTextarea
          id="message"
          label="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          isTouched={formik.touched.message}
          error={formik.errors.message}
        />

        <InputCheckbox
          id="consent"
          label="I consent to being contacted by the team"
          onChange={formik.handleChange}
          isTouched={formik.touched.consent}
          error={formik.errors.consent}
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-gray-900 text-center rounded-lg text-white py-3 text-lg"
        >
          {formik.isSubmitting ? "Submitting Form..." : "Submit"}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Home;
