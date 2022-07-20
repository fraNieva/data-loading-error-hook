import { useAsyncFunction } from "../UseAsyncFunction";

const getDogImages = (): Promise<PetImageResponse> => {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
    if (response.status !== 200) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
};

type PetImageResponse = {
  status: string;
  message: string;
};

const dogImageEmpty: PetImageResponse = {
  status: "string",
  message: "string",
};

export const useRequest = () => {
  const [dogImage, error, isPending, refetch] = useAsyncFunction(
    getDogImages,
    dogImageEmpty
  );
  return { dogImage, error, isPending, refetch };
};
