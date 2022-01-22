import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Text } from "./QuoteStyles";

const url = "https://goquotes-api.herokuapp.com/api/v1/all/quotes";

const Quote = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <Container>
      <Text>{data.quotes[0].text}</Text>
      <Text>{data.quotes[0].author}</Text>
    </Container>
  );
};

export default Quote;
