# Send Message to Discord

## Overview

This project provides a simple web interface to send messages to a Discord channel using a webhook URL. You can specify the number of messages to send and the content of each message.

## Features

- Send a single or multiple messages to a Discord channel.
- Simple web form for inputting the Discord webhook URL, message content, and number of messages.
- Easy-to-use interface with clear instructions.

## How to Use

1. **Create a Discord Webhook URL:**
   - Open Discord and navigate to your server.
   - Click on the server name at the top of the channel list and select "Server Settings."
   - Go to the "Integrations" tab.
   - Click on "Webhooks."
   - Click "New Webhook."
   - Give your webhook a name and select the channel where you want messages to be sent.
   - Click "Copy Webhook URL" to copy the URL to your clipboard.

2. **Send a Message:**
   - Open the `index.html` file in your web browser.
   - Enter the Discord Webhook URL you copied into the "Discord Webhook URL" field.
   - Enter the message you want to send in the "Message" field.
   - Specify the number of messages you want to send in the "Number of Messages" field.
   - Click the "Send" button to send the message(s).

## Files

- `index.html`: The main HTML file that contains the form and instructions.
- `styles.css`: The CSS file for styling the web page.
- `script.js`: The JavaScript file that handles form submission and message sending.

## Example

Here's a quick example of how the form looks and works:

![Screenshot](example-screenshot.png) <!-- Replace with an actual screenshot of your form -->

1. Input the webhook URL.
2. Enter the message content.
3. Specify the number of messages.
4. Click "Send" to dispatch the messages.

## Troubleshooting

- **Error: "Please enter valid webhook URL, message, and number of messages."**
  - Make sure you have entered a valid webhook URL and message. Ensure the number of messages is a positive integer.

- **Error: "Failed to send message."**
  - Check the webhook URL to ensure it is correct and active.

- **Error: "An error occurred while sending the message."**
  - This error usually indicates a network issue or an invalid URL. Check your internet connection and the webhook URL.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Your contributions are welcome!

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).

---

Thank you for using the Send Message to Discord tool. Happy messaging!
