const inputName = document.getElementById('input-name');
const inputRole = document.getElementById('input-role');
const previewName = document.getElementById('preview-name');
const previewRole = document.getElementById('preview-role');

inputName.addEventListener('input', (e) => {
    previewName.textContent = e.target.value || 'Seu Nome';
});

inputRole.addEventListener('input', (e) => {
    previewRole.textContent = e.target.value || 'Sua Especialidade';
});

function gerarPDF() {
    alert("Gerando documento formatado em PDF...");
}