const sendEmail = async ({ message }) => {
  try {
    const response = await fetch("https://grandalaclientservice.pythonanywhere.com/send_email", {
      method: "POST", // Specify the HTTP method as POST
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({ message }), // Convert the data to JSON and send it in the request body
    });

    if (response.ok) {
      const data = await response.json();
      // Handle the response data here
      console.log(data);
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error(error);
  }
};

sendEmail()
