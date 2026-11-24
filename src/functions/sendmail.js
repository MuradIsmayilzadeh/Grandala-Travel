const ENDPOINT = "https://grandalaclientservice.pythonanywhere.com/send_email";

// Sends a request to the Grandala client service. Returns true on success.
export default async function sendEmail(message) {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
}
