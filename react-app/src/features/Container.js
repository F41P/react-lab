import styled from "styled-components";

function Container({ children }) {
  return <main>{children}</main>;
}

export default styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;