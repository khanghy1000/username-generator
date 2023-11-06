import { faker } from "@faker-js/faker";

export const getUserName = () => {
  const adjective = faker.word.adjective();
  const noun = faker.word.noun();
  return (
    adjective.charAt(0).toUpperCase() +
    adjective.slice(1) +
    noun.charAt(0).toUpperCase() +
    noun.slice(1)
  );
};
