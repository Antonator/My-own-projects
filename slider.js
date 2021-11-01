const img = document.createElement("IMG");
const slider_bg = document.createElement("P")

document.addEventListener("DOMContentLoaded", function(){

    let img_index = 0

    function Slider(){

        const slider = document.querySelector(".slider");
    
        img_list = [
            "build/img/girl.webp", 
            "build/img/landscape.webp"
        ];
    
        if (img_index == 0){
            img_index = 1
            img.src = img_list[img_index]
            slider_bg.textContent = "Grandes paisajes, grandes tomas"

        } else{
            img_index = 0
            img.src = img_list[img_index]
            slider_bg.textContent = "Captura tu momento especial"

        };

        slider.appendChild(slider_bg)
        slider.appendChild(img);

    }

    Slider()

    setInterval(Slider, 8000)
    
})

