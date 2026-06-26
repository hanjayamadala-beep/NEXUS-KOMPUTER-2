function submitForm() {
  const serial = document.getElementById('serialInput').value.trim();
  const agreed = document.getElementById('agreeCheckbox').checked;

  if (!serial) {
    alert('Harap masukkan nomor seri perangkat Anda.');
    document.getElementById('serialInput').focus();
    return;
  }

  if (!agreed) {
    alert('Harap setujui kebijakan privasi terlebih dahulu.');
    return;
  }

  alert('Nomor seri berhasil dikirim: ' + serial);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitBtn').addEventListener('click', submitForm);
});