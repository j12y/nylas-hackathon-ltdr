
# Long Thread; Didn't Read

You step away from your computer or take ONE day off and come back to a long
email thread of back and forth. This project takes those long-threads and
applies artificial intelligence (AI) to create an abstractive text
summarization of the key points you need to know to save you the time of catching
back up.

Thread Summary includes:

- text summarization
- count of the number of participants and messages
- count of the number of words and approximate reading time
- duration and rate of responses in the email thread to understand velocity

## Run the Demo

1. Copy `.example.env` to `.env` and replace with your own credentials.
2. Run `npm install && npm start` from the backend directory.
3. Run `npm install && npm start` from the frontend directory.

## Details

For more details and a recorded video walkthrough visit the hackathon project page:
https://devpost.com/software/long-thread-didn-t-read

## Implementation

- React Front-end 
- Node.js Back-end
- Nylas Email API: https://nylas.com
- Hugging Face Inference API: https://huggingface.co/docs/huggingface.js/inference/classes/HfInference#summarization
- with facebook/bart-large-cnn model for the text summarization: https://huggingface.co/docs/transformers/model_doc/bart






