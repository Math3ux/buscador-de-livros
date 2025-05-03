import {SearchBar} from '../components/SearchBar';

export const MainPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 60,
      }}
    >
      <h1
        style={{
          fontSize: 36,
          color: "#22223b",
          marginBottom: 8,
          fontWeight: 700,
          letterSpacing: 1,
          textShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        Buscador de Livros Online
      </h1>
      <p
        style={{
          color: "#4a5568",
          fontSize: 18,
          marginBottom: 32,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        Encontre livros de diversos autores e gêneros disponíveis online. Digite o nome de um livro ou autor para descobrir obras e informações sobre eles!
      </p>
      <SearchBar />
    </div>
  );
}
