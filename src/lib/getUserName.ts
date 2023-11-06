import { faker } from "@faker-js/faker";

export const getUserName = () => {
  const adverb = faker.word.adverb();
  const noun = faker.word.noun();
  return (
    adverb.charAt(0).toUpperCase() +
    adverb.slice(1) +
    noun.charAt(0).toUpperCase() +
    noun.slice(1)
  );
};
