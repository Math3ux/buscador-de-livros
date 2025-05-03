import { useState } from "react";
import { fetchBooks } from "../utils/api";

interface Book {
  cover_i?: number;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

interface BooksResponse {
  docs: Book[];
}

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState<BooksResponse>({ docs: [] });

    const handleSearch = async () => {
        const result = await fetchBooks(query);
        setBooks(result);
        console.log(result);
    };

    return (
        <div
            style={{
                maxWidth: 500,
                margin: "40px auto",
                padding: 32,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div style={{ width: "100%", display: "flex", gap: 8 }}>
                <input
                    type="text"
                    placeholder="Digite o nome do livro"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{
                        flex: 1,
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        fontSize: 16,
                        outline: "none",
                        transition: "border 0.2s",
                    }}
                    onFocus={e => (e.target.style.border = "1.5px solid #0070f3")}
                    onBlur={e => (e.target.style.border = "1px solid #ccc")}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: "10px 20px",
                        borderRadius: 8,
                        border: "none",
                        background: "#0070f3",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 16,
                        cursor: "pointer",
                        transition: "background 0.2s",
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = "#005bb5")}
                    onMouseOut={e => (e.currentTarget.style.background = "#0070f3")}
                >
                    Buscar
                </button>
            </div>
            <div style={{ marginTop: 32, width: "100%" }}>
                {books && books.docs && books.docs.length > 0 ? (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {books.docs.map((book: any, idx: number) => (
                            <li
                                key={idx}
                                style={{
                                    marginBottom: 24,
                                    display: "flex",
                                    alignItems: "center",
                                    background: "#f7f7f7",
                                    borderRadius: 10,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                    padding: 12,
                                }}
                            >
                                {book.cover_i ? (
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                        alt={book.title}
                                        style={{
                                            marginRight: 20,
                                            width: 60,
                                            height: 90,
                                            objectFit: "cover",
                                            borderRadius: 6,
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                            background: "#eaeaea",
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: 60,
                                            height: 90,
                                            background: "#eaeaea",
                                            marginRight: 20,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#aaa",
                                            borderRadius: 6,
                                            fontSize: 13,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        Sem capa
                                    </div>
                                )}
                                <div>
                                    <strong style={{ fontSize: 18, color: "#222" }}>{book.title}</strong>
                                    <div style={{ color: "#555", marginTop: 2, fontSize: 15 }}>
                                        {book.author_name ? book.author_name.join(", ") : "Autor desconhecido"}
                                    </div>
                                    {book.first_publish_year && (
                                        <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>
                                            Publicado em {book.first_publish_year}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : books && books.docs && books.docs.length === 0 ? (
                    <div style={{ color: "#888", textAlign: "center", marginTop: 16 }}>
                        Nenhum livro encontrado.
                    </div>
                ) : null}
            </div>
        </div>
    );
}
