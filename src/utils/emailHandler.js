import { sendEmail } from "../services/emailjs.service";

/**
 * Generic submit handler for Formik forms using EmailJS
 * @param {object} values - Formik values
 * @param {function} resetForm - Formik resetForm
 * @param {function} setSubmitting - Formik setSubmitting
 * @param {function} controlForm - function to close modal / control form
 * @param {function} setToast - setState to show toast
 * @param {string} templateId - EmailJS template ID
 */
export const handleEmailSubmit = async (
  values,
  { resetForm, setSubmitting },
  controlForm,
  setToast,
  templateId
) => {
  try {
    await sendEmail(
      {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      },
      templateId
    );

    setToast({
      show: true,
      message: "Your message has been sent successfully!",
      variant: "success",
    });

    resetForm();
    setTimeout(controlForm, 1500);
  } catch (error) {
    console.error("EmailJS Error:", error);

    setToast({
      show: true,
      message: "Failed to send message. Please try again.",
      variant: "danger",
    });
  } finally {
    setSubmitting(false);
  }
};
