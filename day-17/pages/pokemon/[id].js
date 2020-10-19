import {
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import styled from "@emotion/styled";

export const getStaticPaths = async () => {
  const pokemon = require("../../src/pokemon.json");
  const paths = pokemon.map((p) => ({
    params: {
      id: p.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const allPokemon = require("../../src/pokemon.json");
  const pokemon = allPokemon.find((p) => p.id === parseInt(context.params.id));
  return {
    props: { pokemon },
  };
};

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TypeHeader = styled.span`
  font-weight: bold;
`;

export default ({ pokemon }) => {
  return (
    <PageContainer>
      <CssBaseline />

      <div>
        {pokemon && (
          <>
            <h1>{pokemon.name.english}</h1>
            <p>
              <TypeHeader>Type:</TypeHeader> {" " + pokemon.type.join(", ")}
            </p>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Attribute</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(pokemon.base).map((key) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{pokemon.base[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </div>
    </PageContainer>
  );
};
