const Apify = require('apify');
const { typeCheck } = require('type-check');

const INPUT_TYPE = `{
    message: String,
}`;

Apify.main(async () => {
  // kb
  // Fetch the input and check it has a valid format
  // You don't need to check the input, but it's a good practice.
  const input = await Apify.getValue('INPUT');
  if (!typeCheck(INPUT_TYPE, input)) {
    console.log('Expected input:');
    console.log(INPUT_TYPE);
    console.log('Received input:');
    console.dir(input);
    throw new Error('Received invalid input');
  }

  // Here's the place for your magic...
  console.log(`Input message: ${input.message}`);

  // Store the output
  const output = {
    message: `${input.message} Hello my friend!`,
  };
  await Apify.setValue('OUTPUT', output);
});

