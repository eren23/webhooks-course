exports.handler = (context, event, callback) => {
  const client = context.getTwilioClient();
  console.log("The text is being send");
  console.log(`Transcription, ${event.TranscriptionText}`);
  client.messages
    .create({
      to: context.PHONE_NUMBER,
      from: context.TWILIO_NUMBER,
      body: `New idea: ${event.TransriptionText}`,
    })
    .then((message) => callback(null, `Sent message ${message.sid}`))
    .catch((err) => {
      callback(err);
    });
  //   callback(null, "Hello mother...");
};
