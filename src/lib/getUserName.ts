import { faker } from "@faker-js/faker";

const replaceHyphen = (str: string) => {
  return str.replace("-", "_");
};

export const getUserName = () => {
  const adjective = faker.word.adjective();
  const noun = faker.word.noun();
  const result = replaceHyphen(adjective) + "_" + replaceHyphen(noun);
  return result;
};
