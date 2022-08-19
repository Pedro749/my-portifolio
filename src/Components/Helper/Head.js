import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {

    document.title = props.title + ' | Portifolio';
    document.querySelector("meta[name='description']")
    .setAttribute('content', props.descrption || '');

  }, [props]);

  return (
    <></>
  );
}

export default Head;