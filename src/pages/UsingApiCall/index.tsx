import { useCallback } from "react";
import { useApiCall } from "../../hooks/apiCall";
import { MESSAGES } from "./utils";

const UsingApiCall: React.FC = () => {
  const { executeApiCall } = useApiCall();

  const exampleFunction = useCallback(async () => {
      const data = await executeApiCall({
        path: '/your/url',
        payload: {
          payloadData: '',
        },
        customErrorParser: (error) =>
        Object.values(MESSAGES).find(({ title }) => title === error.message) ||
        MESSAGES.createError,
    });

    if (!data) return;
  }, []);
  return (
    <></>
  );
};

export default UsingApiCall;