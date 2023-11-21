const ratingSystem = (() => {


    const buttonScanner = (()=>{


        let optionArray = [
            document.querySelector("#option1"),
            document.querySelector("#option2"),
            document.querySelector("#option3"),
            document.querySelector("#option4"),
            document.querySelector("#option5")
        ];

        optionArray.forEach(option => {
            option.addEventListener("click",handleClick)
        })


        function handleClick(){
            optionArray.forEach(otherOption => {
                otherOption.classList.remove("active");
            })

            this.classList.add("active")


            getValue()
        }

    });




    const getValue = () => {

        let optionArray = [
            document.querySelector("#option1"),
            document.querySelector("#option2"),
            document.querySelector("#option3"),
            document.querySelector("#option4"),
            document.querySelector("#option5")
        ]

        let value = "";

        let activeOption = optionArray.find(option => option.classList.contains("active"));

        if (activeOption){
            switch(activeOption.id){
                case "option1":
                    value = "1";
                    console.log(value);
                break;
                case "option2":
                    value="2";
                    console.log(value);
                break
                case "option3":
                    value="3";
                    console.log(value);
                break
                case "option4":
                    value="4";
                    console.log(value);
                break
                case "option5":
                    value = "5";
                    console.log(value)
                break
            }

            
        }

        updateTxt(value)

        
        function updateTxt (x){

            let scoreMsg = document.getElementById("scorecard");

            scoreMsg.innerText = `You selected ${x} out of 5!`
        }







    
    }



    const buttonPressed = () => {


        let button = document.getElementById("ratingbutton");
        button.addEventListener("click", displayUpdater)

        function displayUpdater(){
            let msgBox = document.querySelector("#successmsg");
            msgBox.style.display = "flex";
        }

    }



    const launchStuff = (() => {

        buttonScanner();
        buttonPressed();
        getValue();

    })();

})();