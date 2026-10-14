import emailjs from "emailjs-com";

/**
 * Send an email via EmailJS
 * @param {object} params - object containing all template fields
 * @param {string} templateId - EmailJS template ID
 * @returns {Promise} - resolves if email sent successfully
 */
export const sendEmail = (params, templateId) => {
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId,
    params,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};
