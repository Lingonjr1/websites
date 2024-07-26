document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('discordForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const webhookUrl = document.getElementById('webhookUrl').value.trim();
        const message = document.getElementById('message').value.trim();
        const messageCount = parseInt(document.getElementById('messageCount').value.trim(), 10);

        if (!webhookUrl || !message || isNaN(messageCount) || messageCount < 1) {
            alert('Please enter a valid webhook URL, message, and number of messages.');
            return;
        }

        for (let i = 0; i < messageCount; i++) {
            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        content: message,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while sending the message.');
                return;
            }
        }

        alert('Messages sent successfully!');
    });
});
