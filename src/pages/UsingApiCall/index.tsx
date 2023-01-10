import { useApiCall } from "../../hooks/apiCall";

const UsingApiCall: React.FC = () => {
  const { executeApiCall } = useApiCall();

  async function exampleFunction(): Promise<void> {
    try {
      const data = await executeApiCall({
        path: '/your/url',
        payload: {
          payloadData: '',
        },
      });
    } catch (err) {
      console.log('error');
    }
  }
  return (
    <></>
  );
};

export default UsingApiCall;