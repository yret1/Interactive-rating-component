const ratingSystem = (() => {


    const buttonScanner = (()=>{


        let optionArray = [
            document.querySelector("#option1"),
            document.querySelector("#option2"),
            document.querySelector("#option3"),
            document.querySelector("#option4"),
            document.querySelector("#option5")
        ]

        optionArray.forEach(option => {
            option.addEventListener("click", () => {

                optionArray.forEach(otherOption => {
                    otherOption.classList.remove("active")
                })

                option.classList.add("active")
            })
        });
    })();




    const getValue = () => {

        let value = "";

        if(optionArray[0].classList.contains(".active")){
            value = "1";
        }else if (option2.classList.contains(".active")){
            option1.classList.remove(".active")
            option3.classList.remove(".active")
            option4.classList.remove(".active")
            option5.classList.remove(".active")
            value = "2";
        }else if(option3.classList.contains(".active")){
            option2.classList.remove(".active")
            option1.classList.remove(".active")
            option4.classList.remove(".active")
            option5.classList.remove(".active")
            value = "3";
        }else if(option4.classList.contains(".active")){
            option2.classList.remove(".active")
            option3.classList.remove(".active")
            option1.classList.remove(".active")
            option5.classList.remove(".active")
            value = "4";
        }else if(option5.classList.contains(".active")){
            option2.classList.remove(".active")
            option3.classList.remove(".active")
            option4.classList.remove(".active")
            option1.classList.remove(".active")
            value = "5";
        }


        return value

    }


    const updateValue = () => {

    }

    const changeActive = () => {

    }

})();