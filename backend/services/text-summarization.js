const dotenv = require('dotenv');
const { HfInference } = require('@huggingface/inference');

dotenv.config({ path: __dirname + '/../.env' });

const hf = new HfInference(process.env.HUGGINGFACE_HUB_API_KEY);

exports.summarizeText = async(thread) => {
  console.log("summarizeText");
  console.log(thread);

  const answer = await hf.summarization({
    model: "facebook/bart-large-cnn",
    inputs: thread,
  });

  console.log(answer.summary_text);
  return answer.summary_text;
}