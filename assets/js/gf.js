const scriptURL = 'https://script.google.com/macros/s/AKfycbygiLRLg6eFM4VUYg4EDOhK6Sm7NGbPM0LzInVy51rT2WXCIqVe6811ASwMNGHAqSo/exec'
    const form = document.forms['submit-to-google-sheet']

    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const alertku = document.querySelector(".myAlert");
    const x = document.getElementById('alertSukses');
    const b = `<div id="alertSukses" class="myAlert alert alert-success alert-dismissible fade show" role="alert">
                              <strong>Terima Kasih!</strong> Pesan anda telah kami terima.
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
    const a = `<div id="alertSukses" class="myAlert alert alert-info alert-dismissible fade show" role="alert">
                              Anda akan dialihkan ke whatsapp, mohon ditunggu...
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;

    form.addEventListener('submit', e => {
      e.preventDefault()
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            const myyAlert = document.getElementById("test").innerHTML = b;
            const myyAlert2 = document.getElementById("test1").innerHTML = a;
            const tes = setTimeout(function(){ window.location.href = "https://wa.me/6283115106335"; }, 1000);
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            form.reset();
            myyAlert();
            myyAlert2();
            tes();
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))      
    })