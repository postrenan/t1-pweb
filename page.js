
const titulo = document.getElementById('tituloTrab');
const aluno = document.getElementById('nomeAluno');
const orientador = document.getElementById('nomeProfOr');
const avaliador1 = document.getElementById('nomeProfAv1');
const avaliador2 = document.getElementById('nomeProfAv2');
const curso = document.getElementById('curso');
const nota = document.getElementById('nota');
const data_hora = document.getElementById('data-hora');
const data_fim = document.getElementById('dataFim');
const sala = document.getElementById('sala');
const assinaturaOr = document.getElementById('sala');
const assinaturaAv1 = document.getElementById('sala');
const assinaturaAv2 = document.getElementById('sala');

function gerarPDF() {
    // Crie um novo documento PDF
    const doc = new jsPDF();

    // Adicione o nome ao PDF
    doc.text(`Nome: ${aluno}`, 10, 10);

    // Salve o PDF (ou ofereça para download)
    doc.save('formulario.pdf');
}
