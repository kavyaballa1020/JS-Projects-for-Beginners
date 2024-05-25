let input = document.querySelector("input");
        let QRimg = document.querySelector("#QRimg");

        function GenerateQR(){
            QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        }