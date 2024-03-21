import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const canvas = document.querySelector('canvas');

const form = document.querySelector('.signature-pad-form');


const titulo = document.getElementById('tituloTrab').value;
const aluno = document.getElementById('nomeAluno').value;
const orientador = document.getElementById('nomeProfOr').value;
const avaliador1 = document.getElementById('nomeProfAv1').value;
const avaliador2 = document.getElementById('nomeProfAv2').value;
const curso = document.getElementById('curso').value;
const nota = document.getElementById('nota').value;
const data_hora = document.getElementById('data-hora').value;
const data_fim = document.getElementById('dataFim').value;
const sala = document.getElementById('sala').value;
const assinaturaOr = document.getElementById('sala').value;
const assinaturaAv1 = document.getElementById('sala').value;
const assinaturaAv2 = document.getElementById('sala').value;


async function modifyPdf() {
    const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()


    const pdfBytes = await pdfDoc.save()
}