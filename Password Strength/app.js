let input = document.querySelector(".custom-input");
        let main = document.getElementById("main");
        let toggleBtn = document.getElementById("toggleBtn");
        let isPasswordVisible = false;
        
        toggleBtn.addEventListener('click', function() {
            if (input.type=="text") {
                input.type = "password";
                toggleBtn.textContent = "Show";
            } else {
                input.type = "text";
                toggleBtn.textContent = "Hide";
            }
          
        });
        
        input.addEventListener('input', function() {
            if (input.value.length < 4) {
                main.innerHTML = "Weak";
                main.className = "weak"; 
            } else if (input.value.length >= 4 && input.value.length < 7) {
                main.innerHTML = "Medium"; 
                main.className = "medium";
            } else {
                main.innerHTML = "Strong";
                main.className = "strong";
            }
        });