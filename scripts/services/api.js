const API_KEY = "AIzaSyBe7ZV3sL0Q3x-fAtUOQ-W9kbEwj_FkjH0";
const URL_BASE = "https://www.googleapis.com/books/v1/volumes";

export async function buscarLivros(termo) {

    try {

        const resposta = await fetch(`${URL_BASE}?q=${termo}&maxResults=3&key=${API_KEY}`);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar livros.");
        }

        const dados = await resposta.json();

        return dados.items || [];

    } catch (erro) {

        console.error("Erro ao buscar livros:", erro);

        return [];

    }

}